//Class trong typescript

class Animal {
    //name: string
    readonly name: string  //readonly, no change

    readonly age: number //private chi dung duoc trong class

    color: string

    constructor(name: string, age: number, color: string) {
        this.name = name
        this.age = age
        this.color = color
    }

    /* changeName(newName: string) {
        this.name = newName
    } */

    printName() {
        return this.name

    }
}

const dog = new Animal('Gato', 10, 'Black')
console.log(dog.name, dog.age, dog.color)
dog.color = 'Yellow'
console.log(dog.name, dog.age, dog.color)








/* 
//protected: chi truy cap duoc  class con kế thừa cha

class gameCharacter {

    protected health: number

    constructor(heath: number) {
        this.health = heath
    }

    protected takeDamage(amount: number): void {
        this.health -= amount
        console.log(`Bi danh ${amount} damage, con lai ${this.health}`);
    }
}


class Warrior extends gameCharacter {

    attack(target: gameCharacter): void {
        console.log(`Warrior attack!`);
        //target.takeDamage(10)

    }

    defendAttack(): void {
        console.log(`warrior attacks with as special move`)
        this.takeDamage(5)

    }

}

const warrior = new Warrior(100)
warrior.defendAttack() */