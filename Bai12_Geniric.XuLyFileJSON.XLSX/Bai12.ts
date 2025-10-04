/* //Generic type => 1 chai nước rỗng, hình dáng công dụng giữ nguyên nhưng ko quy định chưa nước gì: đổ nước gì thành chai nước đó
// Cái chai nhu vay kí hieu dáu ngoc nhon <T></T>
function traVeGiaTriDynamic<T>(arg: T): T {
    return arg
}

//Do vao chai nuoc khoang dang string
let outputString = traVeGiaTriDynamic<string>(`Chao moi nguoi`)
console.log(outputString.toLocaleUpperCase())

//Do nuoc cam  vào chai dang number
let outputNumber = traVeGiaTriDynamic<number>(100)
console.log(outputNumber.toFixed(2)) */







//T -> placeholder -
//syntax
// //trong function
// function tenHam<T,U...>(thamso1: T, thamso2: U,....): Kieu tra ve{
//     than ham
// }
// function taoCapGiaTri<T, U>(key: T, value: U): {key: T, value: U}{
//     return {key: key, value: value }
// }
// let vd1 = taoCapGiaTri<string, number>('Tuoi', 18)
// console.log(vd1.key.toLocaleUpperCase());






/*
//Doi voi interface
// interface Teninterface<T>{
//     propertyname: T
// }
// type TenType<T> = {
//     propertyname: T
// }

interface Result<TData> {
    isSuccess: boolean;
    error?: string
    data: TData
}
let userResult: Result<string> = { isSuccess: true, data: 'Lay du lieu thanh cong' }
let productResult: Result<{ id: number, name: string }> = {
    isSuccess: false,
    data: { id: 1, name: 'laptop' }
} */





/*
//Generic trong class

// class tenLop <T>{
//     constructor(value:T)
//     method(value:T)

// }
class DataStorage<T> {
    private data: T
    constructor(initialData: T) {
        this.data = initialData
    }
    getData(): T {
        return this.data
    }
}
const stringStorage = new DataStorage<string>('Hello generics')
console.log(stringStorage.getData().toLocaleUpperCase());
 */





//Cách doc file json,xlsx (qua thu cvien thu3)
//datadriver...
//parse record<
//category: 'lịc su'
//>
//json chính là object trong typescripts

//stream().  chunk()   =>doc filr chay theo tungdoan hoac theo cach












// testcase dang hao xu dung data test dau vao tu file json xlsx, check voi cac user khac nhau








