/* ===================== SỔ THUÊ NHÀ — APP =====================
   Mục lục: ICONS · STORAGE · STATE · LƯU · NAV · TỔNG QUAN · SỔ THU (thuê/phí)
            · HỢP ĐỒNG · SHEET GHI NHẬN · SHEET HỢP ĐỒNG · CÀI ĐẶT · TIỆN ÍCH · INIT */

/* ===================== ICONS ===================== */
const ICONS = {
  home: `<path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9"/><path d="M10 20v-5h4v5"/>`,
  wallet: `<rect x="3" y="6" width="18" height="14" rx="3"/><path d="M3 10h18"/><circle cx="16.5" cy="14.5" r="1.3" fill="currentColor" stroke="none"/>`,
  receipt: `<path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2z"/><path d="M9 8h6M9 12h6"/>`,
  file: `<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>`,
  settings: `<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.55 1.55M6.85 17.15 5.3 18.7M18.7 18.7l-1.55-1.55M6.85 6.85 5.3 5.3"/>`,
  chevronLeft: `<path d="m15 18-6-6 6-6"/>`,
  chevronRight: `<path d="m9 18 6-6-6-6"/>`,
  check: `<path d="M20 6 9 17l-5-5"/>`,
  edit: `<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>`,
  plus: `<path d="M12 5v14M5 12h14"/>`,
  trash: `<path d="M4 7h16"/><path d="M10 7V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2"/><path d="M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"/><path d="M10 11v6M14 11v6"/>`,
  refresh: `<path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/>`,
  download: `<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>`,
  upload: `<path d="M12 21V9"/><path d="m7 14 5-5 5 5"/><path d="M5 3h14"/>`,
  phone: `<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>`,
  save: `<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><path d="M17 21v-8H7v8"/><path d="M7 3v5h8"/>`,
  printer: `<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="9" rx="2"/><path d="M6 14h12v7H6z"/>`,
  alert: `<circle cx="12" cy="12" r="9"/><path d="M12 7v6"/><circle cx="12" cy="16.5" r="1.1" fill="currentColor" stroke="none"/>`,
  clock: `<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/>`,
  calendar: `<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>`,
  help: `<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 4.9.8c0 1.7-2.4 2.2-2.4 3.7"/><circle cx="12" cy="17" r="1.1" fill="currentColor" stroke="none"/>`,
  text: `<path d="M4 7V5h11v2M9.5 5v14M7 19h5"/><path d="M14 13v-1h7v1M17.5 12v7M16 19h3"/>`,
  smile: `<circle cx="12" cy="12" r="9"/><path d="M8.5 14a4 4 0 0 0 7 0"/><circle cx="9" cy="9.5" r="1.1" fill="currentColor" stroke="none"/><circle cx="15" cy="9.5" r="1.1" fill="currentColor" stroke="none"/>`
};
function icon(name, size = 20, sw = 2) {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block;flex:none;pointer-events:none">${ICONS[name] || ''}</svg>`;
}

/* ===================== STORAGE ===================== */
const Store = {
  get(k) { try { const v = localStorage.getItem(k); return v == null ? null : JSON.parse(v); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
const K_DATA = 'thuenha:data', K_PREFS = 'thuenha:prefs';
const AUTOSAVE_MS = 60 * 1000; // tự động lưu sau 1 phút kể từ thay đổi đầu tiên chưa lưu

/* ===================== STATE ===================== */
let data = null;              // dữ liệu đang làm việc (có thể chưa lưu)
let prefs = { fontSize: 'l' };
const ui = { screen: 'home', back: 'contracts', month: Core.periodOf(Core.todayISO()), contractId: null,
  rent: { mode: 'month', filter: 'all' }, fee: { mode: 'month', filter: 'all' } };
let dirty = 0, autoTimer = null, tickTimer = null, autoAt = 0, undoSnap = null;

const KIND = {
  rent: { list: () => data.rent, prefix: 'R', title: 'Tiền thuê', verb: 'thu', paidLabel: 'Đã thu', payBtn: 'Thu đủ', doneWord: 'Đã thu đủ',
    dueLabel: 'Phải thu', remLabel: 'Còn thiếu', dateLabel: 'Ngày thực thu', amtLabel: 'Số tiền đã thu', dueDateLabel: 'Hạn thu' },
  fee: { list: () => data.fees, prefix: 'F', title: 'Phí quản lý', verb: 'đóng', paidLabel: 'Đã đóng', payBtn: 'Đã đóng đủ', doneWord: 'Đã đóng',
    dueLabel: 'Phải đóng', remLabel: 'Còn nợ', dateLabel: 'Ngày đã đóng', amtLabel: 'Số tiền đã đóng', dueDateLabel: 'Hạn đóng' }
};
const today = () => Core.todayISO();
const contractById = id => data.contracts.find(c => c.id === id);
const findRow = (kind, id) => KIND[kind].list().find(r => r.id === id);

/* ===================== LƯU =====================
   Thay đổi → đánh dấu "chưa lưu" + hiện thanh lưu. Bấm "Lưu lại" để ghi ngay;
   nếu không, app tự lưu sau 1 phút. Khi đóng/ẩn trang cũng lưu luôn để không mất dữ liệu. */
function markDirty() {
  dirty++;
  if (!autoTimer) {
    autoAt = Date.now() + AUTOSAVE_MS;
    autoTimer = setTimeout(() => saveNow(true), AUTOSAVE_MS);
    tickTimer = setInterval(renderSaveState, 1000);
  }
  renderSaveState();
}
/* auto: true = tự động, false = người dùng bấm, null = lưu thầm (khi đóng trang) */
function saveNow(auto) {
  clearTimeout(autoTimer); clearInterval(tickTimer); autoTimer = null; tickTimer = null;
  data.updatedAt = new Date().toISOString();
  if (!Store.set(K_DATA, data)) {
    if (auto !== null) toast('Chưa lưu được — bộ nhớ trình duyệt đầy hoặc bị chặn. Hãy bấm “Tải file sao lưu” trong Cài đặt.');
    if (dirty) { autoAt = Date.now() + AUTOSAVE_MS; autoTimer = setTimeout(() => saveNow(true), AUTOSAVE_MS); tickTimer = setInterval(renderSaveState, 1000); }
    renderSaveState();
    return false;
  }
  dirty = 0;
  renderSaveState();
  if (auto === true) toast('Đã tự động lưu ✓');
  else if (auto === false) toast('Đã lưu ✓');
  if (ui.screen === 'settings') renderSettings();
  return true;
}
function renderSaveState() {
  const bar = document.getElementById('savebar'), line = document.getElementById('save-line');
  document.body.classList.toggle('unsaved', dirty > 0);
  bar.classList.toggle('hidden', dirty === 0);
  if (dirty > 0) {
    const secs = Math.max(0, Math.ceil((autoAt - Date.now()) / 1000));
    document.getElementById('savebar-title').textContent = `Có ${dirty} thay đổi chưa lưu`;
    document.getElementById('savebar-sub').textContent = `Tự động lưu sau ${secs} giây`;
    line.className = 'save-line dirty';
    line.innerHTML = icon('alert', 16, 2.2) + 'Chưa lưu';
  } else {
    line.className = 'save-line';
    line.innerHTML = data && data.updatedAt ? icon('check', 16, 2.4) + 'Đã lưu lúc ' + savedLabel(data.updatedAt) : '';
  }
}
/* Mọi chỉnh sửa đi qua đây: giữ bản cũ để "Hoàn tác", đánh dấu chưa lưu, vẽ lại màn hình. */
function change(fn, msg, canUndo) {
  const snap = JSON.stringify(data);
  fn();
  undoSnap = canUndo ? snap : null;
  markDirty();
  render();
  if (msg) toast(msg, canUndo ? { label: 'Hoàn tác', fn: undo } : null);
}
function undo() {
  if (!undoSnap) return;
  data = JSON.parse(undoSnap); undoSnap = null;
  markDirty(); render(); toast('Đã hoàn tác');
}

/* ===================== NAV ===================== */
const SCREENS = ['home', 'rent', 'fee', 'contracts', 'contract', 'settings'];
function go(name, opts) {
  if (name === 'contract') { ui.back = ui.screen === 'contract' ? ui.back : ui.screen; ui.contractId = opts; }
  ui.screen = name;
  SCREENS.forEach(s => document.getElementById('screen-' + s).classList.toggle('hidden', s !== name));
  const tab = name === 'contract' ? 'contracts' : name;
  document.querySelectorAll('.tab').forEach(t => {
    const on = t.dataset.tab === tab;
    t.classList.toggle('active', on);
    if (on) t.setAttribute('aria-current', 'page'); else t.removeAttribute('aria-current');
  });
  document.getElementById('btn-settings').classList.toggle('on', name === 'settings');
  render();
  window.scrollTo({ top: 0 });
}
function render() {
  ({ home: renderHome, rent: () => renderLedger('rent'), fee: () => renderLedger('fee'), contracts: renderContracts,
    contract: renderContract, settings: renderSettings })[ui.screen]();
}
function setMonth(period) { ui.month = period; render(); }
function monthNav() {
  const cur = Core.periodOf(today());
  return `<div class="card month-nav">
    <button class="arrow" onclick="setMonth('${Core.addMonths(ui.month, -1)}')" aria-label="Tháng trước">${icon('chevronLeft', 28, 2.6)}</button>
    <div class="mid"><div class="lbl">Tháng đang xem</div><div class="val">${Core.periodLabel(ui.month)}</div>
      ${ui.month !== cur ? `<button class="today-link" onclick="setMonth('${cur}')">Về tháng này</button>` : ''}</div>
    <button class="arrow" onclick="setMonth('${Core.addMonths(ui.month, 1)}')" aria-label="Tháng sau">${icon('chevronRight', 28, 2.6)}</button>
  </div>`;
}
let toastTimer = null;
/* Báo lỗi nhập liệu: khi đang mở sheet thì dùng hộp thoại (toast bị lớp phủ che). */
function warn(msg) { if (sheet().open) alert(msg); else toast(msg); }
function toast(msg, action) {
  const t = document.getElementById('toast'), b = document.getElementById('toast-act');
  document.getElementById('toast-msg').textContent = msg;
  b.classList.toggle('hidden', !action);
  b.onclick = action ? () => { t.classList.remove('show'); action.fn(); } : null;
  if (action) b.textContent = action.label;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), action ? 6000 : 2600);
}

/* ===================== TỔNG QUAN ===================== */
function renderHome() {
  const td = today(), m = ui.month;
  const rs = Core.monthSummary(data.rent, m, td), fs = Core.monthSummary(data.fees, m, td);
  const rd = Core.totalDebt(data.rent, td), fd = Core.totalDebt(data.fees, td);
  const owe = Core.debtByContract(data.rent, td), feeOwe = Core.debtByContract(data.fees, td);
  const soon = [];
  ['rent', 'fee'].forEach(k => KIND[k].list().forEach(r => { if (Core.rowCalc(r, td).status === 'soon') soon.push([k, r]); }));
  soon.sort((a, b) => a[1].dueDate.localeCompare(b[1].dueDate));

  document.getElementById('screen-home').innerHTML = `
    <div class="greet"><div class="eyebrow">${Core.weekdayLabel(td)}</div>
      <h2 id="h-home">Tổng quan</h2>
      <div class="sub">Tiền thuê nhà mình thu vào và phí quản lý mình phải đóng.</div></div>
    ${monthNav()}
    <div class="card card-dark block">
      <div class="eyebrow">Tiền thuê thu vào</div>
      <div class="big-cap" style="margin-top:8px">Còn phải thu</div>
      <div class="big-num">${Core.money(rs.remaining)}</div>
      ${progressBar(rs.paid, rs.due)}
      <div class="kvs">
        ${kv('Phải thu trong tháng', Core.money(rs.due))}
        ${kv('Đã thu', Core.money(rs.paid), 'green')}
        ${kv('Quá hạn chưa thu', rs.late ? '🔴 ' + rs.late + ' khoản' : 'Không có', rs.late ? 'red' : 'green')}
      </div>
      ${rs.count ? '' : `<p class="big-cap" style="margin:10px 0 0">Tháng này chưa có kỳ thu nào.</p>`}
      <button class="btn btn-primary btn-block" style="margin-top:14px" onclick="openLedgerMonth('rent')">${icon('wallet', 20)} Mở sổ tiền thuê tháng này</button>
    </div>
    <div class="card block">
      <div class="eyebrow">Phí quản lý phải đóng</div>
      <div class="big-cap" style="margin-top:8px">Mình còn phải đóng</div>
      <div class="big-num">${Core.money(fs.remaining)}</div>
      ${progressBar(fs.paid, fs.due)}
      <div class="kvs">
        ${kv('Phải đóng trong tháng', Core.money(fs.due))}
        ${kv('Đã đóng', Core.money(fs.paid), 'green')}
        ${kv('Quá hạn chưa đóng', fs.late ? '🔴 ' + fs.late + ' khoản' : 'Không có', fs.late ? 'red' : 'green')}
      </div>
      <button class="btn btn-line btn-block" style="margin-top:14px" onclick="openLedgerMonth('fee')">${icon('receipt', 20)} Mở sổ phí quản lý tháng này</button>
    </div>
    <div class="card block">
      <div class="eyebrow">Tổng nợ đọng — mọi kỳ</div>
      <div class="big-cap" style="margin-top:2px">Tính đến hôm nay ${Core.fmtDate(td)}</div>
      <div class="debt-grid">
        <div class="debt-box"><div class="t">Khách còn nợ mình</div><div class="n">${Core.money(rd.amount)}</div><div class="c">${rd.count} khoản quá hạn</div></div>
        <div class="debt-box fee"><div class="t">Mình còn nợ phí quản lý</div><div class="n">${Core.money(fd.amount)}</div><div class="c">${fd.count} khoản quá hạn</div></div>
      </div>
    </div>

    ${secTitle('Khách đang nợ tiền thuê')}
    ${owe.length ? owe.map(g => oweItem(g, 'rent')).join('') : emptyGood('Không có khách nào nợ quá hạn.')}
    ${feeOwe.length ? secTitle('Phí quản lý mình chưa đóng') + feeOwe.map(g => oweItem(g, 'fee')).join('') : ''}
    ${secTitle('Sắp đến hạn (trong 3 ngày)')}
    ${soon.length ? soon.map(([k, r]) => rowCard(k, r, td)).join('') : `<div class="card card-soft muted" style="text-align:center">Chưa có khoản nào sắp đến hạn.</div>`}

    <div class="card block">
      <div class="eyebrow">Quy tắc màu</div>
      <div class="legend">
        <div><span class="badge b-late">🔴 Đỏ</span> Quá hạn</div>
        <div><span class="badge b-soon">🟡 Vàng</span> Còn ≤ 3 ngày</div>
        <div><span class="badge b-done">✅ Xanh</span> Đã thu / đóng đủ</div>
        <div><span class="badge b-wait">⚪ Trắng</span> Chưa tới hạn</div>
      </div>
    </div>
    <button class="btn btn-dark btn-lg btn-block block" onclick="exportPdf()">${icon('printer', 22)} Xuất báo cáo PDF</button>`;
}
function openLedgerMonth(kind) { ui[kind].mode = 'month'; ui[kind].filter = 'all'; go(kind); }
function progressBar(paid, due) {
  const pct = due > 0 ? Math.max(0, Math.min(100, Math.round(paid / due * 100))) : 0;
  return `<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="Đã trả ${pct}%"><i style="width:${pct}%"></i></div>
    <div class="bar-cap"><span>Đã trả ${pct}%</span><span>${Core.money(paid)} / ${Core.money(due)}</span></div>`;
}
function kv(k, v, cls) { return `<div class="kv"><span class="k">${k}</span><span class="v ${cls || ''}">${v}</span></div>`; }
function secTitle(t) { return `<div class="sec-title"><h3>${t}</h3><span class="m-line"></span></div>`; }
function emptyGood(t) { return `<div class="card card-soft empty"><div class="ic">${icon('smile', 32)}</div>${t}</div>`; }
function oweItem(g, kind) {
  const c = contractById(g.contract) || { tenant: g.contract, property: '' };
  const who = kind === 'fee' ? c.property : c.tenant;
  return `<button class="owe" onclick="go('contract','${g.contract}')">
    <div class="info"><div class="nm">${esc(who)}</div>
      <div class="meta">${esc(g.contract)} · ${esc(kind === 'fee' ? 'Phí quản lý' : c.property)} · ${g.count} kỳ (${g.periods.map(Core.periodShort).join(', ')})</div>
      <div class="amt">${kind === 'fee' ? 'Mình còn nợ' : 'Còn nợ'} ${Core.money(g.amount)} · trễ nhất ${g.maxLate} ngày</div></div>
    <span class="go">Xem ${icon('chevronRight', 18, 2.4)}</span></button>`;
}

/* ===================== SỔ THU (tiền thuê / phí quản lý) ===================== */
function renderLedger(kind) {
  const K = KIND[kind], st = ui[kind], td = today(), list = K.list();
  const lateAll = list.filter(r => Core.rowCalc(r, td).status === 'late');
  let body = '';
  if (st.mode === 'month') {
    const rows = list.filter(r => r.period === ui.month);
    const s = Core.monthSummary(list, ui.month, td);
    const miss = Core.missingFor(data, ui.month)[kind === 'rent' ? 'rent' : 'fees'];
    const counts = { all: rows.length, late: s.late, soon: s.soon, wait: s.wait, done: s.done };
    if (st.filter !== 'all' && !counts[st.filter]) st.filter = 'all';
    const shown = Core.sortRows(rows.filter(r => st.filter === 'all' || Core.rowCalc(r, td).status === st.filter), td);
    const chip = (f, label) => counts[f] || f === 'all' ? `<button class="chip ${st.filter === f ? 'sel' : ''}" aria-pressed="${st.filter === f}" onclick="setFilter('${kind}','${f}')">${label} <span class="n">${counts[f]}</span></button>` : '';
    body = `${monthNav()}
      <div class="card block">
        ${kv(K.dueLabel + ' trong tháng', Core.money(s.due))}
        ${kv(K.paidLabel, Core.money(s.paid), 'green')}
        ${kv(kind === 'rent' ? 'Còn phải thu' : 'Còn nợ', Core.money(s.remaining), s.remaining > 0 ? 'red' : 'green')}
        ${progressBar(s.paid, s.due)}
      </div>
      ${miss.length ? `<div class="banner">${icon('calendar', 26)}<div><b>${Core.periodLabel(ui.month)} còn ${miss.length} kỳ chưa tạo</b>
        <div>${miss.map(r => esc(r.contract) + ' · ' + esc(nameOf(r.contract, kind))).join('<br>')}</div>
        <button class="btn btn-dark btn-sm" onclick="genMissing('${kind}')">${icon('plus', 18)} Tạo ${miss.length} kỳ cho tháng này</button></div></div>` : ''}
      <div class="chips" role="group" aria-label="Lọc theo trạng thái">
        ${chip('all', 'Tất cả')}${chip('late', '🔴 Quá hạn')}${chip('soon', '🟡 Sắp đến hạn')}${chip('wait', '⚪ Chưa đến hạn')}${chip('done', '✅ ' + K.doneWord)}
      </div>
      ${shown.length ? shown.map(r => rowCard(kind, r, td)).join('') : `<div class="card card-soft empty">${rows.length ? 'Không có kỳ nào ở mục này.' : 'Tháng này chưa có kỳ ' + K.verb + ' nào.'}</div>`}`;
  } else {
    const total = lateAll.reduce((s, r) => s + Core.rowCalc(r, td).remaining, 0);
    const shown = lateAll.slice().sort((a, b) => a.dueDate.localeCompare(b.dueDate) || a.contract.localeCompare(b.contract));
    body = `<div class="card card-dark block">
        <div class="eyebrow">${kind === 'rent' ? 'Khách còn nợ mình' : 'Mình còn nợ phí quản lý'} · mọi kỳ</div>
        <div class="big-num">${Core.money(total)}</div>
        <div class="big-cap">${shown.length} khoản quá hạn, tính đến ${Core.fmtDate(td)}</div>
      </div>
      ${shown.length ? shown.map(r => rowCard(kind, r, td)).join('') : emptyGood('Không có khoản nào quá hạn.')}`;
  }
  document.getElementById('screen-' + kind).innerHTML = `
    <div class="greet"><div class="eyebrow">${kind === 'rent' ? 'Sổ thu tiền thuê' : 'Sổ phí quản lý mình đóng ra'}</div>
      <h2>${K.title}</h2>
      <div class="sub">${kind === 'rent' ? 'Mỗi thẻ là 1 kỳ thu của 1 hợp đồng. Khách trả rồi thì bấm “Thu đủ”.' : 'Phí quản lý mình phải đóng cho từng căn. Đóng rồi thì bấm “Đã đóng đủ”.'}</div></div>
    <div class="seg" role="tablist">
      <button role="tab" aria-selected="${st.mode === 'month'}" class="${st.mode === 'month' ? 'on' : ''}" onclick="setMode('${kind}','month')">Theo tháng</button>
      <button role="tab" aria-selected="${st.mode === 'debt'}" class="${st.mode === 'debt' ? 'on' : ''}" onclick="setMode('${kind}','debt')">Còn nợ (${lateAll.length})</button>
    </div>
    ${body}
    <div class="btn-row" style="margin-top:20px">
      <button class="btn btn-line" onclick="openAddRow('${kind}')">${icon('plus', 20)} Thêm kỳ ${K.verb}</button>
      <button class="btn btn-dark" onclick="exportPdf()">${icon('printer', 20)} Xuất PDF</button>
    </div>`;
}
function setFilter(kind, f) { ui[kind].filter = f; render(); }
function setMode(kind, mode) { ui[kind].mode = mode; render(); }
function nameOf(contractId, kind) { const c = contractById(contractId); return c ? (kind === 'fee' ? c.property : c.tenant) : 'Không rõ hợp đồng'; }

function rowCard(kind, r, td) {
  const K = KIND[kind], c = Core.rowCalc(r, td), ct = contractById(r.contract) || {};
  const badge = `<span class="badge b-${c.status}">${Core.statusText(c, kind)}</span>`;
  const title = kind === 'fee' ? (ct.property || r.contract) : (ct.tenant || r.contract);
  const meta = kind === 'fee' ? `${esc(r.contract)} · ${esc(ct.tenant || '')}${ct.feeTo ? ' · Đóng cho ' + esc(ct.feeTo) : ''}` : `${esc(r.contract)} · ${esc(ct.property || '')}`;
  const months = r.months > 1 ? ` · ${r.months} tháng` : '';
  return `<article class="row s-${c.status}">
    <div class="top"><span class="per">${kind === 'fee' ? 'Phí' : 'Tiền thuê'} kỳ ${Core.periodShort(r.period)}${months}</span>${badge}</div>
    <div class="nm">${esc(title)}</div>
    <div class="meta">${meta}</div>
    <div class="kvs">
      ${kv(K.dueLabel, Core.money(c.due))}
      ${kv(K.dueDateLabel, Core.fmtDate(r.dueDate))}
      ${kv(K.paidLabel, Core.money(c.paid) + (r.paidDate ? ' · ' + Core.fmtDate(r.paidDate) : ''), c.paid ? 'green' : '')}
      ${c.overpaid ? kv('Trả dư', Core.money(c.overpaid), 'green') : kv(K.remLabel, Core.money(Math.max(0, c.remaining)), c.remaining > 0 ? 'red' : 'green')}
    </div>
    ${r.note ? `<div class="note">${esc(r.note)}</div>` : ''}
    <div class="btn-row">
      ${c.status !== 'done' ? `<button class="btn btn-primary" onclick="quickPay('${kind}','${r.id}')">${icon('check', 20, 2.6)} ${K.payBtn}</button>` : ''}
      <button class="btn btn-line" onclick="openPay('${kind}','${r.id}')">${icon('edit', 19)} ${c.status === 'done' ? 'Xem / sửa' : 'Sửa'}</button>
    </div>
  </article>`;
}
function quickPay(kind, id) {
  const r = findRow(kind, id); if (!r) return;
  const K = KIND[kind];
  change(() => { r.paid = Core.amt(r.due); r.paidDate = r.paidDate || today(); },
    `${K.doneWord} ${Core.money(r.due)} · ${nameOf(r.contract, kind)}`, true);
}
function genMissing(kind) {
  const key = kind === 'rent' ? 'rent' : 'fees';
  const miss = Core.missingFor(data, ui.month)[key];
  if (!miss.length) return;
  change(() => {
    const list = KIND[kind].list();
    miss.forEach(r => list.push(Object.assign({ id: Core.nextId(list, KIND[kind].prefix) }, r)));
  }, `Đã tạo ${miss.length} kỳ cho ${Core.periodLabel(ui.month).toLowerCase()}`, true);
}

/* ===================== HỢP ĐỒNG ===================== */
function renderContracts() {
  const td = today();
  const active = data.contracts.filter(c => c.status === Core.ACTIVE).length;
  document.getElementById('screen-contracts').innerHTML = `
    <div class="greet"><div class="eyebrow">Danh sách</div><h2>Hợp đồng</h2>
      <div class="sub">${data.contracts.length} hợp đồng · ${active} đang thuê. Bấm vào một hợp đồng để xem và cập nhật tiến độ thanh toán.</div></div>
    ${data.contracts.map(c => contractCard(c, td)).join('')}
    <button class="btn btn-line btn-block block" onclick="openContract()">${icon('plus', 20)} Thêm hợp đồng mới</button>
    <button class="btn btn-dark btn-block block" onclick="exportPdf()">${icon('printer', 20)} Xuất PDF</button>`;
}
function contractCard(c, td) {
  const p = Core.contractProgress(data.rent, c.id, td);
  return `<div class="card contract block" role="button" tabindex="0" onclick="go('contract','${c.id}')" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();go('contract','${c.id}')}">
    <div class="head"><div><div class="code">${esc(c.id)}</div><div class="nm">${esc(c.tenant || '(chưa có tên)')}</div>
      <div class="addr">${esc(c.property)}</div></div>
      <span class="badge ${c.status === Core.ACTIVE ? 'b-done' : 'b-wait'}">${esc(c.status || '—')}</span></div>
    <div class="kvs">
      ${kv('Tiền thuê', Core.money(c.rent) + ' / tháng')}
      ${kv('Thu', cycleLabel(c))}
      ${kv('Thời hạn', termRange(c) + (c.end ? '<br><span class="muted" style="font-weight:600">' + Core.remainingTerm(c, td) + '</span>' : ''))}
      ${kv('Còn nợ', p.debt ? '🔴 ' + Core.money(p.debt) + ' (' + p.lateCount + ' kỳ)' : '✅ Không nợ', p.debt ? 'red' : 'green')}
    </div>
    ${progressBar(p.paidSoFar, p.dueSoFar)}
    <div class="btn-row"><span class="btn btn-ghost" style="flex:1">${icon('wallet', 20)} Xem tiến độ & cập nhật</span></div>
  </div>`;
}
function termRange(c) { return (Core.fmtDate(c.start) || '?') + ' –<br>' + (Core.fmtDate(c.end) || '?'); }
function cycleLabel(c) {
  const cyc = Number(c.cycle) || 1;
  return (cyc === 1 ? 'Hàng tháng' : cyc + ' tháng/lần') + (c.dueDay ? ', ngày ' + c.dueDay : '');
}
function renderContract() {
  const c = contractById(ui.contractId);
  const el = document.getElementById('screen-contract');
  if (!c) { el.innerHTML = `<button class="back" onclick="go('contracts')">${icon('chevronLeft', 22, 2.4)} Hợp đồng</button><div class="card empty">Không tìm thấy hợp đồng.</div>`; return; }
  const td = today(), p = Core.contractProgress(data.rent, c.id, td), pf = Core.contractProgress(data.fees, c.id, td);
  const rentRows = data.rent.filter(r => r.contract === c.id).sort((a, b) => b.period.localeCompare(a.period));
  const feeRows = data.fees.filter(r => r.contract === c.id).sort((a, b) => b.period.localeCompare(a.period));
  const BACK = { home: 'Tổng quan', rent: 'Tiền thuê', fee: 'Phí quản lý', contracts: 'Hợp đồng' };
  const backTo = BACK[ui.back] ? ui.back : 'contracts';
  el.innerHTML = `
    <button class="back" onclick="go('${backTo}')">${icon('chevronLeft', 22, 2.4)} ${BACK[backTo]}</button>
    <div class="greet"><div class="eyebrow">${esc(c.id)} · ${esc(c.status || '')}</div><h2>${esc(c.tenant || '(chưa có tên)')}</h2>
      <div class="sub">${esc(c.property)}</div></div>
    <div class="card card-dark">
      <div class="eyebrow">Tiến độ thanh toán tiền thuê</div>
      <div class="big-cap" style="margin-top:8px">${p.debt ? 'Khách còn nợ' : 'Tình trạng'}</div>
      <div class="big-num">${p.debt ? Core.money(p.debt) : 'Không nợ ✓'}</div>
      ${progressBar(p.paidSoFar, p.dueSoFar)}
      <div class="kvs">
        ${kv('Phải thu tới hôm nay', Core.money(p.dueSoFar))}
        ${kv('Đã thu', Core.money(p.paidSoFar), 'green')}
        ${kv('Số kỳ quá hạn', p.lateCount ? '🔴 ' + p.lateCount + ' kỳ' : 'Không có', p.lateCount ? 'red' : 'green')}
        ${p.prepaid ? kv('Đã trả trước (kỳ chưa tới)', Core.money(p.prepaid), 'green') : ''}
      </div>
    </div>
    <div class="card block">
      <div class="eyebrow">Thông tin hợp đồng</div>
      <div class="kvs">
        ${kv('Thời hạn', termRange(c))}
        ${c.end ? kv('Còn lại', Core.remainingTerm(c, td)) : ''}
        ${kv('Tiền thuê / tháng', Core.money(c.rent))}
        ${kv('Thu tiền', cycleLabel(c))}
        ${kv('Tiền cọc', c.deposit == null ? '—' : Core.money(c.deposit))}
        ${kv('Phí quản lý / tháng', c.fee == null ? '—' : Core.money(c.fee))}
        ${Core.amt(c.fee) > 0 ? kv('Ngày đóng phí', 'Ngày ' + (c.feeDay || 1) + ' hàng tháng') : ''}
        ${c.feeTo ? kv('Đóng phí cho', esc(c.feeTo)) : ''}
        ${kv('Điện thoại', c.phone ? `<a href="tel:${esc(c.phone.replace(/[^\d+]/g, ''))}">${esc(c.phone)}</a>` : '—')}
      </div>
      ${c.note ? `<div class="banner" style="margin-top:10px">${icon('alert', 22)}<div>${esc(c.note)}</div></div>` : ''}
      <div class="btn-row">
        ${c.phone ? `<a class="btn btn-soft" href="tel:${esc(c.phone.replace(/[^\d+]/g, ''))}">${icon('phone', 19)} Gọi</a>` : ''}
        <button class="btn btn-line" onclick="openContract('${c.id}')">${icon('edit', 19)} Sửa hợp đồng</button>
      </div>
    </div>
    ${secTitle('Các kỳ tiền thuê')}
    <div class="card">${rentRows.length ? rentRows.map(r => miniRow('rent', r, td)).join('') : '<div class="muted">Chưa có kỳ thu nào.</div>'}
      <button class="btn btn-ghost btn-block" style="margin-top:12px" onclick="openAddRow('rent','${c.id}')">${icon('plus', 20)} Thêm kỳ thu</button></div>
    ${feeRows.length || Core.amt(c.fee) > 0 ? secTitle('Phí quản lý mình đóng') + `<div class="card">
      ${pf.debt ? `<div class="banner" style="margin:0 0 8px">${icon('alert', 22)}<div>Mình còn nợ phí <b>${Core.money(pf.debt)}</b> (${pf.lateCount} kỳ)</div></div>` : ''}
      ${feeRows.length ? feeRows.map(r => miniRow('fee', r, td)).join('') : '<div class="muted">Chưa có kỳ phí nào.</div>'}
      <button class="btn btn-ghost btn-block" style="margin-top:12px" onclick="openAddRow('fee','${c.id}')">${icon('plus', 20)} Thêm kỳ phí</button></div>` : ''}`;
}
function miniRow(kind, r, td) {
  const K = KIND[kind], c = Core.rowCalc(r, td);
  return `<div class="mini-row">
    <div class="l"><div class="p">Kỳ ${Core.periodShort(r.period)}${r.months > 1 ? ' · ' + r.months + ' tháng' : ''} · ${Core.money(c.due)}</div>
      <div class="s"><span class="badge b-${c.status}" style="margin:4px 0">${Core.statusText(c, kind)}</span></div>
      <div class="s">${K.paidLabel}: ${Core.money(c.paid)}${r.paidDate ? ' · ' + Core.fmtDate(r.paidDate) : ''}${c.remaining > 0 ? ' · ' + K.remLabel.toLowerCase() + ' ' + Core.money(c.remaining) : ''}</div>
      ${r.note ? `<div class="s">📝 ${esc(r.note)}</div>` : ''}</div>
    <div class="acts">
      ${c.status !== 'done' ? `<button class="btn btn-primary" onclick="quickPay('${kind}','${r.id}')" aria-label="${K.payBtn} kỳ ${Core.periodShort(r.period)}">${icon('check', 18, 2.6)} Đủ</button>` : ''}
      <button class="btn btn-line" onclick="openPay('${kind}','${r.id}')" aria-label="Sửa kỳ ${Core.periodShort(r.period)}">${icon('edit', 18)}</button>
    </div></div>`;
}

/* ===================== SHEET (bottom sheet) ===================== */
const sheet = () => document.getElementById('sheet');
function openSheet(html) {
  document.getElementById('sheet-body').innerHTML = html;
  const s = sheet();
  if (!s.open) s.showModal();
  s.querySelector('.sheet-in').scrollTop = 0;
}
function closeSheet() { if (sheet().open) sheet().close(); }
function sheetHead(title, sub) {
  return `<div class="sheet-head"><div><h3 id="sheet-title">${title}</h3>${sub ? `<div class="sub">${sub}</div>` : ''}</div>
    <button class="x-btn" onclick="closeSheet()">Đóng</button></div>`;
}

/* ---------- Ghi nhận thanh toán ---------- */
function openPay(kind, id) {
  const r = findRow(kind, id); if (!r) return;
  const K = KIND[kind], c = Core.rowCalc(r, today());
  const nothingYet = r.paid == null && !r.paidDate;
  openSheet(`${sheetHead(kind === 'rent' ? 'Ghi nhận tiền thuê' : 'Ghi nhận phí quản lý',
      `${esc(nameOf(r.contract, kind))} · ${esc(r.contract)}<br>Kỳ ${Core.periodShort(r.period)}${r.months > 1 ? ' (' + r.months + ' tháng)' : ''} · ${K.dueDateLabel} ${Core.fmtDate(r.dueDate)}`)}
    <div class="card card-soft" style="margin-top:14px; padding:14px 16px">
      ${kv(K.dueLabel, Core.money(c.due))}${kv('Trạng thái', `<span class="badge b-${c.status}">${Core.statusText(c, kind)}</span>`)}
    </div>
    <form onsubmit="event.preventDefault(); submitPay('${kind}','${r.id}')">
      <div class="field"><label for="f-paid">${K.amtLabel}</label>
        <input class="input money" id="f-paid" inputmode="numeric" autocomplete="off" placeholder="0" value="${r.paid != null ? Core.formatVND(r.paid) : ''}" oninput="fmtMoneyInput(this)" />
        <div class="quick">
          <button type="button" class="chip" onclick="setMoney('f-paid', ${Core.amt(r.due)})">${icon('check', 16, 2.6)} Đủ ${Core.money(r.due)}</button>
          <button type="button" class="chip" onclick="setMoney('f-paid', null)">Chưa ${K.verb}</button>
        </div></div>
      <div class="field"><label for="f-date">${K.dateLabel}</label>
        <input class="input" type="date" id="f-date" value="${r.paidDate || (nothingYet ? today() : '')}" /></div>
      <div class="field"><label for="f-note">Ghi chú</label>
        <textarea class="input" id="f-note" placeholder="Vd: chuyển khoản, khách hẹn trả sau…">${esc(r.note || '')}</textarea></div>
      <details class="more"><summary>Sửa ${K.dueLabel.toLowerCase()} / hạn ${K.verb}</summary>
        <div class="grid2">
          <div class="field"><label for="f-due">Số tiền ${K.dueLabel.toLowerCase()}</label>
            <input class="input money" id="f-due" inputmode="numeric" value="${Core.formatVND(r.due)}" oninput="fmtMoneyInput(this)" /></div>
          <div class="field"><label for="f-duedate">${K.dueDateLabel}</label>
            <input class="input" type="date" id="f-duedate" value="${r.dueDate}" /></div>
        </div>
        ${kind === 'rent' ? `<div class="field"><label for="f-months">Số tháng của kỳ</label>
          <input class="input" id="f-months" type="number" min="1" max="24" inputmode="numeric" value="${r.months || 1}" />
          <div class="hint">Hợp đồng thu 3 tháng/lần thì ghi 3. Đổi số tháng không tự đổi số tiền phải thu.</div></div>` : ''}
        <button type="button" class="btn btn-danger btn-block" style="margin-top:16px" onclick="deleteRow('${kind}','${r.id}')">${icon('trash', 19)} Xoá kỳ này</button>
      </details>
      <div class="btn-row" style="margin-top:20px">
        <button type="button" class="btn btn-line" onclick="closeSheet()">Huỷ</button>
        <button type="submit" class="btn btn-primary btn-lg">${icon('save', 20)} Lưu</button>
      </div>
    </form>`);
}
function submitPay(kind, id) {
  const r = findRow(kind, id); if (!r) return;
  const paid = Core.parseMoney(val('f-paid'));
  const due = Core.parseMoney(val('f-due'));
  const dueDate = val('f-duedate') || r.dueDate;
  if (due == null) { warn('Hãy nhập số tiền ' + KIND[kind].dueLabel.toLowerCase()); return; }
  if (paid != null && paid > due && !confirm(`Số tiền ${KIND[kind].paidLabel.toLowerCase()} (${Core.money(paid)}) lớn hơn số ${KIND[kind].dueLabel.toLowerCase()} (${Core.money(due)}). Vẫn lưu chứ?`)) return;
  change(() => {
    r.paid = paid;
    r.paidDate = paid == null ? null : (val('f-date') || null); // chưa thu thì bỏ ngày thu
    r.note = val('f-note').trim();
    r.due = due;
    r.dueDate = dueDate;
    if (kind === 'rent') { const m = parseInt(val('f-months'), 10); r.months = m > 1 ? m : null; }
  }, null, true);
  closeSheet();
  saveAfterSheet('Đã lưu ✓');
}
/* Nút "Lưu" trong sheet = lưu thật xuống máy, kèm nút Hoàn tác. */
function saveAfterSheet(msg) {
  const ok = saveNow(null);
  toast(ok ? msg : 'Chưa lưu được — bộ nhớ trình duyệt đầy hoặc bị chặn', ok ? { label: 'Hoàn tác', fn: undo } : null);
}
function deleteRow(kind, id) {
  const r = findRow(kind, id); if (!r) return;
  if (!confirm(`Xoá kỳ ${Core.periodShort(r.period)} của ${nameOf(r.contract, kind)}?`)) return;
  closeSheet();
  change(() => { const list = KIND[kind].list(); list.splice(list.indexOf(r), 1); }, 'Đã xoá kỳ ' + Core.periodShort(r.period), true);
}

/* ---------- Thêm kỳ thu / kỳ phí ---------- */
function openAddRow(kind, contractId) {
  const K = KIND[kind];
  const choices = data.contracts.filter(c => kind === 'rent' || Core.amt(c.fee) > 0 || c.id === contractId);
  if (!choices.length) { toast('Chưa có hợp đồng nào có phí quản lý'); return; }
  const cid = contractId || choices[0].id;
  const [y, m] = ui.month.split('-').map(Number);
  const years = []; for (let i = y - 2; i <= y + 3; i++) years.push(i);
  openSheet(`${sheetHead('Thêm kỳ ' + K.verb + ' ' + K.title.toLowerCase(), 'Chọn hợp đồng và tháng, số tiền tự điền theo hợp đồng.')}
    <form onsubmit="event.preventDefault(); submitAddRow('${kind}')">
      <div class="field"><label for="a-contract">Hợp đồng</label>
        <select class="input" id="a-contract" onchange="prefillAdd('${kind}')">${choices.map(c => `<option value="${esc(c.id)}" ${c.id === cid ? 'selected' : ''}>${esc(c.id)} · ${esc(kind === 'fee' ? c.property : c.tenant)}</option>`).join('')}</select></div>
      <div class="grid2">
        <div class="field"><label for="a-month">Tháng của kỳ</label>
          <select class="input" id="a-month" onchange="prefillAdd('${kind}')">${Array.from({ length: 12 }, (_, i) => `<option value="${i + 1}" ${i + 1 === m ? 'selected' : ''}>Tháng ${i + 1}</option>`).join('')}</select></div>
        <div class="field"><label for="a-year">Năm</label>
          <select class="input" id="a-year" onchange="prefillAdd('${kind}')">${years.map(v => `<option ${v === y ? 'selected' : ''}>${v}</option>`).join('')}</select></div>
      </div>
      ${kind === 'rent' ? `<div class="field"><label for="a-months">Số tháng của kỳ</label>
        <input class="input" id="a-months" type="number" min="1" max="24" inputmode="numeric" oninput="prefillAdd('${kind}', true)" /></div>` : ''}
      <div class="grid2">
        <div class="field"><label for="a-due">Số tiền ${K.dueLabel.toLowerCase()}</label>
          <input class="input money" id="a-due" inputmode="numeric" oninput="fmtMoneyInput(this)" /></div>
        <div class="field"><label for="a-duedate">${K.dueDateLabel}</label>
          <input class="input" type="date" id="a-duedate" /></div>
      </div>
      <div class="field"><label for="a-note">Ghi chú</label><textarea class="input" id="a-note"></textarea></div>
      <div id="a-warn"></div>
      <div class="btn-row" style="margin-top:20px">
        <button type="button" class="btn btn-line" onclick="closeSheet()">Huỷ</button>
        <button type="submit" class="btn btn-primary btn-lg">${icon('plus', 20)} Thêm kỳ</button>
      </div>
    </form>`);
  prefillAdd(kind);
}
function addPeriod() { return val('a-year') + '-' + String(val('a-month')).padStart(2, '0'); }
function prefillAdd(kind, keepMonths) {
  const c = contractById(val('a-contract')); if (!c) return;
  const period = addPeriod();
  if (kind === 'rent') {
    const mEl = document.getElementById('a-months');
    if (!keepMonths) mEl.value = Math.max(1, Number(c.cycle) || 1);
    const months = Math.max(1, parseInt(mEl.value, 10) || 1);
    document.getElementById('a-due').value = Core.formatVND(Core.amt(c.rent) * months);
    document.getElementById('a-duedate').value = Core.dateIn(period, c.dueDay);
  } else {
    document.getElementById('a-due').value = Core.formatVND(c.fee);
    document.getElementById('a-duedate').value = Core.dateIn(period, c.feeDay);
  }
  const exists = KIND[kind].list().some(r => r.contract === c.id && r.period === period);
  document.getElementById('a-warn').innerHTML = exists ? `<div class="banner">${icon('alert', 22)}<div>Hợp đồng này đã có kỳ ${Core.periodShort(period)} rồi.</div></div>` : '';
}
function submitAddRow(kind) {
  const c = contractById(val('a-contract')); if (!c) return;
  const period = addPeriod(), due = Core.parseMoney(val('a-due'));
  if (due == null) { warn('Hãy nhập số tiền ' + KIND[kind].dueLabel.toLowerCase()); return; }
  const list = KIND[kind].list();
  if (list.some(r => r.contract === c.id && r.period === period) && !confirm(`${c.id} đã có kỳ ${Core.periodShort(period)}. Vẫn thêm một kỳ nữa?`)) return;
  const row = { id: Core.nextId(list, KIND[kind].prefix), period, contract: c.id, due, dueDate: val('a-duedate') || Core.dateIn(period, kind === 'rent' ? c.dueDay : c.feeDay), paidDate: null, paid: null, note: val('a-note').trim() };
  if (kind === 'rent') { const m = parseInt(val('a-months'), 10); row.months = m > 1 ? m : null; }
  closeSheet();
  if (ui.screen === kind) { ui.month = period; ui[kind].mode = 'month'; }
  change(() => list.push(row), null, true);
  saveAfterSheet(`Đã thêm kỳ ${Core.periodShort(period)} · ${nameOf(c.id, kind)}`);
}

/* ---------- Thêm / sửa hợp đồng ---------- */
const CONTRACT_STATUSES = ['Đang thuê', 'Tạm ngưng', 'Đã kết thúc'];
function openContract(id) {
  const c = id ? contractById(id) : { id: Core.nextContractId(data.contracts), tenant: '', phone: '', property: '', start: today(), end: '', rent: null, dueDay: 5, cycle: 1, deposit: null, fee: null, feeDay: null, feeTo: '', status: Core.ACTIVE, note: '' };
  const m = v => v == null ? '' : Core.formatVND(v);
  const statuses = CONTRACT_STATUSES.includes(c.status) ? CONTRACT_STATUSES : CONTRACT_STATUSES.concat(c.status);
  openSheet(`${sheetHead(id ? 'Sửa hợp đồng ' + esc(c.id) : 'Thêm hợp đồng mới', id ? 'Các kỳ đã tạo giữ nguyên số tiền cũ; kỳ tạo mới sẽ theo số mới.' : '')}
    <form onsubmit="event.preventDefault(); submitContract(${id ? `'${c.id}'` : 'null'})">
      <div class="grid2">
        <div class="field"><label for="c-id">Mã HĐ</label><input class="input" id="c-id" value="${esc(c.id)}" ${id ? 'readonly' : ''} /></div>
        <div class="field"><label for="c-status">Trạng thái</label><select class="input" id="c-status">${statuses.map(s => `<option ${s === c.status ? 'selected' : ''}>${esc(s)}</option>`).join('')}</select></div>
      </div>
      <div class="field"><label for="c-tenant">Tên khách thuê</label><input class="input" id="c-tenant" value="${esc(c.tenant)}" /></div>
      <div class="field"><label for="c-phone">Điện thoại</label><input class="input" id="c-phone" type="tel" inputmode="tel" value="${esc(c.phone)}" /></div>
      <div class="field"><label for="c-property">Nhà / Phòng</label><input class="input" id="c-property" value="${esc(c.property)}" /></div>
      <div class="grid2">
        <div class="field"><label for="c-start">Ngày bắt đầu</label><input class="input" type="date" id="c-start" value="${c.start || ''}" /></div>
        <div class="field"><label for="c-end">Ngày kết thúc</label><input class="input" type="date" id="c-end" value="${c.end || ''}" /></div>
      </div>
      <div class="field"><label for="c-rent">Tiền thuê / tháng (đ)</label><input class="input money" id="c-rent" inputmode="numeric" value="${m(c.rent)}" oninput="fmtMoneyInput(this)" /></div>
      <div class="grid2">
        <div class="field"><label for="c-dueday">Ngày thu hàng tháng</label><input class="input" id="c-dueday" type="number" min="1" max="28" inputmode="numeric" value="${c.dueDay || ''}" /><div class="hint">Số từ 1 đến 28</div></div>
        <div class="field"><label for="c-cycle">Chu kỳ thu</label><select class="input" id="c-cycle">
          ${[1, 2, 3, 6, 12].map(n => `<option value="${n}" ${Number(c.cycle || 1) === n ? 'selected' : ''}>${n === 1 ? 'Hàng tháng' : n + ' tháng/lần'}</option>`).join('')}</select></div>
      </div>
      <div class="field"><label for="c-deposit">Tiền cọc (đ)</label><input class="input money" id="c-deposit" inputmode="numeric" value="${m(c.deposit)}" oninput="fmtMoneyInput(this)" /></div>
      <div class="grid2">
        <div class="field"><label for="c-fee">Phí quản lý / tháng (đ)</label><input class="input money" id="c-fee" inputmode="numeric" value="${m(c.fee)}" oninput="fmtMoneyInput(this)" /></div>
        <div class="field"><label for="c-feeday">Ngày đóng phí</label><input class="input" id="c-feeday" type="number" min="1" max="28" inputmode="numeric" value="${c.feeDay || ''}" /></div>
      </div>
      <div class="field"><label for="c-feeto">Đóng phí cho ai</label><input class="input" id="c-feeto" value="${esc(c.feeTo)}" /></div>
      <div class="field"><label for="c-note">Ghi chú</label><textarea class="input" id="c-note">${esc(c.note)}</textarea></div>
      ${id ? `<details class="more"><summary>Xoá hợp đồng</summary>
        <p class="muted" style="font-size:.9rem">Xoá hợp đồng sẽ xoá luôn mọi kỳ thu và kỳ phí của hợp đồng này.</p>
        <button type="button" class="btn btn-danger btn-block" onclick="deleteContract('${c.id}')">${icon('trash', 19)} Xoá hợp đồng ${esc(c.id)}</button></details>` : ''}
      <div class="btn-row" style="margin-top:20px">
        <button type="button" class="btn btn-line" onclick="closeSheet()">Huỷ</button>
        <button type="submit" class="btn btn-primary btn-lg">${icon('save', 20)} Lưu</button>
      </div>
    </form>`);
}
function submitContract(id) {
  const newId = (val('c-id') || '').trim().replace(/[^A-Za-z0-9_-]/g, '');
  if (!id) {
    if (!newId) { warn('Hãy nhập mã hợp đồng'); return; }
    if (contractById(newId)) { warn('Mã ' + newId + ' đã có rồi, chọn mã khác nhé'); return; }
  }
  const tenant = val('c-tenant').trim();
  if (!tenant) { warn('Hãy nhập tên khách thuê'); return; }
  const day = v => { const n = parseInt(v, 10); return n >= 1 ? Math.min(n, 28) : null; };
  const fields = {
    tenant, phone: val('c-phone').trim(), property: val('c-property').trim(),
    start: val('c-start') || null, end: val('c-end') || null,
    rent: Core.parseMoney(val('c-rent')), dueDay: day(val('c-dueday')), cycle: parseInt(val('c-cycle'), 10) || 1,
    deposit: Core.parseMoney(val('c-deposit')), fee: Core.parseMoney(val('c-fee')), feeDay: day(val('c-feeday')),
    feeTo: val('c-feeto').trim(), status: val('c-status'), note: val('c-note').trim()
  };
  change(() => {
    if (id) Object.assign(contractById(id), fields);
    else data.contracts.push(Object.assign({ id: newId }, fields));
  }, null, true);
  closeSheet();
  if (!id) go('contract', newId);
  saveAfterSheet(id ? 'Đã lưu hợp đồng ✓' : 'Đã thêm hợp đồng ' + newId);
}
function deleteContract(id) {
  const c = contractById(id); if (!c) return;
  const n = data.rent.filter(r => r.contract === id).length + data.fees.filter(r => r.contract === id).length;
  if (!confirm(`Xoá hợp đồng ${id} (${c.tenant}) và ${n} kỳ thu/phí đi kèm?`)) return;
  closeSheet();
  change(() => {
    data.contracts = data.contracts.filter(x => x.id !== id);
    data.rent = data.rent.filter(r => r.contract !== id);
    data.fees = data.fees.filter(r => r.contract !== id);
  }, null, true);
  go('contracts');
  toast('Đã xoá hợp đồng ' + id, { label: 'Hoàn tác', fn: () => { undo(); go('contract', id); } });
}

/* ===================== CÀI ĐẶT ===================== */
function renderSettings() {
  const fsChip = (k, label) => `<button class="chip ${prefs.fontSize === k ? 'sel' : ''}" aria-pressed="${prefs.fontSize === k}" onclick="setFont('${k}')">${label}</button>`;
  document.getElementById('screen-settings').innerHTML = `
    <div class="greet"><div class="eyebrow">Tuỳ chỉnh</div><h2>Cài đặt</h2></div>
    <div class="card">
      <div class="set-block"><h4>${inlineIc('text')} Cỡ chữ</h4><p>Chọn cỡ chữ dễ đọc nhất cho mình.</p>
        <div class="chips">${fsChip('m', 'Vừa')}${fsChip('l', 'Lớn')}${fsChip('xl', 'Rất lớn')}</div></div>
      <hr class="sep" />
      <div class="set-block"><h4>${inlineIc('save')} Lưu dữ liệu</h4>
        <p>Bấm “Lưu lại” sau khi cập nhật, hoặc để app tự lưu sau 1 phút. Dữ liệu nằm trong bộ nhớ trình duyệt của máy này.</p>
        <p><b>${dirty ? 'Đang có ' + dirty + ' thay đổi chưa lưu.' : data.updatedAt ? 'Lần lưu gần nhất: ' + timeLabel(data.updatedAt) + ' ngày ' + Core.fmtDate(Core.todayISO(new Date(data.updatedAt))) : 'Chưa lưu lần nào.'}</b></p>
        <button class="btn btn-primary btn-block" onclick="saveNow(false)">${icon('save', 20)} Lưu ngay</button></div>
      <hr class="sep" />
      <div class="set-block"><h4>${inlineIc('download')} Sao lưu ra file</h4>
        <p>Tải 1 file nhỏ về máy để cất giữ, hoặc mở trên máy khác. Nên sao lưu mỗi tháng một lần.${prefs.backupAt ? '<br>Lần sao lưu gần nhất: ' + Core.fmtDate(prefs.backupAt) + '.' : ''}</p>
        <button class="btn btn-dark btn-block" onclick="downloadBackup()">${icon('download', 20)} Tải file sao lưu</button></div>
      <div class="set-block" style="margin-top:16px"><h4>${inlineIc('upload')} Mở file sao lưu</h4>
        <p>Chọn file sao lưu đã tải trước đó. Dữ liệu trên máy này sẽ được thay bằng dữ liệu trong file.</p>
        <button class="btn btn-line btn-block" onclick="document.getElementById('file-restore').click()">${icon('upload', 20)} Chọn file sao lưu</button></div>
      <hr class="sep" />
      <div class="set-block"><h4>${inlineIc('printer')} Xuất báo cáo</h4><p>Tạo file PDF để in hoặc gửi qua Zalo, email.</p>
        <button class="btn btn-line btn-block" onclick="exportPdf()">${icon('printer', 20)} Xuất PDF</button></div>
      <hr class="sep" />
      <div class="set-block"><h4>${inlineIc('refresh')} Khôi phục dữ liệu gốc</h4>
        <p>Đưa mọi số liệu về đúng như file Excel “${esc(SEED.source)}”. Những gì đã cập nhật sau đó sẽ mất — nhớ sao lưu trước.</p>
        <button class="btn btn-danger btn-block" onclick="resetToSeed()">${icon('refresh', 20)} Khôi phục dữ liệu gốc</button></div>
    </div>
    <div class="card block">
      <div class="set-block"><h4>${inlineIc('help')} Dùng hằng tháng — 4 bước</h4>
        <ol class="steps">
          <li><b>Đầu tháng:</b> mở <b>Tiền thuê</b>, chọn tháng. Nếu tháng chưa có kỳ thu, bấm <b>“Tạo … kỳ cho tháng này”</b>.</li>
          <li><b>Khi khách trả:</b> bấm <b>“Thu đủ”</b>. Trả thiếu hoặc khác ngày thì bấm <b>“Sửa”</b> để ghi số tiền và ngày thu. Thẻ chuyển xanh.</li>
          <li><b>Lưu:</b> bấm <b>“Lưu lại”</b> trên thanh vàng phía dưới, hoặc đợi 1 phút app tự lưu.</li>
          <li><b>Cuối tuần:</b> mở <b>Tổng quan</b> xem ai đang nợ. Cần gửi báo cáo thì bấm <b>“Xuất báo cáo PDF”</b>.</li>
        </ol></div>
      <hr class="sep" />
      <div class="set-block"><h4>Hợp đồng thu 3 tháng/lần</h4>
        <p style="margin:0">HĐ005 và HĐ007 thu 3 tháng một lần: mỗi kỳ có “Số tháng của kỳ” = 3 nên số phải thu = tiền thuê × 3. App chỉ tạo kỳ ở tháng đến hạn, không tạo cho tháng giữa kỳ.</p></div>
    </div>`;
}
function inlineIc(name) { return `<span style="display:inline-block;vertical-align:-3px;margin-right:4px">${icon(name, 20)}</span>`; }
function setFont(k) {
  prefs.fontSize = k; Store.set(K_PREFS, prefs);
  applyFont(); render();
}
function applyFont() { document.documentElement.className = 'fs-' + (prefs.fontSize || 'l'); }
function downloadBackup() {
  if (dirty) saveNow(null);
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const name = `so-thue-nha-sao-luu-${today()}.json`;
  saveBlob(blob, name);
  prefs.backupAt = today(); Store.set(K_PREFS, prefs);
  renderSettings();
  toast('Đã tải file ' + name);
}
function saveBlob(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}
function restoreFromFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    let d = null;
    try { d = JSON.parse(reader.result); } catch (e) {}
    if (!Core.validateData(d)) { toast('File này không phải file sao lưu của Sổ Thuê Nhà'); return; }
    if (!confirm(`Mở file sao lưu “${file.name}”?\n${d.contracts.length} hợp đồng · ${d.rent.length} kỳ thuê · ${d.fees.length} kỳ phí.\nDữ liệu hiện tại trên máy này sẽ được thay thế.`)) return;
    change(() => { data = d; }, null, true);
    saveNow(null);
    go('home');
    toast('Đã mở file sao lưu ✓', { label: 'Hoàn tác', fn: undo });
  };
  reader.readAsText(file);
}
function resetToSeed() {
  if (!confirm('Khôi phục dữ liệu gốc từ file Excel? Mọi cập nhật sau đó sẽ mất.')) return;
  if (!confirm('Chắc chắn chứ? Bấm OK để khôi phục.')) return;
  change(() => { data = clone(SEED); }, null, true);
  saveNow(null);
  go('home');
  toast('Đã khôi phục dữ liệu gốc', { label: 'Hoàn tác', fn: undo });
}

/* ===================== TIỆN ÍCH ===================== */
function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function val(id) { const el = document.getElementById(id); return el ? el.value : ''; }
function clone(o) { return JSON.parse(JSON.stringify(o)); }
function timeLabel(iso) { const d = new Date(iso); return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); }
function savedLabel(iso) {
  const day = Core.todayISO(new Date(iso));
  return timeLabel(iso) + (day === today() ? '' : ' ngày ' + Core.fmtDate(day));
}
function fmtMoneyInput(el) {
  const n = Core.parseMoney(el.value);
  el.value = n == null ? '' : Core.formatVND(n);
}
function setMoney(id, n) { document.getElementById(id).value = n == null ? '' : Core.formatVND(n); }

/* ===================== INIT ===================== */
(function init() {
  prefs = Object.assign({ fontSize: 'l' }, Store.get(K_PREFS) || {});
  applyFont();
  const stored = Store.get(K_DATA);
  if (stored && Core.validateData(stored)) data = stored;
  else {
    if (stored) Store.set(K_DATA + ':hong', stored); // giữ lại bản hỏng để cứu nếu cần
    data = clone(SEED);
    data.updatedAt = new Date().toISOString();
    Store.set(K_DATA, data);
  }
  document.getElementById('ti-home').innerHTML = icon('home', 24, 2);
  document.getElementById('ti-rent').innerHTML = icon('wallet', 24, 2);
  document.getElementById('ti-fee').innerHTML = icon('receipt', 24, 2);
  document.getElementById('ti-contracts').innerHTML = icon('file', 24, 2);
  document.getElementById('ti-set').innerHTML = icon('settings', 20, 2.2);
  document.getElementById('savebar-btn').innerHTML = icon('save', 20) + ' Lưu lại';
  document.getElementById('file-restore').addEventListener('change', e => { const f = e.target.files[0]; if (f) restoreFromFile(f); e.target.value = ''; });
  sheet().addEventListener('click', e => { if (e.target === sheet()) closeSheet(); });
  // Không để mất dữ liệu khi đóng/ẩn trang
  const flush = () => { if (dirty) saveNow(null); };
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush(); });
  window.addEventListener('pagehide', flush);
  // Sang ngày mới thì cập nhật trạng thái (quá hạn / sắp đến hạn)
  let lastDay = today();
  setInterval(() => { if (today() !== lastDay) { lastDay = today(); if (!sheet().open) render(); } }, 60 * 1000);
  go('home');
  renderSaveState();
  if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
