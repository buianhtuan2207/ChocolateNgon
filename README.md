# 🍫 SocolaShop – Website Thương Mại Điện Tử Socola Cao Cấp

Chào mừng bạn đến với **SocolaShop** – dự án website thương mại điện tử chuyên cung cấp các dòng **socola cao cấp, nguyên chất và nhập khẩu**.  
Dự án được xây dựng với mục tiêu mang lại **trải nghiệm mua sắm ngọt ngào**, giao diện **hiện đại**, **thân thiện** và dễ mở rộng trong tương lai.

> *“Mỗi thanh chocolate là một tác phẩm nghệ thuật – làm thủ công, nguyên chất 100%.”*

---

## 🌟 Giới thiệu

**SocolaShop** không chỉ đơn thuần là một website bán hàng, mà còn là nơi tôn vinh **nghệ thuật chế tác socola**.  
Ứng dụng tập trung mạnh vào trải nghiệm người dùng (UX/UI) với:

- Tìm kiếm sản phẩm nhanh chóng
- Bộ lọc chi tiết và trực quan
- Giao diện responsive, hiển thị đẹp trên mọi thiết bị

---

## 🛠 Công nghệ sử dụng (Tech Stack)

Dự án được xây dựng bằng các công nghệ Frontend hiện đại:

- **Core:** React 19 + TypeScript  
- **Build Tool:** Create React App (CRA)  
- **Styling:**
  - Bootstrap 5 (Layout & Components)
  - SASS / SCSS (Custom Styling)
- **Routing:** React Router DOM v7  
- **Icons:**
  - FontAwesome
  - Lucide React

---

## 🚀 Tính năng chính

- **Trang chủ (Home):**
  - Banner khuyến mãi nổi bật
  - Hiển thị sản phẩm tiêu biểu
  - Giới thiệu các điểm mạnh của thương hiệu

- **Trang danh sách sản phẩm (Products Page):**
  - Hiển thị sản phẩm dạng lưới (grid)
  - Thông tin đầy đủ: hình ảnh, giá, đánh giá
  - **Bộ lọc nâng cao (Sidebar Filter):**
    - Danh mục sản phẩm
    - Hương vị (Socola đen, sữa, matcha…)
    - Hình thức (Thanh, hộp quà, viên)
  - **Sắp xếp:** Giá tăng/giảm, sản phẩm mới nhất
  - **Phân trang:** Dễ dàng điều hướng giữa các trang

- **Tìm kiếm nhanh:** Thanh tìm kiếm đặt ngay trên Header
- **Responsive Design:** Tương thích Desktop, Tablet và Mobile
- **UI Components tái sử dụng:**
  - Button, CardProduct, InputField, Modal…
  - Thiết kế theo tư duy **Atomic Design** giúp dễ bảo trì và mở rộng

---

## 📂 Cấu trúc thư mục

src/
├── components/        # Các UI component tái sử dụng
│   ├── Banner/        # Banner quảng cáo
│   ├── Button/        # Các loại nút bấm
│   ├── CardProduct/   # Thẻ hiển thị sản phẩm
│   ├── FilterWidget/  # Bộ lọc sản phẩm
│   ├── Layout/        # Layout chung (Header, Footer)
│   └── ...
├── data/              # Dữ liệu mẫu (Mock data)
│   └── products.ts
├── pages/             # Các trang chính
│   ├── Home/
│   └── Product/
├── routes/            # Cấu hình định tuyến
├── App.tsx            # Component gốc
└── index.tsx          # Điểm khởi chạy ứng dụng

## 📦 Cài đặt & Chạy Dự Án

### 🔧 Yêu cầu
- **Node.js** (khuyến nghị phiên bản **LTS**)

---

### 1️⃣ Clone dự án

git clone https://github.com/username/chocolate-ngon.git
cd chocolate-ngon

### 2️⃣ Cài đặt dependencies

npm install

### 3️⃣ Chạy ở chế độ phát triển (Development)

npm start

---

## 📌 Ghi chú

- Dự án sử dụng **mock data**, chưa kết nối backend
- Phù hợp làm **đồ án Frontend / React / UI-UX**
- Dễ dàng mở rộng để tích hợp **API** và **thanh toán trực tuyến** trong tương lai

---

✨ **Cảm ơn bạn đã ghé thăm SocolaShop!**  
Nếu thấy dự án hữu ích, đừng quên ⭐ repository nhé!

---
