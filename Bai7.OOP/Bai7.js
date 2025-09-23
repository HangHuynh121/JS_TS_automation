//class trong JS
//Người khai báo class hay sử dụng class goi la instance=> gióng như nguoi su dung

// class tenClass {
//     //class fields (khai bao truoc thuoc tinh default) - optional
//     temThuocTinhMacDinh= 'value'

//     //constructor (ham khoi tao)
//     constructor(thámo1){
//         this.thuocTinh1 = thamSo1
//     }

//     //Method (phuong thuc- hanh vi)

//     tenPhuongThuc(){

//     }

// }

/* class Car {
    isEngineOn = false;

    constructor(brand, color) {
        this.brand = brand
        this.color = color

    }
    startEngine = () => {
        this.isEngineOn = true
        console.log(`Dong co xe ${this.brand} dã duoc khoi dong`);
    }

    displayInfo = () => {
        console.log(`Day là chiec xe ${this.brand}, mau ${this.color}`)

    }

}

const Car1 = new Car('Mec', 'Trang')
console.log(`Car1 co thuoc tinh ${Car1.brand}`);
Car1.displayInfo()
Car1.startEngine() */


// function(tham so){
// }


// const tenBien = function(thamso){
//     return ket qua
// }
// const tinhHieu = function(a, b){
//     return a - b
// }
// const ketQua = tinhHieu(8, 5)
// console.log(ketQua)
//arrow function
// const tenBien = (tham so)=>{
//     return ketqua
// }

/* const tinhNhan = (a, b) => {
    return a * b
}
// const tinhNhan = (a, b) =>  a * b
const ketquaNhan = tinhNhan(2,2)
console.log(ketquaNhan); */



/* class NguoiDung {
    constructor(email, tenHienThi = 'Khach', vaiTro = 'user') {
        this.email = email
        this.tenHienThi = tenHienThi
        this.vaiTro = vaiTro
    }
    gioiThieu() {
        console.log(`Ten ${this.tenHienThi}, Email: ${this.email}, Vaitro:${this.vaiTro}`);

    }
}
const user1 = new NguoiDung('user1@gmail.com')
user1.gioiThieu()
const user2 = new NguoiDung('user2@gmail.com', 'User2')
user2.gioiThieu() */




//TINH DONG GOI
//Vien thuoc con nhong: vothuoc(class), bao boc thanh phan ben trong (private)
//Moi ham nen phuc vu mot nhiêm vu
/* class bankAccount {
    #balance = 0

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
            console.log(`Nap thanh cong ${amount}`)
        }
    }

    getBalance() {
        return this.#balance
    }

}

const myAccount = new bankAccount()
myAccount.deposit(100)

console.log(`Balance: ${myAccount.getBalance}`);
//console.log(`Balance: ${myAccount.#balance}`); */




/* //TINH TRUU TUONG
//Dieu khien tivi

class CoffeeMachine {
    #cleanmachine() {
        console.log('Ve sinh may');

    }
    makeCoffe() {
        this.#cleanmachine()
        console.log('ca phe da san sang!');

    }
}
const machine = new CoffeeMachine()
machine.makeCoffe()
//nguoi dung chi can biet goi ham nay */



/* 
//TINH KE THUA
//Class con ke thua class cha

class Animal {
    constructor(name) {
        this.name = name
    }

    eat() {
        console.log(`${this.name} dang an`)
    }
}



class Dog extends Animal {
    constructor(name, color) {
        super(name)  //goi constructor class cha Animal
        this.color = color
    }

    bark() {
        console.log(this.name)
    }

    eat() {
        console.log('Day la tu class con')
    }
}

const myDog = new Dog('Gato', 'Vang')
myDog.bark();
myDog.eat();

const animal = new Animal('Teo')
Animal.eat();

 */



/* 
//TINH TRUU TUONG


class Shape{
    draw(){
        console.log('ve hinh dang chung');
        
    }
}
class Circle extends Shape {
    draw(){
        console.log('ve 1 hinh tron');
        
    }
}

class Square extends Shape {
    draw(){
        console.log(' ve 1 hinh vuong');
        
    }
}
const shapes = [new Circle(), new Square(), new Shape()
    
]
shapes.forEach(shape => shape.draw())

 */















