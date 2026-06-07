# Digital Portfolio - Lê Đức Tiến (UET-VNU)

Chào mừng bạn đến với trang **Digital Portfolio (Portfolio Kỹ thuật số)** cá nhân của sinh viên **Lê Đức Tiến**, lớp **K70i - cs6 - cn8**, Trường **Đại học Công nghệ (UET) - Đại học Quốc gia Hà Nội**.

Dự án này là sản phẩm tổng hợp toàn bộ các kết quả bài tập thành phần (từ tuần 1 đến tuần 6) của môn học **"Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo"** với phong cách thiết kế hiện đại, tương tác động phong phú.

---

## 🌟 Các tính năng nổi bật của Portfolio

- **Giao diện Glassmorphism cao cấp**: Hỗ trợ chuyển đổi chế độ tối/sáng (Dark/Light mode) mượt mà.
- **Cấu trúc Thư mục Tương tác (Tuần 1)**: Cây thư mục động (Interactive File Tree) giúp người xem nhấp chọn tệp tin `.png` để mở trực tiếp ảnh minh chứng hoạt động tương ứng kèm mô tả.
- **Thư viện phóng to hình ảnh (Lightbox)**: Nhấp chuột để phóng to các ảnh minh chứng hoặc Infographic chất lượng cao.
- **Bảng nguồn học thuật (Tuần 2)**: Bảng chấm điểm 10 tài liệu tham khảo theo chuẩn khoa học kèm nút sao chép nhanh trích dẫn chuẩn **Harvard**.
- **Trình xem code tích hợp (Tuần 3)**: Trình xem mã nguồn dạng IDE chuyên nghiệp hỗ trợ chuyển đổi giữa file code PyTorch CNN (`cnn_classifier.py`) và mã nguồn báo cáo LaTeX (`BaoCao_Academic.tex`).
- **Kanban Board dự án (Tuần 4)**: Trực quan hóa tiến trình công việc nhóm (To Do, Doing, Review, Done) mô tả các thẻ nhiệm vụ Tiến phụ trách.
- **Dòng thời gian tương tác (Tuần 4)**: Cột mốc 7 ngày làm việc của dự án nhóm.
- **Đạo đức và Liêm chính AI (Tuần 6)**: Nghiên cứu chính sách AI của UEH, VinUni, RMIT và tích hợp Bộ 6 nguyên tắc đạo đức cá nhân có thể tương tác (Checklist).
- **Trung tâm tải về**: Cho phép người xem tải trực tiếp các tệp tin ZIP nộp bài gốc từ tuần 1 đến tuần 6.

---

## 🛠️ Hướng dẫn Khởi chạy cục bộ (Local Run)

Bạn có thể chạy thử nghiệm trang web trên máy tính theo các cách sau:

### Cách 1: Sử dụng Node.js & NPM (Khuyên dùng)
1. Mở dòng lệnh (Terminal) tại thư mục chứa dự án.
2. Cài đặt các thư viện cần thiết:
   ```bash
   npm install
   ```
3. Khởi động máy chủ phát triển cục bộ:
   ```bash
   npm start
   ```
   (hoặc `npm run dev`)
4. Mở trình duyệt và truy cập vào địa chỉ: [http://localhost:8000](http://localhost:8000)

### Cách 2: Sử dụng Python
1. Mở terminal tại thư mục chứa dự án và chạy:
   ```bash
   python -m http.server 8000
   ```
2. Mở trình duyệt và truy cập địa chỉ: [http://localhost:8000](http://localhost:8000)
