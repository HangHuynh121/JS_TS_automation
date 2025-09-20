
/*

let giaGame = 1000000
let soTienTietKiem = 0
let soTuan = 0

while (soTienTietKiem < giaGame) {
    console.log(`Tuan ${soTuan}. đang có ${soTienTietKiem}`);
    soTienTietKiem += 150000 // soTienTietKiem =  soTienTietKiem + 150000
    soTuan++
    console.log('Bo vao tien kiem 1500000 ');
}

console.log(`Sau ${soTuan} tuan, so tien tiet kiem duọc ${soTienTietKiem} du de mua Game`);

//let giaGame = 1000000
//let soTienTietKiem = 0

//while(soTienTietKiem < giaGame){
//   console.log('tiet kiem tien');
//}

/*VÒNG LẶP FOR





for (let i = 0; i <= 5; i++) {
    console.log(`Dang thuc hien vong lap thu ${i}`)
}


for (let i = 0; i < 5; i++) {
    if (i === 3) {
        console.log('Bo qua so 3');
        continue;
    }

    console.log(`So hien tai ${i}`)
}




//for ...of

const possibleBanners = ['#promo-popup', '.cookie-banner', '[data-ad="true"']

const visibleBanner = '.cookie-banner'

//cu phap for (const item of array)

for (const selector of possibleBanners) {
    console.log(`dang kiem tra selector: ${selector}`);
    if (selector === visibleBanner) {
        console.log('da tim thay banner');
        break
    }

}


*/

/*return
trả về 1 giá trị
kết thúc hàm ngay lặp tức, ko chạy thêm đk nào
*/

function tinhTong(a, b) {
    const result = a + b
    return result
}

const sum = tinhTong(3, 5)
console.log(sum);

//Check tuổi
function checkAge(age) {
    if (age < 18) {
        console.log('Chưa đủ tuổi mời ra ngoài')
        return
    }
    console.log('Mời bạn vào!')

}

checkAge = 15


const tickets = ['Thường', 'Thường', 'VIP', 'Thường', 'VIP']


// for(const ticket of tickets){
//   console.log(`Dang kiemn tra ve: ${ticket}`);

//   if(ticket === 'VIP'){
//     console.log('MOI BAN VAO');
//     break;
//   }
// }

//forEach ko co break
// forEach(function(item){

// })
let foundVip = false;

tickets.forEach(function (item) {
    if (foundVip) {
        console.log(`Da tim thay VIP, nhung van liec qua ve: ${item}`);
        return
    }
    console.log(`Dang kiem tra ve ${item}`);
    if (item === 'VIP') {
        console.log('=> DA TIM THAY VE VIP MOI VAO');
        foundVip = true
    }

})


// Kịch bản: Phân tích Log Server
// Mục tiêu: Bạn có một mảng các chuỗi log từ server. Bạn cần tìm dòng log đầu tiên ghi nhận một lượt đăng nhập thất bại (status=FAIL) của dịch vụ xác thực người dùng (service=USER_AUTH).

// Quy trình xử lý:

// Tìm dòng log phù hợp đầu tiên.

// Từ dòng log đó, dùng các kỹ thuật xử lý chuỗi để trích xuất ra mã người dùng (uid) và mã lỗi (err_code).

// Ngay sau khi trích xuất thành công, dừng lại và không xử lý các dòng log còn lại.
// const logEntries = [
//   't=1m service=PAYMENT status=OK uid=101',
//   't=2m service=USER_AUTH status=FAIL uid=205 err_code=401', 
//   't=3m service=INVENTORY status=OK uid=302',
//   't=4m service=USER_AUTH status=OK uid=205',
//   't=5m service=USER_AUTH status=FAIL uid=404 err_code=404', 
// ];


/*
const logEntries = [
  't=1m service=PAYMENT status=OK uid=101',
  't=2m service=USER_AUTH status=FAIL uid=205 err_code=401', 
   't=3m service=INVENTORY status=OK uid=302',
   't=4m service=USER_AUTH status=OK uid=205',
   't=5m service=USER_AUTH status=FAIL uid=404 err_code=404',]

let failedLoginInfo = null

for(const log of logEntries){

  if(log.includes('service=USER_AUTH') && log.includes('status=FAIL')){
    console.log(`-> Tim thay dong log tiem nang: ${log}`);

    const parts = log.split(' ')
    // console.log('sau khi tach chuoi thanh mang',parts);
    let uid = null
    let errCode = null
    for (const part of parts){
      if(part.startsWith('uid=')){
        uid = part.replace('uid=','')
      }
      if(part.startsWith('err_code=')){
        errCode = part.slice("err_code=".length)
      }
    }

    failedLoginInfo = {uuId: uid, errCode: errCode}
    console.log('Da tim thay log thich hop');
    break

  }

}
 */

//map()
/* const numbers = [1, 2, 3, 4, 5, 6,]

const doubleNumber = numbers.map(function (number) {
    return number * 2
})
console.log('Mang dau', numbers)
console.log('Mang dau', doubleNumber) */

/* const dailySales = [50, 65, 60, 80, 75]

const saleTrend = dailySales.map(function (currentItem, index, array) {
    if (index === 0) {
        return `Ngay 1: ${currentItem} {Bat dau}`
    }
    const previousSale = array[index - 1]
    const change = currentItem - previousSale

    return `Ngay ${index + 1}: ${currentItem} Thay doi ${+change}`

})

console.log(saleTrend) */



// filter 
/* const numbers = [1, 2, 3, 4, 5]
const soChan = numbers.filter(function (item) {
    return item % 2 === 0
})

console.log('Mang dau: ', numbers)
console.log('Mang filter: ', soChan) */



//find()
/* const numbers = [1, 2, 3, 4, 5]
const soLonHon3 = numbers.find(function (item) {
    return item > 3
})
console.log('So lon hơn 3 trong mang là:', soLonHon3) */




//object
const userArray = ['hoang', 'hoang@gmail.com', 30, 'admin']
//object 
// { key :value}
const userArrayObject = {
    name: 'Hoang',
    email: 'hoang@gmail.com',
    age: 30,
    role: 'admin'
}
//truy cap thong tin object, dùng dấu chấm
console.log(userArrayObject.age)
console.log(userArrayObject.name)

userArrayObject.age = 36
console.log(userArrayObject.age)

delete userArrayObject.role
console.log(userArrayObject)

//ví dụ object
const apiResponse = {
    userId: 123,
    userName: 'hh',
    passWord: '123',

}
console.log(`Key trong object là: ${Object.keys(apiResponse)}`)
console.log(`Key trong object là: ${Object.values(apiResponse)}`)








