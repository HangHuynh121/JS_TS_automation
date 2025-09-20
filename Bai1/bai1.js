/*
console.log('Mình là JavaScript')

//Biến 
let memberNam
memberNam = 'Hang'
console.log(memberNam)
console.log('Hang')


//Biên thay đổi - biến số: let
let diemSo
diemSo = 8
console.log(diemSo)
diemSo = 10
console.log(diemSo)


//Biến cố định - hằng số: const: không thay đổi từ lần khai báo đầu tiên
const soPi = 3.14
console.log(soPi)

soPi = 3.15
console.log(soPi)

*/
//In biến ra màn hình: nối chuỗi (+), dùng dấy phẩy(,), Template Literal(' ')

const tenTestCase = 'TC1'

const trangThai = 'Pass'

const thoiGianchay = 3500

console.log('Tên TestCase: ' + tenTestCase + ' - Trạng thái:' + trangThai + ' - Thời gian chạy: ' + thoiGianchay)


const tenTestCase2 = 'TC2'

const trangThai2 = 'Fail'

const thoiGianchay2 = 3600

console.log('Tên TestCase:', tenTestCase2, ' - Trạng thái:', trangThai2, ' - Thời gian chạy: ', thoiGianchay2)


const tenTestCase3 = 'TC3'
const thoiGianchay3 = 1550
const trangThai3 = 'Pass'
console.log(`TestCase: ${tenTestCase3} - Duration: ${trangThai3} - Time: ${thoiGianchay3 * 3}`)

//Bài tập in biến: đi siêu thị mua 2 cái áo, mỗi cái 250$, thuế VAT 10%. In ra số tiền phải trả
const giaAo = 250
const thueVAT = 0.1
console.log(`Tính gộp: totalPrice: ${(giaAo * 2) + (giaAo * 2) * thueVAT} VND`)

let totalAo = giaAo * 2
let totalThue = totalAo * thueVAT
console.log(`Tinh tach gia, thue: totalPrice: ${totalAo + totalThue} VND`)

/*Quy tắc đặt tên biến:
- Biến chứa chữ cá, sô (0-9), dấu gạc dưới (_), kí hiệu $
- Không bắt đầu bằng số
- Không sử dụng từ khóa của JS
- Có phân biệt hoa thường
- Đặt tên biến có nghĩa

*/

let ten = 'hang1'
let Ten = 'hang2'
let TEN = 'hang3'

console.log(ten, Ten, TEN)


//KIỂU DỮ LIỆU
//String
let loiChao = 'Hello everyone'
const tenSach = 'The secret'
console.log(typeof (loiChao))

const userName = 'automation'
let id = 1
const productSelector = `${userName}${id}`
const productSelector1 = `h1:has-id("${id}")`
console.log('Selector1: ', productSelector)
console.log(`Selector2: ${productSelector1}`)

//Number: Số nguyên, số thập phân



