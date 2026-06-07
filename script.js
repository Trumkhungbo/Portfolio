/* ==========================================================================
   DIGITAL PORTFOLIO JAVASCRIPT - LE DUC TIEN
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------
    // 1. NAVIGATION LOGIC & TAB SWITCHING
    // ----------------------------------------------------
    const menuItems = document.querySelectorAll('.menu-item');
    const sections = document.querySelectorAll('.page-section');

    function switchSection(targetId) {
        // Deactivate all sections and menu items
        sections.forEach(sec => sec.classList.remove('active'));
        menuItems.forEach(item => item.classList.remove('active'));

        // Activate target section
        const targetSec = document.getElementById(targetId);
        if (targetSec) {
            targetSec.classList.add('active');
            
            // Sync with sidebar menu item
            const matchingMenu = document.querySelector(`.menu-item[data-target="${targetId}"]`);
            if (matchingMenu) {
                matchingMenu.classList.add('active');
            }

            // Trigger animations based on section
            if (targetId === 'sec-intro') {
                animateSkillsBars();
            }
        }
    }

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const target = item.getAttribute('data-target');
            switchSection(target);
            // On mobile, scroll to top when changing section
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Skill progress bars animation
    function animateSkillsBars() {
        const skillBars = document.querySelectorAll('.skill-bar-inner');
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        });
    }

    // Initialize first animation
    animateSkillsBars();


    // ----------------------------------------------------
    // 2. THEME SWITCHING (LIGHT / DARK)
    // ----------------------------------------------------
    const themeBtn = document.getElementById('theme-toggle-btn');
    const mobileThemeBtn = document.getElementById('mobile-theme-toggle');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    // Sun SVG Icon
    const sunSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
    // Moon SVG Icon
    const moonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

    function toggleTheme() {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        
        // Update both toggle button icons
        if (themeIcon) {
            themeIcon.innerHTML = isLight ? sunSvg : moonSvg;
        }
        
        // Save preference
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    }

    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);

    // Apply saved theme on load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeIcon) themeIcon.innerHTML = sunSvg;
    } else {
        if (themeIcon) themeIcon.innerHTML = moonSvg;
    }


    // ----------------------------------------------------
    // 3. TOAST NOTIFICATION UTILITY
    // ----------------------------------------------------
    const toast = document.getElementById('toast-notif');
    
    function showToast(message) {
        if (toast) {
            const span = toast.querySelector('span');
            if (span) span.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2500);
        }
    }


    // ----------------------------------------------------
    // 4. TUAN 1: INTERACTIVE FILE TREE & SCREENSHOTS
    // ----------------------------------------------------
    const t1Screenshots = [
        { id: 1, name: "{01A78AA3-71AD-410B-AFC6-F1F1453343EE}.png", title: "Cấu trúc thư mục tối ưu của Lê Đức Tiến", desc: "Ảnh chụp màn hình thể hiện thư mục gốc 'LeDucTien_25021981' chứa các thư mục bài tập phân cấp rõ ràng theo tuần học và quy tắc đặt tên thống nhất." },
        { id: 2, name: "{054A26C5-202A-4F07-8905-3BC45C9470B5}.png", title: "Phân quyền truy cập thư mục an toàn", desc: "Ảnh cấu hình thuộc tính Properties -> Security để phân quyền ghi, đọc, chỉnh sửa cho người dùng tương ứng." },
        { id: 3, name: "{1AB08D69-3130-447C-B958-CF151C694429}.png", title: "Cấu trúc thư mục chi tiết cấp 2", desc: "Ảnh chụp trực quan bên trong thư mục Tuan_1_FileManagement hiển thị các file báo cáo định dạng docx và tệp tin ảnh minh chứng đi kèm." },
        { id: 4, name: "{1C680D00-EB5F-4470-A4D5-1A5085D958B8}.png", title: "Thực hiện tìm kiếm nhanh tệp tin", desc: "Minh họa sử dụng công cụ Windows Search lọc tìm kiếm nhanh chóng các file bài tập qua từ khóa có điều kiện." },
        { id: 5, name: "{3427AEB5-2C00-4295-92D4-9B697F65817A}.png", title: "Tạo liên kết truy cập nhanh Shortcut", desc: "Thiết lập Shortcut trên màn hình nền giúp Tiến truy cập tức thì vào thư mục học tập chính chỉ với một cú đúp chuột." },
        { id: 6, name: "{4B30AFBF-4027-46A7-BDF4-D4F744335F5D}.png", title: "Thao tác sao chép file hệ thống", desc: "Minh chứng thao tác sao chép và di chuyển tệp tin báo cáo giữa các vùng lưu trữ tạm thời và vùng lưu trữ chính thức." },
        { id: 7, name: "{531CFDD5-174E-49C4-AF07-69D8764B2CB4}.png", title: "Đổi tên tệp tin hàng loạt theo chuẩn", desc: "Thực hiện cấu hình đổi tên file báo cáo tuần học một cách thống nhất để loại bỏ ký tự đặc biệt và dấu tiếng Việt." },
        { id: 8, name: "{5A139AA1-6BFE-4F0D-A37E-1D2099E85BBF}.png", title: "Nén tệp tin tối ưu dung lượng (.zip)", desc: "Tiến hành nén thư mục bài tập Tuần 1 sang dạng ZIP lưu trữ, kiểm tra các tùy chọn nén chất lượng cao." },
        { id: 9, name: "{A9537DF6-C924-4557-B1E2-5124B8BD25B0}.png", title: "Kiểm tra dung lượng tệp lưu trữ", desc: "Xem thuộc tính Properties của file ZIP nén để so sánh dung lượng thực tế trước và sau khi thực hiện tối ưu hóa tệp." },
        { id: 10, name: "{AE23661E-6075-44FB-B8CB-68FADC2464BA}.png", title: "Chia sẻ thư mục học tập qua mạng Lan", desc: "Cấu hình Properties -> Sharing để thiết lập quyền truy cập đọc/ghi qua mạng nội bộ cho các thành viên trong nhóm." },
        { id: 11, name: "{B1DA0536-1794-4FC4-8116-0CBAADA9EAFB}.png", title: "Xóa các tệp nháp rác an toàn", desc: "Minh họa thao tác xóa tệp tin rác tạm thời (temporary files) để giải phóng vùng nhớ đĩa đệm." },
        { id: 12, name: "{D122AFC7-0040-4DA8-828E-334F90B35846}.png", title: "Quản lý khôi phục Recycle Bin", desc: "Kiểm tra trạng thái Recycle Bin và thực hiện khôi phục (Restore) tệp tin bị xóa nhầm về đúng vị trí cũ." },
        { id: 13, name: "{E7B9607E-45A6-4A2A-8067-DBE21EDE091F}.png", title: "Quản lý file hệ thống ẩn", desc: "Bật chế độ hiển thị file ẩn (Show Hidden Files) trong File Explorer để giám sát các tệp tin cấu hình hệ thống." },
        { id: 14, name: "{FEEBCA71-8C52-412A-A605-827730EDD74A}.png", title: "Bảo vệ tệp tin bằng Read-only", desc: "Cài đặt thuộc tính Read-only cho tệp tin quy tắc ứng xử để chống chỉnh sửa dữ liệu trái phép." }
    ];

    // Build Thumbnail strip dynamically
    const thumbStrip = document.getElementById('tuan1-thumb-strip');
    const activeImg = document.getElementById('active-screenshot-img');
    const activeTitle = document.getElementById('active-screenshot-title');
    const activeDesc = document.getElementById('active-screenshot-desc');
    const viewerPlaceholder = document.getElementById('viewer-placeholder');
    const viewerDisplay = document.getElementById('viewer-display');

    if (thumbStrip) {
        t1Screenshots.forEach((shot, index) => {
            const thumb = document.createElement('div');
            thumb.className = `thumb-item ${index === 0 ? 'active' : ''}`;
            thumb.setAttribute('data-id', shot.id);
            thumb.innerHTML = `<img src="assets/tuan1/${shot.name}" alt="${shot.title}">`;
            
            thumb.addEventListener('click', () => {
                activateScreenshot(shot);
                document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
            
            thumbStrip.appendChild(thumb);
        });

        // Activate first screenshot on load
        activateScreenshot(t1Screenshots[0]);
    }

    function activateScreenshot(shot) {
        if (viewerPlaceholder && viewerDisplay && activeImg && activeTitle && activeDesc) {
            viewerPlaceholder.style.display = 'none';
            viewerDisplay.style.display = 'flex';
            activeImg.src = `assets/tuan1/${shot.name}`;
            activeTitle.textContent = shot.title;
            activeDesc.textContent = shot.desc;
        }
    }

    // Toggle File Tree Folders
    const folders = document.querySelectorAll('.tree-folder > .node-label');
    folders.forEach(folder => {
        folder.addEventListener('click', (e) => {
            const parentNode = folder.parentElement;
            parentNode.classList.toggle('expanded');
            
            // Toggle folder icon
            const iconSpan = folder.querySelector('.node-icon');
            if (iconSpan) {
                iconSpan.textContent = parentNode.classList.contains('expanded') ? '📁' : '📁';
            }
            e.stopPropagation();
        });
    });

    // File node clicks in tree
    const fileNodes = document.querySelectorAll('.tree-file');
    fileNodes.forEach(file => {
        file.addEventListener('click', (e) => {
            document.querySelectorAll('.node-label').forEach(n => n.classList.remove('active'));
            file.querySelector('.node-label').classList.add('active');
            
            const imgId = parseInt(file.getAttribute('data-image'), 10);
            
            // Match tree click with corresponding screenshot index
            let index = (imgId - 1) % t1Screenshots.length;
            if (index < 0 || isNaN(index)) index = 0;
            
            const matchedShot = t1Screenshots[index];
            activateScreenshot(matchedShot);
            
            // Sync active thumbnail in strip
            document.querySelectorAll('.thumb-item').forEach(t => {
                t.classList.remove('active');
                if (parseInt(t.getAttribute('data-id'), 10) === matchedShot.id) {
                    t.classList.add('active');
                }
            });
            
            e.stopPropagation();
        });
    });

    // Lightbox modal logic
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCap = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close-btn');
    const zoomImgContainer = document.getElementById('zoom-img-container');

    function openLightbox(src, caption) {
        if (lightboxModal && lightboxImg && lightboxCap) {
            lightboxImg.src = src;
            lightboxCap.textContent = caption;
            lightboxModal.style.display = 'flex';
        }
    }

    if (zoomImgContainer) {
        zoomImgContainer.addEventListener('click', () => {
            if (activeImg) {
                openLightbox(activeImg.src, activeTitle.textContent);
            }
        });
    }

    // Hook up other infographics for zoom lightbox
    const t5Infographic = document.getElementById('infographic-t5-wrap');
    if (t5Infographic) {
        t5Infographic.addEventListener('click', () => {
            const img = t5Infographic.querySelector('img');
            if (img) openLightbox(img.src, "Infographic: AI hỗ trợ học tập an toàn và hiệu quả");
        });
    }

    const t6Infographic = document.getElementById('infographic-t6-wrap');
    if (t6Infographic) {
        t6Infographic.addEventListener('click', () => {
            const img = t6Infographic.querySelector('img');
            if (img) openLightbox(img.src, "Infographic: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu");
        });
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            if (lightboxModal) lightboxModal.style.display = 'none';
        });
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                lightboxModal.style.display = 'none';
            }
        });
    }


    // ----------------------------------------------------
    // 5. TUAN 2: RENDER SOURCES TABLE & COPY CITATIONS
    // ----------------------------------------------------
    const t2Sources = [
        { stt: 1, author: "Saxe & Berlin (2015)", type: "Bài báo khoa học / arXiv", title: "Deep neural network based malware detection using two dimensional binary program features", desc: "Tác giả thuộc Invincea Labs; phương pháp dùng đặc trưng nhị phân và mạng học sâu; bài có ảnh hưởng sớm trong hướng deep learning cho malware; nguồn arXiv cần đối chiếu thêm vì chưa phải tạp chí phản biện truyền thống.", score: "4/5", rating: "Cao", citation: "Saxe, J. and Berlin, K. (2015) 'Deep neural network based malware detection using two dimensional binary program features', arXiv. Available at: https://arxiv.org/abs/1508.03096" },
        { stt: 2, author: "Raff et al. (2018)", type: "Bài báo khoa học / AAAI Workshop", title: "Malware detection by eating a whole EXE", desc: "Nhóm tác giả có nền tảng nghiên cứu ML bảo mật; phương pháp MalConv học trực tiếp từ byte của file PE; được trích dẫn rộng; phù hợp để hiểu hướng end-to-end nhưng cần lưu ý chi phí tính toán.", score: "5/5", rating: "Rất cao", citation: "Raff, E., Barker, J., Sylvester, J., Brandon, R., Catanzaro, B. and Nicholas, C.K. (2018) 'Malware detection by eating a whole EXE', Proceedings of the AAAI Workshop on Artificial Intelligence for Cyber Security. Available at: https://arxiv.org/abs/1710.09435" },
        { stt: 3, author: "Anderson & Roth (2018)", type: "Bài báo khoa học / Dataset", title: "EMBER: An Open Dataset for Training Static PE Malware Machine Learning Models", desc: "Tác giả đến từ Endgame; đóng góp bộ dữ liệu EMBER và baseline rõ ràng; phương pháp mô tả đặc trưng PE minh bạch; rất hữu ích cho tái lập và so sánh mô hình.", score: "5/5", rating: "Rất cao", citation: "Anderson, H.S. and Roth, P. (2018) 'EMBER: An Open Dataset for Training Static PE Malware Machine Learning Models', arXiv. Available at: https://arxiv.org/abs/1804.04637" },
        { stt: 4, author: "Arp et al. (2014)", type: "Bài báo khoa học / NDSS", title: "DREBIN: Effective and Explainable Detection of Android Malware in Your Pocket", desc: "NDSS là hội nghị bảo mật uy tín; bài có phương pháp rõ ràng và nhấn mạnh khả năng giải thích; dù tập trung Android, tiêu chí đặc trưng và đánh giá vẫn rất liên quan đến phát hiện mã độc.", score: "5/5", rating: "Rất cao", citation: "Arp, D., Spreitzenbarth, M., Hubner, M., Gascon, H., Rieck, K. and Siemens CERT (2014) 'DREBIN: Effective and Explainable Detection of Android Malware in Your Pocket', Network and Distributed System Security Symposium. Available at: https://www.ndss-symposium.org/ndss2014/programme/drebin-effective-and-explainable-detection-android-malware-your-pocket/" },
        { stt: 5, author: "Nataraj et al. (2011)", type: "Bài báo khoa học / VizSec", title: "Malware images: visualization and automatic classification", desc: "Bài giới thiệu cách biểu diễn mã độc dưới dạng ảnh để phân loại; phương pháp có tính sáng tạo và được dùng làm nền cho nhiều nghiên cứu CNN sau này; tính cập nhật trung bình vì công bố từ 2011.", score: "4/5", rating: "Cao", citation: "Nataraj, L., Karthikeyan, S., Jacob, G. and Manjunath, B.S. (2011) 'Malware images: visualization and automatic classification', Proceedings of the 8th International Symposium on Visualization for Cyber Security. Available at: https://dl.acm.org/doi/10.1145/2016904.2016908" },
        { stt: 6, author: "Yuan, Lu & Xue (2016)", type: "Tạp chí khoa học / IEEE TIFS", title: "DroidDetector: Android Malware Characterization and Detection Using Deep Learning", desc: "IEEE Transactions on Information Forensics and Security là tạp chí chuyên ngành uy tín; bài có phương pháp học sâu và đánh giá thực nghiệm; phù hợp để phân tích tiêu chí tác giả, phương pháp và trích dẫn.", score: "5/5", rating: "Rất cao", citation: "Yuan, Z., Lu, Y. and Xue, Y. (2016) 'DroidDetector: Android Malware Characterization and Detection Using Deep Learning', IEEE Transactions on Information Forensics and Security, 11(6), pp. 1140-1154. Available at: https://doi.org/10.1109/TIFS.2016.2514541" },
        { stt: 7, author: "Sikorski & Honig (2012)", type: "Sách chuyên khảo", title: "Practical Malware Analysis: The Hands-On Guide to Dissecting Malicious Software", desc: "Sách của No Starch Press được dùng rộng rãi trong đào tạo phân tích mã độc; không phải nghiên cứu học sâu nhưng rất đáng tin cho nền tảng khái niệm, quy trình phân tích tĩnh và động.", score: "4/5", rating: "Cao", citation: "Sikorski, M. and Honig, A. (2012) Practical Malware Analysis: The Hands-On Guide to Dissecting Malicious Software. San Francisco: No Starch Press." },
        { stt: 8, author: "Goodfellow et al. (2016)", type: "Sách chuyên khảo", title: "Deep Learning", desc: "Sách nền tảng về deep learning, tác giả là các nhà nghiên cứu hàng đầu; phù hợp để giải thích CNN, RNN, biểu diễn đặc trưng và overfitting; không chuyên về malware nên dùng làm nền lý thuyết.", score: "5/5", rating: "Rất cao", citation: "Goodfellow, I., Bengio, Y. and Courville, A. (2016) Deep Learning. Cambridge, MA: MIT Press. Available at: https://www.deeplearningbook.org/" },
        { stt: 9, author: "Elastic (2024)", type: "Nguồn mở / Dataset", title: "EMBER dataset repository", desc: "Kho GitHub chính thức giúp kiểm tra dữ liệu, mã nguồn và cách trích xuất đặc trưng; có tính minh bạch cao nhưng cần dùng cùng bài báo gốc để đảm bảo bối cảnh học thuật.", score: "4/5", rating: "Cao", citation: "Elastic (2024) EMBER: Endgame Malware BEnchmark for Research. Available at: https://github.com/elastic/ember" },
        { stt: 10, author: "MITRE ATT&CK (2025)", type: "Nguồn mở / Knowledge base", title: "MITRE ATT&CK Enterprise Matrix", desc: "MITRE là tổ chức uy tín trong an ninh mạng; ATT&CK cung cấp tri thức cập nhật về kỹ thuật tấn công; không phải bài báo nhưng hữu ích để liên hệ phát hiện mã độc với hành vi thực tế.", score: "4/5", rating: "Cao", citation: "MITRE (2025) MITRE ATT&CK Enterprise Matrix. Available at: https://attack.mitre.org/" }
    ];

    const sourcesTableBody = document.querySelector('#tuan2-sources-table tbody');
    if (sourcesTableBody) {
        t2Sources.forEach(src => {
            const tr = document.createElement('tr');
            
            const isVeryHigh = src.rating === 'Rất cao';
            const badgeClass = isVeryHigh ? 'very-high' : 'high';
            
            tr.innerHTML = `
                <td style="text-align: center; font-weight: 700; color: var(--text-muted);">${src.stt}</td>
                <td>
                    <strong style="color: var(--text-main); font-size: 0.9rem;">${src.author}</strong>
                    <div style="font-size: 0.75rem; color: var(--text-muted); font-style: italic; margin-top: 0.2rem;">${src.title}</div>
                </td>
                <td><span style="font-size: 0.75rem; font-weight: 600; color: var(--primary);">${src.type}</span></td>
                <td style="color: var(--text-muted); font-size: 0.8rem;">${src.desc}</td>
                <td style="text-align: center;"><span class="score-badge">${src.score}</span></td>
                <td style="text-align: center;"><span class="rank-badge ${badgeClass}">${src.rating}</span></td>
                <td style="text-align: center;">
                    <button class="cite-btn" data-citation="${src.citation}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                        Copy
                    </button>
                </td>
            `;
            sourcesTableBody.appendChild(tr);
        });

        // Copy Citation Event Listeners
        const copyBtns = document.querySelectorAll('.cite-btn');
        copyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const textToCopy = btn.getAttribute('data-citation');
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast("Đã sao chép trích dẫn Harvard!");
                }).catch(err => {
                    console.error('Lỗi khi sao chép: ', err);
                });
            });
        });
    }


    // ----------------------------------------------------
    // 6. TUAN 3: IDE CODE VIEW & SOURCE CODES
    // ----------------------------------------------------
    const pythonCode = `import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import DataLoader
from torchvision import datasets, transforms

# Định nghĩa kiến trúc mạng CNN 3 tầng phân loại hình ảnh (AdvancedCNN)
class AdvancedCNN(nn.Module):
    def __init__(self, num_classes=10):
        super(AdvancedCNN, self).__init__()
        self.features = nn.Sequential(
            # Khối tích chập 1
            nn.Conv2d(3, 32, kernel_size=3, padding=1),
            nn.BatchNorm2d(32),
            nn.ReLU(),
            nn.MaxPool2d(kernel_size=2, stride=2),
            
            # Khối tích chập 2
            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(),
            nn.MaxPool2d(kernel_size=2, stride=2),
            
            # Khối tích chập 3
            nn.Conv2d(64, 128, kernel_size=3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(),
            nn.MaxPool2d(kernel_size=2, stride=2)
        )
        self.classifier = nn.Sequential(
            nn.Linear(128 * 4 * 4, 512), # Giả sử kích thước ảnh là 32x32 (ví dụ: CIFAR-10)
            nn.ReLU(),
            nn.Dropout(p=0.5), # Giải pháp chống Overfitting gợi ý bởi Gemini
            nn.Linear(512, num_classes)
        )

    def forward(self, x):
        x = self.features(x)
        x = x.view(x.size(0), -1) # Phẳng hóa tensor đặc trưng
        x = self.classifier(x)
        return x

def train_model(model, train_loader, criterion, optimizer, scheduler, device, epochs=15):
    model.train()
    for epoch in range(epochs):
        running_loss = 0.0
        correct = 0
        total = 0
        for images, labels in train_loader:
            images, labels = images.to(device), labels.to(device)
            
            # Khởi tạo lại gradient
            optimizer.zero_grad()
            
            # Lan truyền xuôi (Forward pass)
            outputs = model(images)
            loss = criterion(outputs, labels)
            
            # Lan truyền ngược và tối ưu (Backward pass & Optimize)
            loss.backward()
            optimizer.step()
            
            running_loss += loss.item() * images.size(0)
            _, predicted = outputs.max(1)
            total += labels.size(0)
            correct += predicted.eq(labels).sum().item()
            
        scheduler.step() # Bộ điều phối tốc độ học (StepLR decay)
        epoch_loss = running_loss / total
        epoch_acc = 100. * correct / total
        print(f"Epoch [{epoch+1}/{epochs}] - Loss: {epoch_loss:.4f} - Accuracy: {epoch_acc:.2f}%")

if __name__ == '__main__':
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = AdvancedCNN(num_classes=10).to(device)
    
    criterion = nn.CrossEntropyLoss()
    optimizer = optim.Adam(model.parameters(), lr=0.001)
    # Gợi ý tối ưu từ AI: Giảm learning rate đi một nửa sau mỗi 5 epochs
    scheduler = optim.lr_scheduler.StepLR(optimizer, step_size=5, gamma=0.5)
    
    print("Mô hình đã được khởi tạo thành công chuẩn bị cho quá trình huấn luyện.")`;

    const latexCode = `\\documentclass[11pt,a4paper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[vietnamese]{babel}
\\usepackage{amsmath}
\\usepackage{graphicx}
\\usepackage{booktabs}
\\usepackage{hyperref}

\\title{\\textbf{Báo cáo Nghiên cứu: Ứng dụng Trí tuệ Nhân tạo trong Tối ưu hóa Quy trình Huấn luyện Mạng Thần kinh Tích chập}}
\\author{\\textbf{Lê Đức Tiến} \\\\ Trường Đại học Công nghệ (UET) -- ĐHQGHN}
\\date{\\today}

\\begin{document}

\\maketitle

\\begin{abstract}
Bài báo cáo này trình bày quy trình ứng dụng hệ sinh thái Multi-AI (Gemini, Perplexity, GitHub Copilot) hỗ trợ xây dựng và tối ưu hóa mô hình học sâu CNN phân loại hình ảnh. Kết quả cho thấy việc áp dụng AI theo mô hình Human-in-the-loop giúp tiết kiệm hơn 70\\% thời gian lập trình và viết báo cáo khoa học, đồng thời cải thiện độ chính xác của mô hình nhờ các chiến lược xử lý overfitting tối ưu do trợ lý trí tuệ nhân tạo đề xuất.
\\end{abstract}

\\section{Đặt vấn đề \\& Mục tiêu nghiên cứu}
Xây dựng các kiến trúc mạng thần kinh tích chập (CNN) đòi hỏi việc tối ưu hóa đồng thời cấu trúc tầng (layer configuration) và các siêu tham số (hyperparameters). Nhiệm vụ học tập được lựa chọn là thiết lập một pipeline hoàn chỉnh từ xử lý dữ liệu, xây dựng mạng CNN bằng PyTorch và biên soạn tài liệu học thuật bằng \\LaTeX{}. Mục tiêu cốt lõi là kiểm chứng năng lực của AI trong việc đẩy nhanh tiến độ nghiên cứu và nâng cao chất lượng mã nguồn.

\\section{Phương pháp và Kế hoạch Phối hợp Multi-AI}
Chúng tôi thiết lập một quy trình làm việc khép kín kết hợp giữa năng lực định hướng của con người và khả năng sinh mã, tìm kiếm thông tin của AI:
\\begin{itemize}
    \\item \\textbf{Kiến trúc sư trưởng (Gemini):} Chịu trách nhiệm thiết kế khung cấu trúc tầng và đề xuất giải pháp xử lý lỗi hệ thống.
    \\item \\textbf{Thư viện trưởng (Perplexity AI):} Tổng hợp các bài báo khoa học liên quan đến cấu trúc điều hướng tốc độ học tập (learning rate decay).
    \\item \\textbf{Trợ lý Copilot:} Tối ưu hóa cú pháp và tự động viết các đoạn code boilerplate trong IDE.
\\end{itemize}

\\section{Kết quả Thực nghiệm \\& Đánh giá}
Mô hình sau khi được áp dụng kỹ thuật Dropout ($p=0.5$) và StepLR do AI gợi ý đã giải quyết triệt để hiện tượng Overfitting, nâng độ chính xác trên tập kiểm thử (validation set) từ 72\\% lên 81.5\\%.

\\begin{table}[htbp]
  \\centering
  \\caption{So sánh thời gian hoàn thành nhiệm vụ giữa hai phương pháp}
    \\begin{tabular}{lccc}
    \\toprule
    \\textbf{Giai đoạn thực hiện} & \\textbf{Truyền thống (giờ)} & \\textbf{Kết hợp AI (giờ)} & \\textbf{Hiệu suất tăng} \\\\
    \\midrule
    Thiết kế \\& Lập trình Code & 8.0 & 2.0 & 75\\% \\\\
    Tra cứu tài liệu khoa học   & 5.0 & 1.5 & 70\\% \\\\
    Soạn thảo báo cáo \\LaTeX{} & 6.0 & 2.0 & 66\\% \\\\
    \\bottomrule
    \\end{tabular}
  \\label{tab:performance}
\\end{table}

\\section{Kết luận}
Sự kết hợp thông minh giữa con người và AI mở ra phương pháp tiếp cận học tập hiện đại, giúp sinh viên tập trung vào tư duy thuật toán cốt lõi thay vì tiêu tốn thời gian vào các lỗi cú pháp thông thường.

\\end{document}`;

    // Helper to format/escape HTML inside code blocks
    function escapeHtml(text) {
        return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    const pyBlock = document.getElementById('code-python');
    const texBlock = document.getElementById('code-latex');

    if (pyBlock && texBlock) {
        // Highlighting keywords with simple regex inside code blocks for aesthetic style
        let formattedPy = escapeHtml(pythonCode);
        // Basic keywords
        formattedPy = formattedPy.replace(/\b(import|from|class|def|return|if|__main__|in|for|and|else)\b/g, '<span class="code-keyword">$1</span>');
        // Comments
        formattedPy = formattedPy.replace(/(#.*)/g, '<span class="code-comment">$1</span>');
        // Class names
        formattedPy = formattedPy.replace(/\b(nn\.Module|AdvancedCNN|CrossEntropyLoss|Adam|StepLR)\b/g, '<span class="code-class">$1</span>');
        
        pyBlock.innerHTML = formattedPy;

        let formattedTex = escapeHtml(latexCode);
        // LaTeX tags
        formattedTex = formattedTex.replace(/(\\documentstyle|\\documentclass|\\usepackage|\\title|\\author|\\date|\\begin|\\end|\\maketitle|\\section|\\subsection|\\begin|\\end|\\caption|\\label|\\toprule|\\midrule|\\bottomrule|\\maketitle)/g, '<span class="code-keyword">$1</span>');
        // LaTeX comments
        formattedTex = formattedTex.replace(/(%.*)/g, '<span class="code-comment">$1</span>');

        texBlock.innerHTML = formattedTex;
    }

    // Code Tab switching
    const codeTabBtns = document.querySelectorAll('.tuan3-tab-btn');
    const editorFilename = document.getElementById('editor-filename');
    const codeBlocks = document.querySelectorAll('.code-block');

    codeTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetType = btn.getAttribute('data-code');
            
            codeTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            codeBlocks.forEach(block => block.classList.remove('active'));
            
            if (targetType === 'python') {
                if (pyBlock) pyBlock.classList.add('active');
                if (editorFilename) editorFilename.textContent = 'cnn_classifier.py';
            } else {
                if (texBlock) texBlock.classList.add('active');
                if (editorFilename) editorFilename.textContent = 'BaoCao_Academic.tex';
            }
        });
    });

    // Code Copy Event Listener
    const copyCodeBtn = document.getElementById('copy-code-btn');
    if (copyCodeBtn) {
        copyCodeBtn.addEventListener('click', () => {
            const activeBlock = document.querySelector('.code-block.active');
            if (activeBlock) {
                // Get innerText instead of innerHTML to avoid html markup tags
                navigator.clipboard.writeText(activeBlock.innerText).then(() => {
                    showToast("Đã sao chép mã nguồn vào bộ nhớ đệm!");
                }).catch(err => {
                    console.error('Lỗi sao chép: ', err);
                });
            }
        });
    }


    // ----------------------------------------------------
    // 7. TUAN 4: KANBAN BOARD & TIMELINE
    // ----------------------------------------------------
    const kanbanTasks = [
        { id: 1, title: "Lập kế hoạch & phân chia", col: "done", role: "Trưởng nhóm", tags: ["pm"], desc: "Thống nhất chủ đề 'Xây dựng ứng dụng quản lý chi tiêu cho sinh viên', phân chia trách nhiệm cụ thể và thời gian hoàn thành (Giao Tiến theo dõi Drive, Trello)." },
        { id: 2, title: "Tạo bảng Trello theo dõi", col: "done", role: "Tiến", tags: ["pm"], desc: "Thiết lập không gian làm việc Trello chung cho nhóm, tạo cột việc (To do, Doing, Review, Done) và gán nhãn độ ưu tiên." },
        { id: 3, title: "Tạo cấu trúc Google Drive", col: "done", role: "Tiến", tags: ["storage"], desc: "Thiết lập cấu trúc thư mục tối ưu trên Drive để tránh thất lạc file: /Tài_liệu_tham_khảo, /Nội_dung_viết, /Slide_thuyết_trình, /Bản_hoàn_thiện." },
        { id: 4, title: "Viết phần nhu cầu & tính năng", col: "done", role: "Tiến", tags: ["content"], desc: "Phác thảo chi tiết nhu cầu tài chính sinh viên và đề xuất các tính năng cốt lõi (Ghi chép giao dịch, Hạn mức chi tiêu, Báo cáo trực quan)." },
        { id: 5, title: "Chỉnh sửa cộng tác Docs", col: "done", role: "Tiến", tags: ["content"], desc: "Chỉnh sửa trực tiếp trên tài liệu Google Docs chung, trả lời các bình luận phản biện từ các thành viên khác và tối ưu hóa độ dài nội dung." },
        { id: 6, title: "Kiểm tra & Chuẩn hóa Drive", col: "done", role: "Tiến", tags: ["storage"], desc: "Rà soát lại toàn bộ tệp tin trên Drive của nhóm, đổi tên tệp tin đồng bộ theo chuẩn đặt tên disallow dấu và phân quyền đọc/ghi." },
        { id: 7, title: "Nhắn tin cập nhật Discord", col: "done", role: "Tiến", tags: ["comms"], desc: "Duy trì trao đổi tiến độ liên tục, gửi link tài liệu bản nháp và thống nhất thời hạn chốt nội dung qua kênh chat Discord của nhóm." },
        { id: 8, title: "Hoàn thiện báo cáo cá nhân", col: "done", role: "Tiến", tags: ["content"], desc: "Tổng hợp toàn bộ minh chứng ảnh chụp, lập bảng đánh giá các công cụ và viết tài liệu báo cáo cá nhân nộp tuần 4." }
    ];

    const timelineDays = [
        { day: 1, title: "Ngày 1: Họp Khởi Động", content: "Thống nhất chủ đề giới thiệu ứng dụng quản lý chi tiêu. Phân công nhiệm vụ cụ thể cho từng thành viên. Tiến lập tài khoản, liên kết vào Trello, Drive nhóm." },
        { day: 2, title: "Ngày 2: Lập Kế Hoạch & Thiết lập", content: "Tiến tạo thẻ việc trên Trello cá nhân và đặt hạn chốt. Thiết lập cây thư mục chứa tài nguyên của nhóm trên Google Drive theo quy tắc thống nhất." },
        { day: 3, title: "Ngày 3: Soạn Thảo Nội Dung", content: "Bắt đầu viết phần Nhu cầu thực tế của sinh viên và các tính năng chính lên Google Docs. Hỏi ý kiến nhóm về độ dài bài qua kênh Discord." },
        { day: 4, title: "Ngày 4: Nhận Góp Ý & Chỉnh Sửa", content: "Nhóm phản hồi bài viết trên Docs. Tiến chỉnh sửa trực tiếp, thay đổi từ ngữ ngắn gọn hơn và chuyển trạng thái thẻ Trello sang Review." },
        { day: 5, title: "Ngày 5: Tổ Chức Lưu Trữ", content: "Rà soát toàn bộ tệp của nhóm trên Google Drive. Tiến hành đổi tên tệp tin chưa đồng bộ, thiết lập chia sẻ để chạy thử bản slide nháp." },
        { day: 6, title: "Ngày 6: Hoàn Tất Nhiệm Vụ", content: "Thực hiện chỉnh sửa lần cuối bài viết. Tiến chuyển thẻ việc Trello sang Done. Xuất các ảnh chụp màn hình minh chứng quá trình phối hợp." },
        { day: 7, title: "Ngày 7: Viết Báo Cáo Cá Nhân", content: "Tự đánh giá hiệu quả phối hợp của 4 công cụ (Trello, Docs, Drive, Discord), đúc kết bài học làm việc nhóm và hoàn thiện tài liệu nộp." }
    ];

    const kanbanBoardContainer = document.getElementById('kanban-board-container');
    const kanbanModal = document.getElementById('kanban-modal');
    const kCloseBtn = document.getElementById('kanban-close-btn');
    const kModalTitle = document.getElementById('k-modal-title');
    const kModalCol = document.getElementById('k-modal-col');
    const kModalRole = document.getElementById('k-modal-role');
    const kModalDesc = document.getElementById('k-modal-desc');

    if (kanbanBoardContainer) {
        const columns = [
            { id: "todo", title: "Cần làm", class: "todo" },
            { id: "doing", title: "Đang làm", class: "doing" },
            { id: "review", title: "Kiểm tra", class: "review" },
            { id: "done", title: "Hoàn thành", class: "done" }
        ];

        // Render columns
        columns.forEach(col => {
            const colDiv = document.createElement('div');
            colDiv.className = 'kanban-col';
            colDiv.id = `kanban-col-${col.id}`;
            
            const colTasks = kanbanTasks.filter(t => t.col === col.id);
            
            colDiv.innerHTML = `
                <div class="kanban-col-header">
                    <span class="kanban-col-title">${col.title}</span>
                    <span class="kanban-col-count">${colTasks.length}</span>
                </div>
                <div class="kanban-cards" id="cards-${col.id}"></div>
            `;
            kanbanBoardContainer.appendChild(colDiv);
            
            const cardsContainer = colDiv.querySelector(`#cards-${col.id}`);
            colTasks.forEach(task => {
                const card = document.createElement('div');
                card.className = 'kanban-card';
                card.innerHTML = `
                    <div class="kanban-card-tags">
                        ${task.tags.map(t => `<span class="kanban-tag ${t}">${t.toUpperCase()}</span>`).join('')}
                    </div>
                    <div class="kanban-card-title">${task.title}</div>
                    <div class="kanban-card-footer">
                        <span style="font-size: 0.7rem;">Giao: <strong>${task.role}</strong></span>
                        <div class="kanban-card-assignee">${task.role[0]}</div>
                    </div>
                `;
                
                card.addEventListener('click', () => {
                    openKanbanCard(task);
                });
                
                cardsContainer.appendChild(card);
            });
        });
    }

    function openKanbanCard(task) {
        if (kanbanModal && kModalTitle && kModalCol && kModalRole && kModalDesc) {
            kModalTitle.textContent = task.title;
            
            let statusText = "Hoàn thành";
            if (task.col === 'todo') statusText = 'Cần làm';
            if (task.col === 'doing') statusText = 'Đang làm';
            if (task.col === 'review') statusText = 'Kiểm tra';
            
            kModalCol.textContent = statusText;
            kModalRole.textContent = task.role;
            kModalDesc.textContent = task.desc;
            kanbanModal.style.display = 'flex';
        }
    }

    if (kCloseBtn) {
        kCloseBtn.addEventListener('click', () => {
            if (kanbanModal) kanbanModal.style.display = 'none';
        });
    }

    if (kanbanModal) {
        kanbanModal.addEventListener('click', (e) => {
            if (e.target === kanbanModal) {
                kanbanModal.style.display = 'none';
            }
        });
    }

    // Timeline logic
    const timelineMilestones = document.getElementById('timeline-milestones');
    const progressBar = document.getElementById('timeline-progress-bar');
    const tlTitle = document.getElementById('timeline-title');
    const tlContent = document.getElementById('timeline-content');

    if (timelineMilestones) {
        timelineDays.forEach((dayData, index) => {
            const milestone = document.createElement('div');
            milestone.className = `timeline-item ${index === 0 ? 'active' : ''}`;
            milestone.setAttribute('data-day', dayData.day);
            milestone.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-label">N${dayData.day}</div>
            `;
            
            milestone.addEventListener('click', () => {
                document.querySelectorAll('.timeline-item').forEach(m => m.classList.remove('active'));
                milestone.classList.add('active');
                
                // Update detail text
                if (tlTitle) tlTitle.textContent = dayData.title;
                if (tlContent) tlContent.textContent = dayData.content;
                
                // Update progress bar width
                const progressWidth = (index / (timelineDays.length - 1)) * 100;
                if (progressBar) progressBar.style.width = `${progressWidth}%`;
            });
            
            timelineMilestones.appendChild(milestone);
        });

        // Initialize progress bar at 0%
        if (progressBar) progressBar.style.width = '0%';
    }


    // ----------------------------------------------------
    // 8. TUAN 6: POLICIES SWITCH & ETHICS CHECKBOXES
    // ----------------------------------------------------
    const policyTabBtns = document.querySelectorAll('.policy-tab-btn');
    const policyContents = document.querySelectorAll('.policy-content');

    policyTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetPolicy = btn.getAttribute('data-policy');
            
            policyTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            policyContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `policy-${targetPolicy}`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Checklist logic
    const rulesCheckboxes = document.querySelectorAll('.rules-checklist input[type="checkbox"]');
    const integrityBadgeContainer = document.getElementById('integrity-badge-container');

    rulesCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const li = checkbox.closest('li');
            if (checkbox.checked) {
                if (li) li.classList.add('checked');
            } else {
                if (li) li.classList.remove('checked');
            }

            // Check if all are checked
            const allChecked = Array.from(rulesCheckboxes).every(cb => cb.checked);
            if (allChecked) {
                if (integrityBadgeContainer) integrityBadgeContainer.classList.add('show');
                showToast("Cảm ơn sự cam kết liêm chính học thuật của bạn!");
            } else {
                if (integrityBadgeContainer) integrityBadgeContainer.classList.remove('show');
            }
        });
    });

});
