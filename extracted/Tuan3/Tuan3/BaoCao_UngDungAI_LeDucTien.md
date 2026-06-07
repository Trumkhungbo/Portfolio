# BÁO CÁO CHI TIẾT: ỨNG DỤNG AI TRONG HỌC TẬP VÀ NGHIÊN CỨU KHOA HỌC
**Nhiệm vụ:** Thiết kế, Tối ưu hóa Mạng CNN và Biên soạn tài liệu học thuật với LaTeX
**Sinh viên thực hiện:** Lê Đức Tiến
**Trường:** Đại học Công nghệ (UET) - Đại học Quốc gia Hà Nội

---

## I. MỤC TIÊU VÀ LỰA CHỌN NHIỆM VỤ THỰC TẾ
Nhiệm vụ được chọn là xây dựng một hệ thống mạng thần kinh tích chập (Convolutional Neural Network - CNN) sử dụng thư viện PyTorch nhằm phân loại các tập dữ liệu hình ảnh, đồng thời thực hiện biên dịch và báo cáo kết quả bằng mã nguồn học thuật LaTeX. Đây là nhiệm vụ mang tính tích hợp cao, đòi hỏi cả tư duy logic toán học, kỹ năng kỹ nghệ phần mềm và năng lực trình bày khoa học nghiêm ngặt.

## II. KẾ HOẠCH PHỐI HỢP MULTI-AI (HUMAN-IN-THE-LOOP)
Quy trình làm việc không phụ thuộc vào một công cụ đơn lẻ mà xây dựng một hệ sinh thái phối hợp, trong đó con người giữ vai trò điều phối tối cao (Gatekeeper):
1. **Gemini**: Vai trò "Kiến trúc sư trưởng" - thiết kế cấu trúc mạng, giải thích thuật toán, phân tích logic lỗi sâu (Deep Debugging).
2. **Perplexity AI**: Vai trò "Trợ lý học thuật" - định vị các nghiên cứu khoa học uy tín về hàm tối ưu (Optimizers) và kỹ thuật tăng cường dữ liệu.
3. **GitHub Copilot / Cursor**: Vai trò "Kỹ sư thực thi" - tăng tốc độ gõ code boilerplate và hoàn thiện hàm kiểm thử thời gian thực.

## III. NHẬT KÝ THỰC HIỆN VÀ KHẮC PHỤC THÁCH THỨC
* **Prompt Sinh Mã Nguồn Ban Đầu (Áp dụng framework Role-Context-Task-Constraint):**
    * *Nội dung:* "Bạn là một AI Researcher chuyên nghiệp về Computer Vision. Hãy thiết kế một lớp mạng CNN bằng PyTorch gồm 3 tầng conv, tích hợp Batch Normalization và Dropout. Ràng buộc: Mã nguồn phải tường minh, có chú thích chi tiết bằng tiếng Việt và tuân thủ chuẩn PEP8."
* **Thách thức 1: Lỗi Tensor Dimension Mismatch**
    * *Mô tả:* Khi chạy luồng dữ liệu, hệ thống báo lỗi `RuntimeError: Expected 4D tensor as input, but got 3D tensor`.
    * *Xử lý cùng AI:* Đưa log lỗi vào Gemini. AI ngay lập tức phân tích lỗi do thiếu chiều Batch Size trong loader và đề xuất thêm `transforms.ToTensor()` kết hợp kiểm tra kích thước tensor đầu vào thông qua thuộc tính `.shape`.
* **Thách thức 2: Overfitting Nghiêm Trọng**
    * *Mô tả:* Độ chính xác tập Train đạt 98% nhưng Valid chỉ dừng ở 72% tại epoch 15.
    * *Xử lý cùng AI:* Sử dụng prompt phản biện nâng cao: "Mô hình đang bị quá khớp nghiêm trọng. Hãy đề xuất giải pháp điều chỉnh siêu tham số và chiến lược học tập (learning schedule) tối ưu mà không thay đổi cấu trúc phần cứng." AI đề xuất áp dụng `StepLR` scheduler để giảm learning rate theo chu kỳ và tăng cường độ Dropout từ 0.2 lên 0.5. Kết quả độ chính xác tập Valid tăng mạnh lên **81.5%**.

## IV. ĐÁNH GIÁ HIỆU QUẢ SỬ DỤNG AI
* **Về mặt Định lượng (Thời gian & Công sức):** Tiết kiệm tổng cộng khoảng 13.5 giờ làm việc (giảm từ 19 giờ xuống còn 5.5 giờ), tương đương hiệu suất tăng trưởng hơn **71%**.
* **Về mặt Định tính:** Sản phẩm đạt độ chuẩn hóa cao. Mã nguồn sạch, dễ bảo trì; báo cáo học thuật bằng LaTeX chuẩn cấu trúc IEEE, không mắc các lỗi diễn đạt lặp từ hay sai logic toán học.
* **Bài học cốt lõi:** AI có thể gặp hiện tượng "ảo tưởng" (Hallucination) khi gọi các hàm cũ đã bị loại bỏ trong các phiên bản thư viện mới. Vai trò kiểm duyệt và kiến thức nền tảng của con người là yếu tố quyết định sự thành bại của nghiên cứu.
