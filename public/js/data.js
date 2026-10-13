/* ===================== DỮ LIỆU GỐC =====================
   Lấy từ file "Quản lý hợp đồng thuê - Mrs. Hằng - 27.07.26.xlsx"
   (sheet HỢP ĐỒNG, THU TIỀN THUÊ, PHÍ QUẢN LÝ — chỉ các ô nhập tay).
   - due     = Tiền thuê/tháng × Số tháng của kỳ (đúng công thức cột E)
   - dueDate = ngày thu (cột H / L của HỢP ĐỒNG) trong tháng của kỳ (cột F)
   - HĐ006: 45.000.000đ thu ngày 05/08/2026 ghi là trả trước kỳ 08, 09, 10/2026.
   Dùng cho lần mở app đầu tiên và nút "Khôi phục dữ liệu gốc". */
(function (root) {
  const SEED = {
  version: 1,
  source: 'Quản lý hợp đồng thuê - Mrs. Hằng - 27.07.26.xlsx',
  contracts: [
    {"id": "HD001", "tenant": "Cty TNHH Dreamz Cafe and Dining", "phone": "", "property": "A01-19 The Opera", "start": "2026-04-15", "end": "2031-03-14", "rent": 100000000, "dueDay": 15, "cycle": 1, "deposit": 200000000, "fee": 7684600, "feeDay": 15, "feeTo": "", "status": "Đang thuê", "note": "Khách trả trực tiếp"},
    {"id": "HD002", "tenant": "Lưu Hoàng Kim Thanh", "phone": "", "property": "A02-23 The Opera", "start": "2026-01-01", "end": "2028-12-31", "rent": 20000000, "dueDay": 5, "cycle": 1, "deposit": 40000000, "fee": 0, "feeDay": null, "feeTo": "", "status": "Đang thuê", "note": "Nợ tháng 2, 4, 7 chưa chuyển khoản"},
    {"id": "HD003", "tenant": "Vũ Thị Phúc", "phone": "", "property": "A02-22 The Opera", "start": "2026-07-02", "end": "2028-06-30", "rent": 21000000, "dueDay": 5, "cycle": 1, "deposit": 45000000, "fee": 0, "feeDay": null, "feeTo": "", "status": "Đang thuê", "note": "Ngày kết thúc đã xác nhận là 30/06/2028"},
    {"id": "HD004", "tenant": "Trần Hải Hưng", "phone": "", "property": "XTSON Hóc Môn", "start": "2026-07-01", "end": "2031-06-30", "rent": 16000000, "dueDay": 5, "cycle": 1, "deposit": 48000000, "fee": null, "feeDay": null, "feeTo": "", "status": "Đang thuê", "note": ""},
    {"id": "HD005", "tenant": "Cty Nhân Minh VN", "phone": "", "property": "Bình Phú, HCM", "start": "2026-07-01", "end": "2028-06-30", "rent": 24000000, "dueDay": 5, "cycle": 3, "deposit": null, "fee": null, "feeDay": null, "feeTo": "", "status": "Đang thuê", "note": "Kỳ 01/07/2027 tăng 10% => 26.400.000"},
    {"id": "HD006", "tenant": "Thạch Văn Hò", "phone": "", "property": "Cần Giờ", "start": "2026-04-01", "end": "2031-03-31", "rent": 15000000, "dueDay": 5, "cycle": 1, "deposit": 90000000, "fee": null, "feeDay": null, "feeTo": "", "status": "Đang thuê", "note": ""},
    {"id": "HD007", "tenant": "Sunrise ĐN", "phone": "", "property": "Đà Nẵng", "start": "2026-05-20", "end": "2027-05-19", "rent": 130000000, "dueDay": 20, "cycle": 3, "deposit": 260000000, "fee": 12824500, "feeDay": 1, "feeTo": "", "status": "Đang thuê", "note": "Kỳ kế tiếp đến hạn 20/08/2026"}
  ],
  rent: [
    {"id": "R001", "period": "2026-01", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-01-05", "paidDate": null, "paid": 20000000, "note": ""},
    {"id": "R002", "period": "2026-02", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-02-05", "paidDate": null, "paid": null, "note": "Khách nợ, chưa chuyển khoản"},
    {"id": "R003", "period": "2026-03", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-03-05", "paidDate": null, "paid": 20000000, "note": ""},
    {"id": "R004", "period": "2026-04", "contract": "HD001", "months": null, "due": 100000000, "dueDate": "2026-04-15", "paidDate": null, "paid": 100000000, "note": ""},
    {"id": "R005", "period": "2026-04", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-04-05", "paidDate": null, "paid": null, "note": "Khách nợ, chưa chuyển khoản"},
    {"id": "R006", "period": "2026-04", "contract": "HD006", "months": null, "due": 15000000, "dueDate": "2026-04-05", "paidDate": null, "paid": 15000000, "note": ""},
    {"id": "R007", "period": "2026-05", "contract": "HD001", "months": null, "due": 100000000, "dueDate": "2026-05-15", "paidDate": null, "paid": 100000000, "note": ""},
    {"id": "R008", "period": "2026-05", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-05-05", "paidDate": null, "paid": 20000000, "note": ""},
    {"id": "R009", "period": "2026-05", "contract": "HD006", "months": null, "due": 15000000, "dueDate": "2026-05-05", "paidDate": null, "paid": 15000000, "note": ""},
    {"id": "R010", "period": "2026-05", "contract": "HD007", "months": 3, "due": 390000000, "dueDate": "2026-05-20", "paidDate": null, "paid": 390000000, "note": "Kỳ 20/05 – 19/08/2026"},
    {"id": "R011", "period": "2026-06", "contract": "HD001", "months": null, "due": 100000000, "dueDate": "2026-06-15", "paidDate": null, "paid": 100000000, "note": ""},
    {"id": "R012", "period": "2026-06", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-06-05", "paidDate": null, "paid": 20000000, "note": ""},
    {"id": "R013", "period": "2026-06", "contract": "HD006", "months": null, "due": 15000000, "dueDate": "2026-06-05", "paidDate": null, "paid": null, "note": "Khách còn nợ"},
    {"id": "R014", "period": "2026-07", "contract": "HD001", "months": null, "due": 100000000, "dueDate": "2026-07-15", "paidDate": null, "paid": 100000000, "note": ""},
    {"id": "R015", "period": "2026-07", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-07-05", "paidDate": null, "paid": null, "note": "Khách nợ, chưa chuyển khoản"},
    {"id": "R016", "period": "2026-07", "contract": "HD003", "months": null, "due": 21000000, "dueDate": "2026-07-05", "paidDate": null, "paid": 21000000, "note": ""},
    {"id": "R017", "period": "2026-07", "contract": "HD004", "months": null, "due": 16000000, "dueDate": "2026-07-05", "paidDate": null, "paid": 16000000, "note": ""},
    {"id": "R018", "period": "2026-07", "contract": "HD005", "months": 3, "due": 72000000, "dueDate": "2026-07-05", "paidDate": null, "paid": 72000000, "note": "Kỳ 07–09/2026"},
    {"id": "R019", "period": "2026-07", "contract": "HD006", "months": null, "due": 15000000, "dueDate": "2026-07-05", "paidDate": null, "paid": null, "note": "Khách còn nợ"},
    {"id": "R020", "period": "2026-08", "contract": "HD001", "months": null, "due": 100000000, "dueDate": "2026-08-15", "paidDate": null, "paid": null, "note": ""},
    {"id": "R021", "period": "2026-08", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-08-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R022", "period": "2026-08", "contract": "HD003", "months": null, "due": 21000000, "dueDate": "2026-08-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R023", "period": "2026-08", "contract": "HD004", "months": null, "due": 16000000, "dueDate": "2026-08-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R024", "period": "2026-08", "contract": "HD006", "months": null, "due": 15000000, "dueDate": "2026-08-05", "paidDate": "2026-08-05", "paid": 15000000, "note": "Trả trước 45.000.000đ ngày 05/08/2026 cho kỳ 08, 09, 10/2026"},
    {"id": "R025", "period": "2026-08", "contract": "HD007", "months": 3, "due": 390000000, "dueDate": "2026-08-20", "paidDate": null, "paid": null, "note": "Kỳ 20/08 – 19/11/2026"},
    {"id": "R026", "period": "2026-09", "contract": "HD001", "months": null, "due": 100000000, "dueDate": "2026-09-15", "paidDate": null, "paid": null, "note": ""},
    {"id": "R027", "period": "2026-09", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-09-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R028", "period": "2026-09", "contract": "HD003", "months": null, "due": 21000000, "dueDate": "2026-09-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R029", "period": "2026-09", "contract": "HD004", "months": null, "due": 16000000, "dueDate": "2026-09-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R030", "period": "2026-09", "contract": "HD006", "months": null, "due": 15000000, "dueDate": "2026-09-05", "paidDate": "2026-08-05", "paid": 15000000, "note": "Trả trước 45.000.000đ ngày 05/08/2026 cho kỳ 08, 09, 10/2026"},
    {"id": "R031", "period": "2026-10", "contract": "HD005", "months": 3, "due": 72000000, "dueDate": "2026-10-05", "paidDate": null, "paid": null, "note": "Kỳ 10-12/2026"},
    {"id": "R032", "period": "2026-10", "contract": "HD001", "months": null, "due": 100000000, "dueDate": "2026-10-15", "paidDate": null, "paid": null, "note": ""},
    {"id": "R033", "period": "2026-10", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-10-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R034", "period": "2026-10", "contract": "HD003", "months": null, "due": 21000000, "dueDate": "2026-10-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R035", "period": "2026-10", "contract": "HD004", "months": null, "due": 16000000, "dueDate": "2026-10-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R036", "period": "2026-10", "contract": "HD006", "months": null, "due": 15000000, "dueDate": "2026-10-05", "paidDate": "2026-08-05", "paid": 15000000, "note": "Trả trước 45.000.000đ ngày 05/08/2026 cho kỳ 08, 09, 10/2026"},
    {"id": "R037", "period": "2026-11", "contract": "HD007", "months": 3, "due": 390000000, "dueDate": "2026-11-20", "paidDate": null, "paid": null, "note": "20/11/2026-19/02/2027"},
    {"id": "R038", "period": "2026-11", "contract": "HD001", "months": null, "due": 100000000, "dueDate": "2026-11-15", "paidDate": null, "paid": null, "note": ""},
    {"id": "R039", "period": "2026-11", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-11-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R040", "period": "2026-11", "contract": "HD003", "months": null, "due": 21000000, "dueDate": "2026-11-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R041", "period": "2026-11", "contract": "HD004", "months": null, "due": 16000000, "dueDate": "2026-11-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R042", "period": "2026-11", "contract": "HD006", "months": null, "due": 15000000, "dueDate": "2026-11-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R043", "period": "2026-12", "contract": "HD001", "months": null, "due": 100000000, "dueDate": "2026-12-15", "paidDate": null, "paid": null, "note": ""},
    {"id": "R044", "period": "2026-12", "contract": "HD002", "months": null, "due": 20000000, "dueDate": "2026-12-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R045", "period": "2026-12", "contract": "HD003", "months": null, "due": 21000000, "dueDate": "2026-12-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R046", "period": "2026-12", "contract": "HD004", "months": null, "due": 16000000, "dueDate": "2026-12-05", "paidDate": null, "paid": null, "note": ""},
    {"id": "R047", "period": "2026-12", "contract": "HD006", "months": null, "due": 15000000, "dueDate": "2026-12-05", "paidDate": null, "paid": null, "note": ""}
  ],
  fees: [
    {"id": "F001", "period": "2026-04", "contract": "HD001", "due": 7684600, "dueDate": "2026-04-15", "paidDate": null, "paid": 7684600, "note": ""},
    {"id": "F002", "period": "2026-05", "contract": "HD001", "due": 7684600, "dueDate": "2026-05-15", "paidDate": null, "paid": 7684600, "note": ""},
    {"id": "F003", "period": "2026-05", "contract": "HD007", "due": 12824500, "dueDate": "2026-05-01", "paidDate": null, "paid": 12824500, "note": ""},
    {"id": "F004", "period": "2026-06", "contract": "HD001", "due": 7684600, "dueDate": "2026-06-15", "paidDate": null, "paid": 7684600, "note": ""},
    {"id": "F005", "period": "2026-06", "contract": "HD007", "due": 12824500, "dueDate": "2026-06-01", "paidDate": null, "paid": 12824500, "note": ""},
    {"id": "F006", "period": "2026-07", "contract": "HD001", "due": 7684600, "dueDate": "2026-07-15", "paidDate": null, "paid": 7684600, "note": ""},
    {"id": "F007", "period": "2026-07", "contract": "HD007", "due": 12824500, "dueDate": "2026-07-01", "paidDate": null, "paid": 12824500, "note": ""},
    {"id": "F008", "period": "2026-08", "contract": "HD001", "due": 7684600, "dueDate": "2026-08-15", "paidDate": null, "paid": null, "note": ""},
    {"id": "F009", "period": "2026-08", "contract": "HD007", "due": 12824500, "dueDate": "2026-08-01", "paidDate": null, "paid": null, "note": ""},
    {"id": "F010", "period": "2026-09", "contract": "HD001", "due": 7684600, "dueDate": "2026-09-15", "paidDate": null, "paid": null, "note": ""},
    {"id": "F011", "period": "2026-09", "contract": "HD007", "due": 12824500, "dueDate": "2026-09-01", "paidDate": null, "paid": null, "note": ""},
    {"id": "F012", "period": "2026-10", "contract": "HD001", "due": 7684600, "dueDate": "2026-10-15", "paidDate": null, "paid": null, "note": ""},
    {"id": "F013", "period": "2026-10", "contract": "HD007", "due": 12824500, "dueDate": "2026-10-01", "paidDate": null, "paid": null, "note": ""},
    {"id": "F014", "period": "2026-11", "contract": "HD001", "due": 7684600, "dueDate": "2026-11-15", "paidDate": null, "paid": null, "note": ""},
    {"id": "F015", "period": "2026-11", "contract": "HD007", "due": 12824500, "dueDate": "2026-11-01", "paidDate": null, "paid": null, "note": ""},
    {"id": "F016", "period": "2026-12", "contract": "HD001", "due": 7684600, "dueDate": "2026-12-15", "paidDate": null, "paid": null, "note": ""},
    {"id": "F017", "period": "2026-12", "contract": "HD007", "due": 12824500, "dueDate": "2026-12-01", "paidDate": null, "paid": null, "note": ""}
  ]
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = SEED;
  else root.SEED = SEED;
})(typeof window !== 'undefined' ? window : globalThis);
