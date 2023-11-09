// Data
backgroundImage = "images/gameBoard.png"

class Player {
    constructor(name) {
        this.name = name
        this.career = ""
        this.salary = 0
        this.bankAccount = 2000
        this.loan = 0
        this.stocks = 0
        this.car = 1
        this.children = 0
        this.playerPosition = 0
    }
}

const careerCards = {
    police: 40000,
    mechanic: 55000,
    business: 45000,
    plumber: 55000,
    construction: 35000,
    trucker: 80000,
    teacher: 68000,
    engineer: 80000,
    scientist: 74000,
    attorney: 100000,
    doctor: 225000,
    pilot: 230000
}

const Banker = {
    funds: 75000000000,
    stocks: 10,
    auto: 300,
    home: 1100,
    life: 600,
    renter: 180,
    health: [500, 100, 1500]
}

const spaces = {
    red : 3,
    yellow : 115,
    green : 21,
    blue : 9,
    retire : 1,
    bridge : 1,
    lucky : 3,


}


let divEL1 = document.querySelector("begin")
let divEL2 = document.querySelector("spinner")
let divEl3 = document.querySelector("gameNotes")


const player1 = new Player()


