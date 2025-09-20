/*
Bài 1: Bóc tách Dữ liệu sản phẩm từ một chuỗi duy nhất

Kịch bản: 
Trên trang chi tiết sản phẩm, đôi khi thông tin quan trọng như SKU (Mã sản phẩm) và tình trạng kho được hiển thị trong cùng một dòng văn bản. Script của bạn cần phải đọc dòng này và bóc tách ra từng thông tin riêng biệt để xác thực.
Dữ liệu thô từ UI:

const productInfo_text = "SKU: APL-IP15-BLK | Tình trạng: Còn hàng (5 sản phẩm)";%
Yêu cầu:
1. Từ chuỗi productInfo_text, trích xuất ra mã SKU (APL-IP15-BLK) và gán vào một biến.
2. Cũng từ chuỗi đó, trích xuất ra số lượng sản phẩm trong kho (5) và gán vào một biến kiểu number.
3. In cả hai kết quả ra màn hình.
*/

const productInfo_text = "SKU: APL-IP15-BLK | Tình trạng: Còn hàng (5 sản phẩm)"
const SKU = productInfo_text.replace("| Tình trạng: Còn hàng (5 sản phẩm)", " ").replace("SKU: ", " ").trim("")
console.log(SKU)
console.log(typeof (SKU))

const tonKho = Number(productInfo_text.replace("SKU: APL-IP15-BLK | Tình trạng: Còn hàng (", " ").replace(" sản phẩm)", " "))
console.log(tonKho)
console.log(typeof (tonKho))




/*
Bài 2: Xác thực Kết quả Tìm kiếm 

Kịch bản: 
Script automation của bạn đang chạy trên một trang chi tiết sản phẩm. Để thực hiện các bước tiếp theo như gọi API hoặc tìm kiếm trong database, bạn cần tạo ra một Product ID duy nhất và sạch sẽ từ các thông tin lộn xộn lấy từ giao diện người dùng (UI).
Dữ liệu thô từ UI:

const productTitle_UI = "  Apple iPhone 15 Pro Max - 256GB (Blue Titanium)  ";
const brandName_API = "apple";
const skuCode = "SKU#8825-A5";
* Yêu cầu:
* Bạn phải "sơ chế" và kết hợp các dữ liệu trên để tạo ra một chuỗi productId cuối cùng theo đúng định dạng sau:
* apple-iphone-15-pro-max-256gb-blue-titanium_sku-8825a5
*/
const productTitle_UI = "  Apple iPhone 15 Pro Max - 256GB (Blue Titanium)  ";
const brandName_API = "apple";
const skuCode = "SKU#8825-A5";
const lamSachProductTitle_UI = productTitle_UI
    .trim()
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[ ]/g, "-")
    .replace("---", "-");

console.log(lamSachProductTitle_UI)
console.log(typeof (lamSachProductTitle_UI))

const lamSachSkuCode = skuCode
    .toLowerCase()
    .replace("#", "")
    .replace("-", "")
    .replace("sku", "sku-")


console.log(lamSachSkuCode)
console.log(typeof (lamSachSkuCode))

const productId = lamSachProductTitle_UI


