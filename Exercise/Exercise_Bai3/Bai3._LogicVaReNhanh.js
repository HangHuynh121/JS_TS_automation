/*
Lập trình Robot tự động xử lý đơn hàng 
Bối cảnh thực tế
Bạn là lập trình viên cho một công ty thương mại điện tử. Để tăng tốc độ xử lý, công ty muốn tạo một robot (một kịch bản automation) để tự động sàng lọc và thực hiện các hành động ban đầu đối với mỗi đơn hàng mới. Robot này cần phải đưa ra quyết định dựa trên nhiều yếu tố: thông tin đơn hàng, tình trạng khách hàng, và lượng hàng tồn kho.
Logic (Yêu cầu): 
Viết một chương trình mô phỏng con robot này. Dựa vào bộ dữ liệu đầu vào, robot sẽ xử lý và đưa ra một quyết định cuối cùng theo quy trình sau:
1. Kiểm tra điều kiện tiên quyết: Robot chỉ hoạt động nếu hệ thống không trong giờ bảo trì (!dangBaoTri). Nếu đang bảo trì, robot sẽ báo lại và dừng ngay lập tức.
2. Kiểm tra tồn kho:
- Nếu số lượng sản phẩm khách đặt (soLuongDat) lớn hơn số lượng trong kho (tonKho), robot sẽ thông báo "Hủy đơn hàng do hết tồn kho" và dừng lại.
- Nếu còn hàng, robot sẽ tạm thời "giữ" sản phẩm cho khách bằng cách giảm số lượng tồn kho đi 1 (sử dụng toán tử giảm).
3. Phân tích rủi ro (Cần xác minh thủ công):
 Sau khi đã trừ kho, robot sẽ kiểm tra xem đơn hàng có cần người thật xác minh hay không. Đơn hàng sẽ bị gắn cờ "Cần xác minh" nếu thỏa mãn BẤT KỲ điều kiện nào sau đây:
a. Giá trị đơn hàng lớn hơn $1000 VÀ khách hàng này mới mua dưới 3 lần.
b. Khách hàng không phải là thành viên VIP (!laThanhVienVip) VÀ đơn hàng yêu cầu giao hàng quốc tế.
4. Xử lý tự động:
- Nếu đơn hàng vượt qua tất cả các bước kiểm tra trên, nó sẽ được xử lý tự động. Robot sẽ thông báo "Đơn hàng được tự động xử lý và gửi đến bộ phận đóng gói".
- Sau khi xử lý thành công, robot sẽ tăng biến đếm tổng số đơn hàng đã xử lý trong ngày (donHangDaXuLyTrongNgay) lên 1.
Tình huống 1: Đơn hàng lý tưởng (Happy Path) 
Mục tiêu: Kiểm tra luồng xử lý tự động thành công.
Bộ dữ liệu:
let dangBaoTri = false;
let tonKho = 20;
let soLuongDat = 1;
let giaTriDonHang = 500;
let yeuCauGiaoQuocTe = false;
let laThanhVienVip = true;
let lichSuMuaHang = 10;
let donHangDaXuLyTrongNgay = 152;
Kết quả mong đợi: Robot thông báo xử lý tự động, tonKho còn 19, donHangDaXuLyTrongNgay tăng lên 153.
*/

let dangBaoTri = false;
let tonKho = 20;
let soLuongDat = 1;
let giaTriDonHang = 500;
let yeuCauGiaoQuocTe = false;
let laThanhVienVip = true;
let lichSuMuaHang = 10;
let donHangDaXuLyTrongNgay = 152;

console.log(!dangBaoTri)

//1. Kiểm tra điều kiện tiên quyết: Robot chỉ hoạt động nếu hệ thống không trong giờ bảo trì (!dangBaoTri). Nếu đang bảo trì, robot sẽ báo lại và dừng ngay lập tức.
if (dangBaoTri === true) {
    console.log('He thong dang bao tri')
    stop;
} else {
    if (soLuongDat > tonKho) {
        console.log('Huy don hang do het hang ton kho')
    } else {
        tonKho--
        console.log(tonKho)

    }
}

/*3.Phân tích rủi ro (Cần xác minh thủ công):
 Sau khi đã trừ kho, robot sẽ kiểm tra xem đơn hàng có cần người thật xác minh hay không. Đơn hàng sẽ bị gắn cờ "Cần xác minh" nếu thỏa mãn BẤT KỲ điều kiện nào sau đây:
a. Giá trị đơn hàng lớn hơn $1000 VÀ khách hàng này mới mua dưới 3 lần.
b. Khách hàng không phải là thành viên VIP (!laThanhVienVip) VÀ đơn hàng yêu cầu giao hàng quốc tế.*/

