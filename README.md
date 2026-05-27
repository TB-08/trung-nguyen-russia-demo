# Trung Nguyên Legend - Demo thị trường Nga

Website demo đa trang dành cho định hướng thương hiệu Trung Nguyên Legend tại thị trường Nga. Dự án tập trung vào nhận biết thương hiệu, giới thiệu danh mục cà phê Việt Nam, luồng tìm điểm bán và chuyển đổi đối tác phân phối.

**Bản demo hiện dùng tiếng Việt, cấu trúc sẵn sàng để localization sang tiếng Nga.**

## Cách chạy

1. Mở trực tiếp file `index.html` trong trình duyệt.
2. Hoặc mở thư mục dự án bằng VS Code và chạy `index.html` với Live Server.

Website dùng HTML, CSS và JavaScript thuần; không cần cài đặt gói, không cần backend và không gọi API thật.

## Trang chính

- `index.html`: Trang chủ, giới thiệu thương hiệu, sản phẩm nổi bật, điểm bán và hợp tác.
- `about.html`: Hồ sơ thương hiệu, tầm nhìn, triết lý và hành trình.
- `products.html`: Catalog với bộ lọc danh mục và nhu cầu.
- `product-detail.html?slug=g7-3in1`: Chi tiết sản phẩm render bằng dữ liệu JavaScript.
- `coffee-story.html`: Buôn Ma Thuột, Robusta, quy trình và Coffee Tao.
- `partners.html`: Trang đối tác/NPP và biểu mẫu B2B.
- `where-to-buy.html`: Tìm điểm bán với Yandex.Maps mô phỏng.
- `news.html`: Lưới bài viết có bộ lọc.
- `news-detail.html?slug=cau-chuyen-ca-phe-viet`: Chi tiết bài viết render theo slug.
- `contact.html`: Kênh liên hệ và biểu mẫu gửi tin nhắn.

## Cấu trúc thư mục

```text
trung-nguyen-russia-demo/
|-- index.html
|-- about.html
|-- products.html
|-- product-detail.html
|-- coffee-story.html
|-- partners.html
|-- where-to-buy.html
|-- news.html
|-- news-detail.html
|-- contact.html
|-- css/
|   |-- style.css
|   |-- responsive.css
|   `-- animations.css
|-- js/
|   |-- main.js
|   |-- products.js
|   |-- stores.js
|   |-- news.js
|   `-- forms.js
`-- assets/
    |-- images/
    |-- products/
    |-- icons/
    `-- logo/
```

## Dữ liệu và tương tác

- `js/products.js` chứa 10 sản phẩm, bộ lọc và render chi tiết theo `slug`.
- `js/stores.js` chứa dữ liệu điểm bán mẫu tại năm thành phố, điều khiển danh sách và pin bản đồ.
- `js/news.js` chứa sáu bài viết, bộ lọc và render bài chi tiết theo `slug`.
- `js/forms.js` thực hiện validation nhẹ và thông báo gửi thành công trên giao diện; không lưu dữ liệu.
- `js/main.js` điều khiển header sticky, menu toàn màn hình, active navigation, chuyển động reveal và toast.

## Tài sản và tích hợp cần thay trong phiên bản thật

- Logo hiện tại nằm tại `assets/logo/legend-logo.svg` và `assets/logo/legend-logo-light.svg`; thay bằng logo Trung Nguyên Legend chính thức được cấp phép.
- Hình sản phẩm trong `assets/products/` là packshot SVG placeholder cao cấp; thay bằng ảnh sản phẩm chính thức.
- Hình editorial trong `assets/images/` là minh họa placeholder; thay bằng hình ảnh thương hiệu, vùng nguyên liệu và không gian cà phê chính thức.
- Khu vực bản đồ trong `where-to-buy.html` và `contact.html` có comment `TODO` để tích hợp Yandex.Maps API thật.
- Các trang có comment `TODO` dành cho Yandex.Metrica; phần `<head>` đánh dấu vị trí cấu hình Yandex.Webmaster và IndexNow.
- Nút Telegram và VK hiện là giao diện mô phỏng; gắn liên kết/kênh chính thức sau khi client cung cấp.

## Ghi chú phạm vi

- Website không có giá, giỏ hàng, thanh toán, đăng nhập hoặc cơ sở dữ liệu.
- Email, số điện thoại, địa điểm bán và thông tin liên hệ đang là dữ liệu demo.
- Nội dung và hồ sơ sản phẩm cần được duyệt lại theo tài liệu thương hiệu, pháp lý và hồ sơ phân phối chính thức trước khi xuất bản.
