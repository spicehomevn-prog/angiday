/* ===================== CORE =====================
   Hàm thuần (không đụng DOM) — tính trạng thái, tổng hợp, tạo kỳ thu.
   Bám đúng công thức của file Excel:
   - Còn thiếu  = Số tiền phải thu − Số tiền đã thu            (cột I)
   - Số ngày trễ = còn thiếu > 0 ? max(0, hôm nay − hạn) : 0      (cột J)
   - Trạng thái: đủ → ✅; quá hạn → 🔴; còn ≤ 3 ngày → 🟡; còn lại ⚪ (cột K)
   Chạy được cả trong trình duyệt (window.Core) lẫn Node (require) để test. */
(function (root) {
  const DAY = 86400000;
  const ACTIVE = 'Đang thuê';

  /* ---------- Ngày tháng (chuỗi ISO 'YYYY-MM-DD', kỳ 'YYYY-MM') ---------- */
  function pad(n) { return String(n).padStart(2, '0'); }
  function dayNum(iso) { const [y, m, d] = iso.split('-').map(Number); return Date.UTC(y, m - 1, d) / DAY; }
  function todayISO(now) { const d = now || new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
  function daysBetween(fromISO, toISO) { return Math.round(dayNum(toISO) - dayNum(fromISO)); }
  function periodOf(iso) { return iso.slice(0, 7); }
  function addMonths(period, n) {
    const [y, m] = period.split('-').map(Number);
    const t = y * 12 + (m - 1) + n;
    return Math.floor(t / 12) + '-' + pad((t % 12) + 1);
  }
  function monthDiff(a, b) { const [ya, ma] = a.split('-').map(Number), [yb, mb] = b.split('-').map(Number); return (yb - ya) * 12 + (mb - ma); }
  function daysInMonth(period) { const [y, m] = period.split('-').map(Number); return new Date(Date.UTC(y, m, 0)).getUTCDate(); }
  /* Ngày `day` của tháng `period` (Excel: DATE(năm, tháng, MAX(1, ngày))) — chặn ở ngày cuối tháng. */
  function dateIn(period, day) { const d = Math.min(Math.max(1, Number(day) || 1), daysInMonth(period)); return period + '-' + pad(d); }

  /* ---------- Định dạng ---------- */
  function amt(n) { const v = Number(n); return Number.isFinite(v) ? v : 0; }
  function formatVND(n) {
    const v = Math.round(amt(n));
    const s = Math.abs(v).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return (v < 0 ? '−' : '') + s;
  }
  function money(n) { return formatVND(n) + ' đ'; }
  function parseMoney(s) {
    if (typeof s === 'number') return s;
    const digits = String(s == null ? '' : s).replace(/[^\d]/g, '');
    return digits === '' ? null : Number(digits);
  }
  function fmtDate(iso) { if (!iso) return ''; const [y, m, d] = iso.split('-'); return d + '/' + m + '/' + y; }
  function periodLabel(period) { const [y, m] = period.split('-'); return 'Tháng ' + m + '/' + y; }
  function periodShort(period) { const [y, m] = period.split('-'); return m + '/' + y; }
  const WEEKDAYS = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
  function weekdayLabel(iso) { const d = new Date(dayNum(iso) * DAY); return WEEKDAYS[d.getUTCDay()] + ', ' + fmtDate(iso); }

  /* ---------- Một kỳ thu / kỳ phí ---------- */
  function rowCalc(row, today) {
    const due = amt(row.due), paid = amt(row.paid), remaining = due - paid;
    const out = { due, paid, remaining, overpaid: remaining < 0 ? -remaining : 0, daysLate: 0, daysLeft: null, status: 'done' };
    if (remaining > 0) {
      const diff = daysBetween(today, row.dueDate); // hạn − hôm nay
      if (diff < 0) { out.status = 'late'; out.daysLate = -diff; }
      else { out.status = diff <= 3 ? 'soon' : 'wait'; out.daysLeft = diff; }
    }
    return out;
  }

  const STATUS = {
    late: { emoji: '🔴', label: 'Quá hạn', order: 0 },
    soon: { emoji: '🟡', label: 'Sắp đến hạn', order: 1 },
    wait: { emoji: '⚪', label: 'Chưa đến hạn', order: 2 },
    done: { emoji: '✅', label: 'Đã thu đủ', order: 3 }
  };
  /* Nhãn trạng thái đầy đủ, vd "🔴 Quá hạn 8 ngày". kind: 'rent' | 'fee' */
  function statusText(calc, kind) {
    if (calc.status === 'done') return '✅ ' + (kind === 'fee' ? 'Đã đóng' : 'Đã thu đủ');
    if (calc.status === 'late') return '🔴 Quá hạn ' + calc.daysLate + ' ngày';
    if (calc.status === 'soon') return '🟡 ' + (calc.daysLeft === 0 ? 'Đến hạn hôm nay' : 'Còn ' + calc.daysLeft + ' ngày tới hạn');
    return '⚪ Chưa đến hạn';
  }

  /* ---------- Tổng hợp ---------- */
  /* Giống TỔNG QUAN!C7:C10 (tiền thuê) và C13:C16 (phí) cho một tháng. */
  function monthSummary(rows, period, today) {
    const s = { count: 0, due: 0, paid: 0, remaining: 0, late: 0, soon: 0, wait: 0, done: 0 };
    rows.forEach(r => {
      if (r.period !== period) return;
      const c = rowCalc(r, today);
      s.count++; s.due += c.due; s.paid += c.paid; s[c.status]++;
    });
    s.remaining = s.due - s.paid;
    return s;
  }
  /* Giống TỔNG QUAN!C19 / C20: tổng còn thiếu của mọi kỳ đã quá hạn. */
  function totalDebt(rows, today) {
    let amount = 0, count = 0;
    rows.forEach(r => { const c = rowCalc(r, today); if (c.status === 'late') { amount += c.remaining; count++; } });
    return { amount, count };
  }
  /* Nợ quá hạn gom theo hợp đồng, nợ nhiều ngày nhất lên đầu. */
  function debtByContract(rows, today) {
    const map = {};
    rows.forEach(r => {
      const c = rowCalc(r, today);
      if (c.status !== 'late') return;
      const g = map[r.contract] || (map[r.contract] = { contract: r.contract, amount: 0, count: 0, maxLate: 0, periods: [] });
      g.amount += c.remaining; g.count++; g.maxLate = Math.max(g.maxLate, c.daysLate); g.periods.push(r.period);
    });
    return Object.values(map).sort((a, b) => b.maxLate - a.maxLate || b.amount - a.amount);
  }
  /* Tiến độ thanh toán của một hợp đồng tính tới hôm nay. */
  function contractProgress(rows, contractId, today) {
    const p = { dueSoFar: 0, paidSoFar: 0, prepaid: 0, debt: 0, lateCount: 0, total: 0 };
    rows.forEach(r => {
      if (r.contract !== contractId) return;
      const c = rowCalc(r, today);
      p.total++;
      if (daysBetween(r.dueDate, today) >= 0) { p.dueSoFar += c.due; p.paidSoFar += c.paid; }
      else p.prepaid += c.paid;
      if (c.status === 'late') { p.debt += c.remaining; p.lateCount++; }
    });
    return p;
  }
  /* Quá hạn → sắp đến hạn → chưa đến hạn (hạn sớm trước) → đã thu (mới nhất trước). */
  function sortRows(rows, today) {
    return rows.map(r => ({ r, c: rowCalc(r, today) })).sort((a, b) => {
      const byStatus = STATUS[a.c.status].order - STATUS[b.c.status].order;
      if (byStatus) return byStatus;
      const byDate = a.r.dueDate.localeCompare(b.r.dueDate) * (a.c.status === 'done' ? -1 : 1);
      return byDate || a.r.contract.localeCompare(b.r.contract);
    }).map(x => x.r);
  }

  /* ---------- Tạo kỳ thu theo hợp đồng ----------
     Tiền thuê: từ tháng bắt đầu HĐ, cứ mỗi `cycle` tháng một kỳ (1 = hàng tháng, 3 = ba tháng/lần),
     tới khi hạn thu vượt ngày kết thúc HĐ. Phí quản lý: hàng tháng nếu HĐ có phí > 0.
     Chỉ áp dụng cho HĐ "Đang thuê". */
  function expectedRent(contract, period) {
    if (!contract || contract.status !== ACTIVE || !contract.start || !amt(contract.rent)) return null;
    const cycle = Math.max(1, Number(contract.cycle) || 1);
    const diff = monthDiff(periodOf(contract.start), period);
    if (diff < 0 || diff % cycle !== 0) return null;
    const dueDate = dateIn(period, contract.dueDay);
    if (contract.end && dueDate > contract.end) return null;
    return { period, contract: contract.id, months: cycle > 1 ? cycle : null, due: amt(contract.rent) * cycle, dueDate, paidDate: null, paid: null, note: '' };
  }
  function expectedFee(contract, period) {
    if (!contract || contract.status !== ACTIVE || !contract.start || !(amt(contract.fee) > 0)) return null;
    if (monthDiff(periodOf(contract.start), period) < 0) return null;
    const dueDate = dateIn(period, contract.feeDay);
    if (contract.end && dueDate > contract.end) return null;
    return { period, contract: contract.id, due: amt(contract.fee), dueDate, paidDate: null, paid: null, note: '' };
  }
  /* Các kỳ lẽ ra phải có trong tháng nhưng chưa có trong sổ. */
  function missingFor(data, period) {
    const has = (list, r) => list.some(x => x.contract === r.contract && x.period === r.period);
    const rent = [], fees = [];
    data.contracts.forEach(c => {
      const r = expectedRent(c, period); if (r && !has(data.rent, r)) rent.push(r);
      const f = expectedFee(c, period); if (f && !has(data.fees, f)) fees.push(f);
    });
    return { rent, fees };
  }
  function nextId(list, prefix) {
    let max = 0;
    list.forEach(x => { const n = parseInt(String(x.id || '').replace(/\D/g, ''), 10); if (n > max) max = n; });
    return prefix + String(max + 1).padStart(3, '0');
  }
  function nextContractId(contracts) {
    let max = 0;
    contracts.forEach(c => { const n = parseInt(String(c.id).replace(/\D/g, ''), 10); if (n > max) max = n; });
    return 'HD' + String(max + 1).padStart(3, '0');
  }
  /* Thời hạn còn lại của HĐ, vd "Còn 4 năm 5 tháng" / "Đã hết hạn". */
  function remainingTerm(contract, today) {
    if (!contract.end) return '';
    const days = daysBetween(today, contract.end);
    if (days < 0) return 'Đã hết hạn';
    const months = monthDiff(periodOf(today), periodOf(contract.end));
    if (months < 1) return 'Còn ' + days + ' ngày';
    const y = Math.floor(months / 12), m = months % 12;
    return 'Còn ' + (y ? y + ' năm ' : '') + (m ? m + ' tháng' : '').trim();
  }

  /* ---------- Kiểm tra file sao lưu ---------- */
  function validateData(d) {
    if (!d || typeof d !== 'object') return false;
    if (!Array.isArray(d.contracts) || !Array.isArray(d.rent) || !Array.isArray(d.fees)) return false;
    const okRow = r => r && typeof r.period === 'string' && /^\d{4}-\d{2}$/.test(r.period) && typeof r.contract === 'string' &&
      typeof r.dueDate === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(r.dueDate);
    return d.contracts.every(c => c && typeof c.id === 'string') && d.rent.every(okRow) && d.fees.every(okRow);
  }

  const Core = {
    ACTIVE, STATUS, todayISO, daysBetween, periodOf, addMonths, monthDiff, dateIn,
    amt, formatVND, money, parseMoney, fmtDate, periodLabel, periodShort, weekdayLabel,
    rowCalc, statusText, monthSummary, totalDebt, debtByContract, contractProgress, sortRows,
    expectedRent, expectedFee, missingFor, nextId, nextContractId, remainingTerm, validateData
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = Core;
  else root.Core = Core;
})(typeof window !== 'undefined' ? window : globalThis);
