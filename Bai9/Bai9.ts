/* let diemHienTai: string = '10'

let bonus: number = 50

let totalScope: number = Number(diemHienTai) + bonus
console.log(totalScope)


// String
let customerName: string = 'Hang Huynh'
customerName = "Conan"

//Number
let orderId: number = 123

//boolean
let isPaid: boolean = false

//isPaid = 0

//any
let userName: any = 'Conan1'
//1 dòng code nào đó trong logic làm thay doi kieu du lieu
userName = 123
console.log(userName.toUpperCase())

 

//funtion
//void dùng ko ko biet tra ve gia tri gi
function printReceipt(orderId: number) {
    console.log(`In hoa don ${orderId}`)
}
//printReceipt(`hh`)

function tinhTong(a: number, b: number): number {
    return a * b
}

const result = tinhTong(5, 7)
console.log(result)



//aray



//object
//dang cho object
let coffeOrder: {
    orderID: number,
    customerName: string,
    isPaid: boolean,
    itemCont: number
}

coffeOrder = {
    orderID: 121,
    customerName: `TrangDao`,
    isPaid: true,
    itemCont: 2

}

console.log(`Coffee Order:`, coffeOrder)


let specialOrder: {
    orderID: string,
    item: string[],
    specialInstructionts?: string  // dau hoi là optional có the có the dung hoac ko dung key này
}

specialOrder = {
    orderID: `135`,
    item: [`Black cofee`, `Milk Cofee`, `Matcha Latte`]

}

console.log(`Special order:`, specialOrder)

const customerOrder: {
    orderId: number;
    status: string
} = {
    orderId: 123,
    status: 'success'
}
console.log(`Special order:`, customerOrder)
*/

const storeMenu: {
    id: number,
    name: string,
    price: number

}[] = [
        { id: 1, name: `black cofee`, price: 23000 },
        { id: 2, name: `milk cofee`, price: 25000 },
        { id: 3, name: `matcha latte`, price: 29000 }
    ]



const customerOrder: {
    orderId: number;
    customerName: string;
    items: { name: string, price: number }[];
    status: string;
    note?: string
} = {
    orderId: 20250927,
    customerName: 'Teo',
    items: [],
    status: 'Pending',
    note: 'It da, nhieu ca phe'
}



function calculateOrderTotal(order: { items: { price: number }[] }): number {
    let total = 0
    for (const item of order.items) {
        total += item.price
    }
    return total;
}



function processPayment(totalAmount: number, method: string, amountGiven: number): string {
    if (method === 'card') {
        return `Thanh toan thanh cong ${totalAmount} bang the`
    } else if (method === 'cash') {
        const change = amountGiven - totalAmount
        if (change < 0) {
            return `Khach dua thieu ${Math.abs(change)}`
        }
        return `Thanh toan thanh cong. voi so tien ${change} `
    }
    return 'Phuong thuc thanh toan khong hop le'

}

customerOrder.items.push({ name: storeMenu[1]!.name, price: storeMenu[1]!.price })

customerOrder.items.push({ name: storeMenu[2]!.name, price: storeMenu[2]!.price })

const totalAmount = calculateOrderTotal(customerOrder)
console.log(`Total amount: ${totalAmount}`)

const paymentResault = processPayment(totalAmount, `card`, 54000)
console.log(`Payment: ${paymentResault}`)