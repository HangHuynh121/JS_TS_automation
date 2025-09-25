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




//TINH DA HINH: The hien moi doi tuong có the tra loi 1 phuong thuc theo 1 cach khac
//di chuyen: người đi, cá dbowi, chimbay, ran truon...

class Area {

    Calculat() {
        console.log(`Calculate the area`);
    }

}


class areaCircle extends Area {
    py = 3.14
    diameter = 3.15

    Calculat() {
        /*   // Ep kieu can tao bien let rồi ep kieu
          let areaC = Number((this.py * this.diameter).toFixed(2))
  
          console.log(areaC)
          console.log(typeof (areaC)) */

        console.log(`Area of circle, niameter 3.15 cm: ${Number(this.py * this.diameter).toFixed(2)} cm2`);
        console.log(`Datatype of areaCircle is ${typeof (Number(this.py * this.diameter).toFixed(2))}`)

    }
}

class areaSquare extends Area {
    sideOfSquare = 3.15

    Calculat() {
        /*  //Ep kieu can tao bien let rồi ep kieu
         let areaS = Number((this.sideOfSquare * this.sideOfSquare).toFixed(2));
 
         console.log(areaS)
         console.log(typeof (areaS)) */

        console.log(`Area of square, side of square equal 3.15 cm: ${Number(this.sideOfSquare * this.sideOfSquare).toFixed(2)} cm2`);
        console.log(`Datatype of areaSquare is ${typeof (Number(this.sideOfSquare * this.sideOfSquare).toFixed(2))}`)
    }
}

class areaRectangle extends Area {
    width = 3.14
    height = 6.3

    Calculat() {
        /*    //Ep kieu can tao bien let rồi ep kieu
           let areaR = Number((this.width * this.height).toFixed(2));
   
           console.log(areaR)
           console.log(typeof (areaR)) */



        console.log(`Area of Rectangle, width = 3.14cm, height = 6.3cm: ${Number(this.width * this.height).toFixed(2)} cm2`);
        console.log(`Datatype of areaSquare is ${typeof (Number(this.width * this.height).toFixed(2))}`)
    }
}

const Areas = [new areaCircle, new areaSquare, new areaRectangle] //mang moi phan tu la cac class



Areas.forEach(function (Area) {
    return Area.Calculat()
})

Areas.forEach(Area => Area.Calculat())


//CASE IN AUTOMATION FOLLOW PAGE OBJECT
/* 
PAGE OBJECT
        BasePage.js => class cha chưa action chung 
        Moi man hinh chia ra nhung page khac nhay, tap hop các locator(button, texbox, combobox... ) và các action cho tung page
        LoginPage,js => class cho page login
        HomePage.js => class cho Home Page
TEST   
        login.test.js => kich ban test


*/

//PageBase.js
class BasePage {
    constructor(page, url) {
        this.page = page
        this.url = url

    }

    async navigateTo() {
        console.log(`Navigating to page ${this.url}`)
    }

}

class loginPage extends BasePage {
    //locator is area of element on UI
    userNameInput = 'username'
    passwordInput = "pass"
    loginButton = 'Login-button'

    constructor(page) {
        super(page, '/urrl')
    }

    async enterUserName(username) {
        console.log(`ACTION: Input username ${username} on ${this.userNameInput} textbox`)
    }

    async enterPassword(password) {
        console.log(`ACTION: Input password ${password} on ${this.passwordInput} textbox`)
    }

    async clickLoginButton() {
        console.log(`ACTION: Click on ${this.userNameInput} button `)
    }

    async login(username, password) {
        console.log(`WORKFLOW - EXCUSE LOGIN WITH USER ${username}`);
        await this.enterUserName(username)
        await this.enterPassword(password)
        await this.clickLoginButton()


    }
}




























