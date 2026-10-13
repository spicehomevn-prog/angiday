/* ===================== XUẤT PDF =====================
   Tải pdfmake + font Be Vietnam Pro (có đủ dấu tiếng Việt) khi bấm nút lần đầu,
   rồi tạo file PDF khổ A4 ngang. Không tải được thư viện → mở hộp thoại In. */
const PDF_COLORS = {
  ink: '#1B1714', soft: '#6F685F', line: '#E6E0D4', paper: '#F2EEE6',
  late: '#FCE3DB', lateInk: '#B23D1E', soon: '#FFF1C2', soonInk: '#7A5800', done: '#E3F1E6', doneInk: '#2E6B47', wait: '#FFFFFF'
};
let pdfReady = null;
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src; s.onload = resolve; s.onerror = () => reject(new Error('Không tải được ' + src));
    document.head.appendChild(s);
  });
}
function ensurePdf() {
  if (!pdfReady) {
    pdfReady = loadScript('vendor/pdfmake.min.js')
      .then(() => loadScript('vendor/vfs_fonts_bvp.js'))
      .then(() => {
        window.pdfMake.fonts = { BeVietnamPro: {
          normal: 'BeVietnamPro-Regular.ttf', bold: 'BeVietnamPro-Bold.ttf',
          italics: 'BeVietnamPro-Regular.ttf', bolditalics: 'BeVietnamPro-Bold.ttf' } };
      })
      .catch(e => { pdfReady = null; throw e; });
  }
  return pdfReady;
}

function exportPdf() {
  const opt = (type, ic, t, d) => `<button class="opt" onclick="makePdf('${type}')"><span class="ic">${icon(ic, 26)}</span>
    <span><span class="t">${t}</span><br><span class="d">${d}</span></span></button>`;
  openSheet(`${sheetHead('Xuất báo cáo PDF', 'Chọn loại báo cáo. File PDF sẽ được tải về máy để in hoặc gửi đi.')}
    ${opt('month', 'calendar', 'Báo cáo ' + Core.periodLabel(ui.month).toLowerCase(), 'Tổng quan tháng, sổ tiền thuê, phí quản lý và các khoản quá hạn')}
    ${opt('all', 'wallet', 'Toàn bộ sổ thu', 'Mọi kỳ tiền thuê và phí quản lý, kèm tổng nợ')}
    ${opt('contracts', 'file', 'Danh sách hợp đồng', 'Thông tin 1 trang của tất cả hợp đồng, kèm số còn nợ')}
    <button class="btn btn-line btn-block" style="margin-top:16px" onclick="closeSheet()">Đóng</button>`);
}

async function makePdf(type) {
  closeSheet();
  toast('Đang tạo file PDF…');
  try {
    await ensurePdf();
    const td = today();
    const doc = type === 'month' ? docMonth(ui.month, td) : type === 'all' ? docAll(td) : docContracts(td);
    const name = type === 'month' ? `bao-cao-thue-nha-${ui.month.slice(5)}-${ui.month.slice(0, 4)}.pdf`
      : type === 'all' ? `so-thu-toan-bo-${td}.pdf` : `danh-sach-hop-dong-${td}.pdf`;
    window.pdfMake.createPdf(doc).download(name, () => toast('Đã tạo file ' + name));
  } catch (e) {
    toast('Không tải được công cụ PDF. Mở hộp thoại In — chọn “Lưu thành PDF”.');
    setTimeout(() => window.print(), 900);
  }
}

/* ---------- Khung chung ---------- */
function pdfBase(title, sub, content, td) {
  return {
    pageSize: 'A4', pageOrientation: 'landscape', pageMargins: [28, 34, 28, 40],
    info: { title, author: 'Sổ Thuê Nhà' },
    defaultStyle: { font: 'BeVietnamPro', fontSize: 9, color: PDF_COLORS.ink, lineHeight: 1.15 },
    styles: {
      title: { fontSize: 17, bold: true },
      sub: { fontSize: 9.5, color: PDF_COLORS.soft, margin: [0, 2, 0, 10] },
      h2: { fontSize: 12, bold: true, margin: [0, 14, 0, 6] },
      th: { bold: true, color: '#FFFFFF', fillColor: PDF_COLORS.ink, fontSize: 8 },
      total: { bold: true, fillColor: PDF_COLORS.paper }
    },
    footer: (page, pages) => ({ columns: [
      { text: 'Sổ Thuê Nhà · Xuất ngày ' + Core.fmtDate(td), color: PDF_COLORS.soft, fontSize: 8 },
      { text: 'Trang ' + page + '/' + pages, alignment: 'right', color: PDF_COLORS.soft, fontSize: 8 }
    ], margin: [28, 12, 28, 0] }),
    content: [{ text: title, style: 'title' }, { text: sub, style: 'sub' }].concat(content)
  };
}
const TABLE_LAYOUT = {
  hLineWidth: (i, node) => (i === 0 || i === node.table.body.length ? 0 : 0.6),
  vLineWidth: () => 0, hLineColor: () => PDF_COLORS.line,
  paddingLeft: () => 4, paddingRight: () => 4, paddingTop: () => 4, paddingBottom: () => 4
};
function pdfTable(widths, header, rows, footer) {
  const body = [header.map(h => ({ text: h, style: 'th' }))].concat(rows);
  if (footer) body.push(footer.map(f => Object.assign({ style: 'total' }, typeof f === 'object' ? f : { text: f })));
  return { table: { headerRows: 1, widths, body, dontBreakRows: true }, layout: TABLE_LAYOUT, fontSize: 8 };
}
const R = v => ({ text: v, alignment: 'right', noWrap: true });
const M = n => R(Core.formatVND(n));
/* Ô trạng thái: chữ thường (PDF không vẽ được emoji) + nền màu theo quy tắc màu. */
function pdfStatus(calc, kind) {
  const text = Core.statusText(calc, kind).replace(/^\S+\s/, '');
  return { text, bold: calc.status !== 'wait', fillColor: PDF_COLORS[calc.status], color: PDF_COLORS[calc.status + 'Ink'] || PDF_COLORS.ink };
}
function summaryBlock(label, rows) {
  return { width: '*', stack: [{ text: label, bold: true, fontSize: 10, margin: [0, 0, 0, 4] },
    { table: { widths: ['*', 'auto'], body: rows.map(([k, v, bold]) => [{ text: k, color: PDF_COLORS.soft }, { text: v, bold: !!bold, alignment: 'right', noWrap: true }]) }, layout: TABLE_LAYOUT }] };
}

/* ---------- Bảng sổ thu / sổ phí ---------- */
function rentTable(rows, td, withPeriod) {
  let due = 0, paid = 0, rem = 0;
  const body = rows.map(r => {
    const c = Core.rowCalc(r, td), ct = contractById(r.contract) || {};
    due += c.due; paid += c.paid; rem += Math.max(0, c.remaining);
    return [withPeriod ? Core.periodShort(r.period) : null, r.contract, ct.tenant || '', ct.property || '', R(r.months || ''), M(c.due), Core.fmtDate(r.dueDate),
      Core.fmtDate(r.paidDate), M(c.paid), M(Math.max(0, c.remaining)), pdfStatus(c, 'rent'), { text: r.note || '', fontSize: 8 }].filter(x => x !== null);
  });
  const header = ['Mã HĐ', 'Khách thuê', 'Nhà / Phòng', 'Số tháng', 'Phải thu', 'Hạn thu', 'Ngày thu', 'Đã thu', 'Còn thiếu', 'Trạng thái', 'Ghi chú'];
  const widths = [34, 82, 66, 24, 56, 52, 52, 56, 56, 64, '*'];
  const total = ['', '', '', '', M(due), '', '', M(paid), M(rem), '', ''];
  if (withPeriod) { header.unshift('Kỳ'); widths.unshift(36); total.unshift(''); }
  total[0] = { text: 'Tổng cộng', colSpan: withPeriod ? 5 : 4 };
  return pdfTable(widths, header, body, total);
}
function feeTable(rows, td, withPeriod) {
  let due = 0, paid = 0, rem = 0;
  const body = rows.map(r => {
    const c = Core.rowCalc(r, td), ct = contractById(r.contract) || {};
    due += c.due; paid += c.paid; rem += Math.max(0, c.remaining);
    return [withPeriod ? Core.periodShort(r.period) : null, r.contract, ct.property || '', ct.feeTo || '', M(c.due), Core.fmtDate(r.dueDate),
      Core.fmtDate(r.paidDate), M(c.paid), M(Math.max(0, c.remaining)), pdfStatus(c, 'fee'), { text: r.note || '', fontSize: 8 }].filter(x => x !== null);
  });
  const header = ['Mã HĐ', 'Nhà / Phòng', 'Đóng cho', 'Phải đóng', 'Hạn đóng', 'Ngày đóng', 'Đã đóng', 'Còn nợ', 'Trạng thái', 'Ghi chú'];
  const widths = [34, 88, 60, 56, 52, 52, 56, 56, 64, '*'];
  const total = ['', '', '', M(due), '', '', M(paid), M(rem), '', ''];
  if (withPeriod) { header.unshift('Kỳ'); widths.unshift(36); total.unshift(''); }
  total[0] = { text: 'Tổng cộng', colSpan: withPeriod ? 4 : 3 };
  return pdfTable(widths, header, body, total);
}
function lateTable(td) {
  const rows = [];
  ['rent', 'fee'].forEach(kind => KIND[kind].list().forEach(r => {
    const c = Core.rowCalc(r, td);
    if (c.status === 'late') rows.push({ kind, r, c });
  }));
  rows.sort((a, b) => b.c.daysLate - a.c.daysLate);
  if (!rows.length) return { text: 'Không có khoản nào quá hạn.', color: PDF_COLORS.doneInk };
  return pdfTable([30, 72, 34, 170, 86, 60, 52, '*'],
    ['Loại', 'Ai', 'Mã HĐ', 'Khách thuê / Nhà', 'Kỳ', 'Còn thiếu', 'Hạn', 'Trễ'],
    rows.map(({ kind, r, c }) => {
      const ct = contractById(r.contract) || {};
      return [kind === 'rent' ? 'Thuê' : 'Phí', kind === 'rent' ? 'Khách nợ mình' : 'Mình nợ phí', r.contract,
        (ct.tenant || '') + (ct.property ? ' · ' + ct.property : ''), 'Kỳ ' + Core.periodShort(r.period) + (r.months > 1 ? ' (' + r.months + ' tháng)' : ''),
        M(c.remaining), Core.fmtDate(r.dueDate), { text: c.daysLate + ' ngày', bold: true, color: PDF_COLORS.lateInk }];
    }));
}
function debtColumns(td) {
  const rd = Core.totalDebt(data.rent, td), fd = Core.totalDebt(data.fees, td);
  return [
    summaryBlock('Khách còn nợ mình (mọi kỳ)', [['Tổng tiền', Core.money(rd.amount), true], ['Số khoản quá hạn', String(rd.count)]]),
    summaryBlock('Mình còn nợ phí quản lý (mọi kỳ)', [['Tổng tiền', Core.money(fd.amount), true], ['Số khoản quá hạn', String(fd.count)]])
  ];
}

/* ---------- 3 loại báo cáo ---------- */
function docMonth(m, td) {
  const rs = Core.monthSummary(data.rent, m, td), fs = Core.monthSummary(data.fees, m, td);
  const sortByContract = list => list.filter(r => r.period === m).sort((a, b) => a.contract.localeCompare(b.contract));
  return pdfBase('Báo cáo thuê nhà — ' + Core.periodLabel(m), 'Số liệu tính đến ngày ' + Core.fmtDate(td) + ' · Sổ Thuê Nhà', [
    { columns: [
      summaryBlock('Tiền thuê thu vào', [['Tổng phải thu trong tháng', Core.money(rs.due)], ['Đã thu', Core.money(rs.paid)], ['Còn phải thu', Core.money(rs.remaining), true], ['Số khoản quá hạn', String(rs.late)]]),
      summaryBlock('Phí quản lý phải đóng', [['Tổng phí phải đóng', Core.money(fs.due)], ['Đã đóng', Core.money(fs.paid)], ['Còn nợ', Core.money(fs.remaining), true], ['Số khoản quá hạn', String(fs.late)]])
    ].concat(debtColumns(td)), columnGap: 14 },
    { text: 'Sổ thu tiền thuê — ' + Core.periodLabel(m), style: 'h2' },
    rs.count ? rentTable(sortByContract(data.rent), td, false) : { text: 'Tháng này chưa có kỳ thu nào.', color: PDF_COLORS.soft },
    { text: 'Phí quản lý — ' + Core.periodLabel(m), style: 'h2' },
    fs.count ? feeTable(sortByContract(data.fees), td, false) : { text: 'Tháng này không có phí quản lý.', color: PDF_COLORS.soft },
    { text: 'Các khoản quá hạn (mọi kỳ, tính đến ' + Core.fmtDate(td) + ')', style: 'h2' },
    lateTable(td)
  ], td);
}
function docAll(td) {
  const order = (a, b) => a.period.localeCompare(b.period) || a.contract.localeCompare(b.contract);
  return pdfBase('Sổ thu tiền thuê & phí quản lý — toàn bộ', 'Số liệu tính đến ngày ' + Core.fmtDate(td) + ' · Sổ Thuê Nhà', [
    { columns: debtColumns(td).concat([{ width: '*', text: '' }, { width: '*', text: '' }]), columnGap: 14 },
    { text: 'Sổ thu tiền thuê (' + data.rent.length + ' kỳ)', style: 'h2' },
    rentTable(data.rent.slice().sort(order), td, true),
    { text: 'Sổ phí quản lý (' + data.fees.length + ' kỳ)', style: 'h2', pageBreak: 'before' },
    feeTable(data.fees.slice().sort(order), td, true)
  ], td);
}
function docContracts(td) {
  const opt = v => v == null ? '' : Core.formatVND(v);
  const table = pdfTable([34, 84, 50, 60, 60, 56, 48, 54, 60, 56, 42, '*'],
    ['Mã HĐ', 'Khách thuê', 'Điện thoại', 'Nhà / Phòng', 'Thời hạn', 'Tiền thuê / tháng', 'Thu tiền', 'Tiền cọc', 'Phí QL / tháng', 'Còn nợ', 'Trạng thái', 'Ghi chú'],
    data.contracts.map(c => {
      const p = Core.contractProgress(data.rent, c.id, td);
      return [c.id, c.tenant, c.phone || '', c.property, Core.fmtDate(c.start) + ' –\n' + Core.fmtDate(c.end), M(c.rent), cycleLabel(c), R(opt(c.deposit)),
        { text: opt(c.fee) + (Core.amt(c.fee) > 0 ? '\nngày ' + (c.feeDay || 1) : ''), alignment: 'right' },
        p.debt ? { text: Core.formatVND(p.debt) + '\n(' + p.lateCount + ' kỳ)', alignment: 'right', bold: true, color: PDF_COLORS.lateInk, fillColor: PDF_COLORS.late } : { text: 'Không nợ', color: PDF_COLORS.doneInk },
        c.status || '', { text: c.note || '', fontSize: 8 }];
    }));
  return pdfBase('Danh sách hợp đồng cho thuê', data.contracts.length + ' hợp đồng · tính đến ngày ' + Core.fmtDate(td) + ' · Sổ Thuê Nhà', [
    table,
    { text: 'Tổng nợ đọng', style: 'h2' },
    { columns: debtColumns(td).concat([{ width: '*', text: '' }, { width: '*', text: '' }]), columnGap: 14 }
  ], td);
}
