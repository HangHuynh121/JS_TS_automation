//parseInt()

const soLuongText = "15 30san 30 pham"
console.log(parseInt(soLuongText))

//parseFloat()

const giaTienText = '$29.99 USD'
const giaTien = giaTienText.replace('$', '')
console.log(parseFloat(giaTien));

//Number
const tongTienText = 'Tong thanh toan: 2,540,000.50 VND'

const chuoiDaLamsach = tongTienText.replace('Tong thanh toan: ', '').replace(' VND', '').replaceAll(',', "")
console.log("Chuoi da lam sach: ", chuoiDaLamsach)

console.log(chuoiDaLamsach);
const chuoiNumber = Number(chuoiDaLamsach)
console.log(`Ta co chuoi: ${chuoiNumber}, ${typeof (chuoiNumber)} `);

console.log(`dau cach ${parseInt(" 100 20 pham")}`) //bỏ qua dấu cách đầu, ko bỏ dấu cách giữa

/*
I.Sử lí dữ liệu trong auto JS
- b1: Lây dữ liệu thô từ Ui ( 100% là string)
- b2: sơ chế dữ liệu bằng các phương thức chuỗi()
- b3: ép kiểu bằng các công cụ cú pháp thích hợp
- b4: thực hiện tính toán tu b3
*/

//NAN
//ép kiểu thất bại => trả Nan
let ketQua1 = parseInt("hello")
console.log(ketQua1)
//Thực hiện pheps toán bất kahr thi => vô nghĩa
let ketQua2 = 100 * 'ao'
console.log(ketQua2)

//Number.isNaN => trả veed true nếu param truyền vào là NaN






const tonKhoText1 = 'Ton kho: 25'
const tonKhoText2 = 'Ton kho: het hang'

function kiemTraVaHanhDong(inputText) {
    console.log(`Dang xy ly chuoi ${inputText}`);

    //b2,b3: so che va ep kieu
    const chuoiSo = inputText.replace('Ton kho: ', '')
    const soLuong = parseInt(chuoiSo)

    //b4
    if (Number.isNaN(soLuong)) {
        console.log('San pham het hang, bo qua hanh dong them vao gio');

    } else {
        console.log(`so luong hang con la ${soLuong}`);
        if (soLuong > 0) {
            console.log('Thuc hien hanh dong them vao giio hang');

        }
    }

}
console.log('Kich ban1: con hang');
kiemTraVaHanhDong(tonKhoText1)

console.log('Kich ban2: het hang');
kiemTraVaHanhDong(tonKhoText2)



/*
//Toán tử gán 
//x = 10
// += => x +=5   x = x + 5
// -+ => x -= 5  x = x - 5
// *= => x *= 5   x = x * 5

let soTestCaseFail = 0
//so lan testcase that bai
soTestCaseFail *= 2
console.log(soTestCaseFail)
*/




/*//Toán tử Tăng/Giảm



let attemts = 0
const MAX_ATTEMPTS = 3;

function perfromClickWithRetry() {
    attemts++
    console.log(`Bat dau thu hien click, lan thu: ${attemts}`);

    const isSuccess = false;

    if (!isSuccess) {
        if (attemts >= MAX_ATTEMPTS) {
            console.error(`Da thu ${attemts} va van that bai. Dung lai`)
        } else {
            console.log(`-> click that bai, so lan da thu ${attemts}`);

        }
    }


}

perfromClickWithRetry()

perfromClickWithRetry()

perfromClickWithRetry()

perfromClickWithRetry()
*/




/*Toán tử so sánh, Trái tim của automation
>, <, >=, <=
==, !== (lòng lẻo)
===, !=== (Nghiêm ngặc)  //Khuyên sử dụng tránh sai khi so sánh khác kiểu dữ liệu



==: so sánh lỏng lẻo
===: check kiểu dữ liệu xong mới so sánh đến giá trị cần so sánh
*/
const giaTriTuUI = '10'
const giaTriTuDB = 10
const soSanhGiaTriLongLeo = giaTriTuUI == giaTriTuDB
console.log(soSanhGiaTriLongLeo) //true

const soSanhGiaTriNghiemNgac = giaTriTuUI === giaTriTuDB
console.log(soSanhGiaTriNghiemNgac) //false


const responeAPI = {
    product: "Laptop",
    quantity: false  //Loi, dang le phai la0
}
const soLuongMongDoi = 0
if (responeAPI.quantity == soLuongMongDoi) {
    console.log('Passed');
} else {
    console.log('Falsed');
}
//so sánh == ==> convert false -> 0, '' => 0

if (responeAPI.quantity === soLuongMongDoi) {
    console.log('Passed');
} else {
    console.log('Falsed');
}
//so sánh == ==> convert false -> 0, '' => 0

// const nutDangNhapIsVisible = true
// const nutDangNhapIsEnabled = true

// const coTheClickDangNhap = nutDangNhapIsEnabled && nutDangNhapIsVisible

// if(coTheClickDangNhap){
//     console.log('PASS DIEU KIEN');

// }else{
//     console.log('FAIL DIEU KIEN ');

// }




const thongBaoThucTeUI = 'Cam on ban da mua hang1'

const laThongHopLe = (thongBaoThucTeUI === 'Cam on ban da mua hang') || (thongBaoThucTeUI === 'Dat hang thanh cong')

if (laThongHopLe) {

    console.log('TEST PASED');

} else {

    console.log('TEST FAIL');

}



/*
TOÁN TỬ LOGIC
&& - and
|| - or
! - not, phủ định
Thứ tự ưu tiên các toán
*/
const nutLoginIsVisible = true
const nutLoginIsEnable = true
const clickLoginIsEnable = nutLoginIsVisible && nutLoginIsEnable

if (clickLoginIsEnable) {
    console.log('TEST PASSED;')
} else {
    console.log('TEST FALSE');
}

/*
let spinnerIsVisile = false
//thang spinner = true -> co nghia la no visible la bien mat o tren web
// thang spinner = fase => co nghia la no dang o tren web 
//cac action tiep theo de chac chan hoac cap nhat lai bien spinnerIsVisile

if(!spinnerIsVisile){
    console.log('SPINNER DA BIEN MAT. CO THE THUC HIEN BUOC TIEP THEO');
    ///page.fill('')
}else{
    console.log('Van CON SPINNER');
    
}
*/



//Thứ tự logic ưu tiên
const tongTienDonHang = 60000
const laThanhVienVip = true
const coMaGiamGiaDacBiet = false

// let duocGiamGia = laThanhVienVip && tongTienDonHang > 50000 || coMaGiamGiaDacBiet

// // b1. phep so sanh quan he
// //tong don hang > 50000 -> 60000 > 50000 -> true
// //b2
// //laThanhVienVip && true  => true
// console.log('CO DUOC GIAM GIA HAY KHONG', duocGiamGia);

// let duocGiamGia = (laThanhVienVip && tongTienDonHang > 50000) || coMaGiamGiaDacBiet

// console.log(duocGiamGia);


