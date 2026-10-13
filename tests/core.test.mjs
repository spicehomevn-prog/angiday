// Đối chiếu số liệu của app với file Excel gốc. Chạy: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Core = require('../public/js/core.js');
const SEED = require('../public/js/data.js');

// Ngày tính toán cố định để kết quả không phụ thuộc ngày chạy test.
const TODAY = '2026-10-13';

test('dữ liệu gốc đủ 7 hợp đồng, 47 kỳ thuê, 17 kỳ phí', () => {
  assert.equal(SEED.contracts.length, 7);
  assert.equal(SEED.rent.length, 47);
  assert.equal(SEED.fees.length, 17);
  assert.ok(Core.validateData(SEED));
});

test('tháng 07/2026 — tiền thuê (TỔNG QUAN C7:C10)', () => {
  const s = Core.monthSummary(SEED.rent, '2026-07', TODAY);
  assert.equal(s.due, 244000000);
  assert.equal(s.paid, 209000000);
  assert.equal(s.remaining, 35000000);
  // Excel báo 1 vì ô "Còn thiếu" của HĐ006 kỳ 07 bị xoá công thức; đúng ra là 2 (HĐ002, HĐ006).
  assert.equal(s.late, 2);
});

test('tháng 07/2026 — phí quản lý (TỔNG QUAN C13:C16)', () => {
  const s = Core.monthSummary(SEED.fees, '2026-07', TODAY);
  assert.equal(s.due, 20509100);
  assert.equal(s.paid, 20509100);
  assert.equal(s.remaining, 0);
  assert.equal(s.late, 0);
});

test('tháng 10/2026 — tiền thuê', () => {
  const s = Core.monthSummary(SEED.rent, '2026-10', TODAY);
  assert.equal(s.due, 244000000);
  assert.equal(s.paid, 15000000);
  assert.equal(s.late, 4);
  assert.equal(s.soon, 1);
  const hd001 = SEED.rent.find(r => r.period === '2026-10' && r.contract === 'HD001');
  const c = Core.rowCalc(hd001, TODAY);
  assert.equal(c.status, 'soon');
  assert.equal(Core.statusText(c, 'rent'), '🟡 Còn 2 ngày tới hạn');
});

test('tổng nợ đọng mọi kỳ (TỔNG QUAN C19, C20)', () => {
  assert.equal(Core.totalDebt(SEED.rent, TODAY).amount, 923000000);
  assert.equal(Core.totalDebt(SEED.fees, TODAY).amount, 53842700);
});

test('HĐ006: 45tr ngày 05/08 là trả trước kỳ 08–10, kỳ 06–07 vẫn nợ', () => {
  const rows = SEED.rent.filter(r => r.contract === 'HD006');
  const st = p => Core.rowCalc(rows.find(r => r.period === p), TODAY).status;
  assert.equal(st('2026-06'), 'late');
  assert.equal(st('2026-07'), 'late');
  assert.equal(st('2026-08'), 'done');
  assert.equal(st('2026-09'), 'done');
  assert.equal(st('2026-10'), 'done');
  const paid = rows.filter(r => r.paidDate === '2026-08-05').reduce((s, r) => s + r.paid, 0);
  assert.equal(paid, 45000000);
});

test('số ngày trễ giống cột J của Excel', () => {
  const late = (contract, period) => Core.rowCalc(SEED.rent.find(r => r.contract === contract && r.period === period), TODAY).daysLate;
  assert.equal(late('HD002', '2026-02'), 250);
  assert.equal(late('HD002', '2026-04'), 191);
  assert.equal(late('HD001', '2026-08'), 59);
  assert.equal(late('HD007', '2026-08'), 54);
  assert.equal(late('HD005', '2026-10'), 8);
});

test('quy tắc tạo kỳ tái tạo đúng mọi dòng có sẵn trong Excel (01–12/2026)', () => {
  const key = r => r.period + '|' + r.contract;
  const genRent = [], genFee = [];
  for (let m = 1; m <= 12; m++) {
    const p = '2026-' + String(m).padStart(2, '0');
    SEED.contracts.forEach(c => {
      const r = Core.expectedRent(c, p); if (r) genRent.push(r);
      const f = Core.expectedFee(c, p); if (f) genFee.push(f);
    });
  }
  assert.deepEqual(genRent.map(key).sort(), SEED.rent.map(key).sort());
  assert.deepEqual(genFee.map(key).sort(), SEED.fees.map(key).sort());
  // Số tiền và hạn thu cũng khớp.
  genRent.forEach(g => {
    const s = SEED.rent.find(r => key(r) === key(g));
    assert.equal(g.due, s.due, key(g));
    assert.equal(g.dueDate, s.dueDate, key(g));
    assert.equal(g.months, s.months, key(g));
  });
  genFee.forEach(g => {
    const s = SEED.fees.find(r => key(r) === key(g));
    assert.equal(g.due, s.due, key(g));
    assert.equal(g.dueDate, s.dueDate, key(g));
  });
});

test('tháng 01/2027 thiếu đúng các kỳ cần tạo', () => {
  const m = Core.missingFor(SEED, '2027-01');
  assert.deepEqual(m.rent.map(r => r.contract).sort(), ['HD001', 'HD002', 'HD003', 'HD004', 'HD005', 'HD006']);
  assert.deepEqual(m.fees.map(r => r.contract).sort(), ['HD001', 'HD007']);
  assert.equal(m.rent.find(r => r.contract === 'HD005').due, 72000000);
  // HĐ007 hết hạn 19/05/2027 nên không tạo kỳ 05/2027.
  assert.equal(Core.expectedRent(SEED.contracts.find(c => c.id === 'HD007'), '2027-05'), null);
  assert.ok(Core.expectedRent(SEED.contracts.find(c => c.id === 'HD007'), '2027-02'));
});

test('định dạng tiền và ngày', () => {
  assert.equal(Core.formatVND(7684600), '7.684.600');
  assert.equal(Core.money(244000000), '244.000.000 đ');
  assert.equal(Core.parseMoney('20.000.000 đ'), 20000000);
  assert.equal(Core.parseMoney(''), null);
  assert.equal(Core.fmtDate('2026-08-05'), '05/08/2026');
  assert.equal(Core.periodLabel('2026-10'), 'Tháng 10/2026');
  assert.equal(Core.addMonths('2026-11', 3), '2027-02');
  assert.equal(Core.addMonths('2026-01', -1), '2025-12');
  assert.equal(Core.dateIn('2026-02', 31), '2026-02-28');
});
