/* function tinhToanNang() {
    console.log('Bat dau tinh toan nang.... ca chuong trinh se bi treo!');

    const startTime = Date.now()

    while (Date.now() - startTime < 3000) { }
    console.log('Tinh toan nang da xong')

}
console.log('Chuong trinh bat dau');
setInterval(() => console.log('Tich tac...'), 1000)
tinhToanNang()
console.log('Chuong trinh ket thuc'); */






/* 
//promise (loi hua hen)
function choDoiThongMinh() {
    console.log(`Giao viec thanh cong`)

    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Viec cho da hoan thanh`);
            resolve()

        }, 3000)

    })

}
console.log('Chuong trinh bat dau');
setInterval(() => console.log('Tich tac...'), 1000)

choDoiThongMinh().then(() => {
    console.log('Da xu long xong tu loi hua promise');
})
console.log('chuong da chay xong phan khoi tao');
 */







/* function kiemTratuoi(tuoi) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tuoi > 18) {
                resolve('Ban du tuoi de bo phieu')
            } else {
                reject('Ban chua du tuoi')
            }
        }, 2000)
    })
}
kiemTratuoi(16).then((ketqua) => {
    console.log('Thanh cong', ketqua);

}, lyDoLoi => {
    console.error('that bai', lyDoLoi)
})

function kiemTratuoi(tuoi) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (tuoi > 18) {
                resolve('Ban du tuoi de bo phieu')
            } else {
                reject('Ban chua du tuoi')
            }
        }, 2000)
    })
}
kiemTratuoi(19).then((ketqua) => {
    console.log('Thanh cong', ketqua);

}).catch(lyDoLoi => {
    console.error('Bi loi', lyDoLoi)
}).finally(() => {
    console.log(`Luon chay`)
})
 */







/* 
function layIdNguoiDung() {
    //ham nay hua se tra ve so 1 sau 1 giay
    return new Promise(resolve => setTimeout(() => resolve(1), 1000))
}
function layThongTinTuId(id) {
    return new Promise(resolve => setTimeout(() => {
        resolve({ id: id, ten: 'Ana' })
    }, 1000))
}

console.log('Bat dau chuoi hanh dong');
layIdNguoiDung().then(id => {
    //b1. sau 1 giay promise thanh cong, id co gia tri la 1
    console.log('Lay duoc id nguoi dung', id);
    return layThongTinTuId(id)

}).then(nguoidung => {
    //b2. cho den khi layThongTinTuId hoan thanh (mat them 1 s)
    console.log('Lay duoc thong tin nguoi dung', nguoidung.ten);

})

//callback hell (dia nguc call back) 


//async await: giai quyet callback hell
//assync dat truoc mot function dam bao ham xu li bat dong bo vaf luon tra ve promise
//awwait => no ra lenh tam dung viec thuc thi ham cho den khi giai quuyet va tra ve ket qua

async function layThongTinNguoiDung() {
    console.log('Bat dau quy trinh');
    const id = await layIdNguoiDung()
    const tenNguoiDung = await layThongTinTuId(id)
    console.log(tenNguoiDung.ten);

}
layThongTinNguoiDung()

 */







/* //Lay du lieu tu API truc tiep
async function taiDuLieu(){
    console.log('dang tai');
    //fetch tuong tu postman 
    const ketQua = await fetch('url')
    const duLieu = await ketQua.json()
    console.log('tai xong');
    
    return duLieu
    }
 */









/*
async function layDanhSachBook() {
    try {
        console.log('Bat dau goi API');

        const response = await fetch('https://api.anhtester.com/api/books')
        if (!response.ok) {
            throw new Error(`HTTP erorr! status: ${response.status}`)
        }
        const data = await response.json()
        const bookData = data.response

        const first50Books = bookData.slice(0, 50)

        console.log('50 sach dau tien se la', first50Books);
        console.log('Do dai cua mang la', first50Books.length);
        return first50Books

    } catch (error) {
        console.error('Loi khi goi API,', error.message)
        throw error
    }
}
layDanhSachBook()


// 1/ loc sach dang ban co status = 1
// /2/ loc sach co gia cao > 200000
//3/ loc sach vua dang ban vua co anh

async function lamBaitap() {
    const books = await layDanhSachBook()
    const sachDangBan = books.filter(book => book.status === 1)
    console.log('Dang co status = 1', sachDangBan);
    const sachGiaCao = books.filter(book => book.price > 500)
    console.log('sach giao cao', sachGiaCao);
    const sachDangBanCoAnh = books.filter(book => {
        return book.status === 1 && book.image && book.image.length > 0
    })
    console.log('Sach vua co Anh vua dang ban', sachDangBanCoAnh);


}
lamBaitap() 
*/







/* 
class APIService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    async fetchData(endPoint) {
        const fullUrl = `${this.baseUrl}/${endPoint}`
        try {
            const response = await fetch(fullUrl)
            if (!response.ok) {
                throw new Error(`Loi HTTP trang thai ${response.status}`)
            }
            const data = await response.json()

            return data
        } catch (error) {
        }
    }

}
async function main() {
    const jsonAPI = new APIService('https://api.anhtester.com')
    const bookData = await jsonAPI.fetchData('api/books')
    console.log(bookData);

}
main()
 */








//VÍ DỤ NƯỚNG BÁNH async await
function nuongBanh() {
    console.log('Bep truong dat banh vao lo, se mat 5s');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Banh da chin')
        }, 5000)
    })
}
async function congViecBepTruong() {
    console.log('Bep truong: Bat dau cong thuc lam banh');
    const ketQuaBanh = await nuongBanh()
    console.log(`Bep truong: ${ketQuaBanh}! That tuyet voi!`);
}
function congViecPhuBep() {
    let soLanLauDon = 0
    setInterval(() => {
        soLanLauDon++
        console.log(`Phu bep. Dang lau don lan ${soLanLauDon}`);
    }, 1000)
}
console.log('Nha bep mo cua');
congViecPhuBep()
congViecBepTruong()
console.log('Bep truong dang cho banh, nhung nha bep van hoat dong');












