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
        this.tycoon = false
    }
}

const careerCards = {
    police: 40000,
    mechanic: 55000,
    business: 45000,
    plumber: 55000,
    construction: 35000,
    trucker: 80000,
    star: 1000000,
    teacher: 68000,
    engineer: 80000,
    scientist: 74000,
    attorney: 100000,
    vet: 120000,
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
    red : 4,
    yellow : 115,
    green : 21,
    blue : 9,
    retire : 1,
    bridge : 1,
    lucky : 3,
    market : 3,
    millionaire : 1,
    farm : 1
}


let divEL1 = document.querySelector("begin")
let divEL2 = document.querySelector("spinner")
let divEl3 = document.querySelector("gameNotes")

const input = divEL1.getElementsByTagName("input")

const player1 = new Player(input.player1)
const player2 = new Player(input.player2)


const getRandom = () => {
    let rando = Math.floor(Math.random() * 10) + 1
    return rando
}

const getNoDegreeJobs = () => {
    const noDegreeJobs = ["Business Owner", "Construction Worker", "Mechanic", "Plumber", "Police", "Super Star", "Truck Driver"]
    let randomJob = Math.floor(Math.random() * 7)
    return noDegreeJobs[randomJob]
} 

getDegreeJob = () => {
    const degreedJobs = ["Attorney", "Doctor", "Engineer", "Pilot", "Researcher", "Teacher", "Vetenarian"]
    let randomJob = Math.floor(Math.random() * 7)
    return degreedJobs[randomJob]
}

const checkWinner = () => {
    if (player1.tycoon || player2.tycoon) {
        closeGame()
    } else {
        if (player1.position >= 131 && player2.position >= 131) {
            closeGame()
        }
    }
}

const closeGame = () => {
    let p = "The winner is " + winner
}

const buyHomeOrRent = () => {
    const rental = ["Studio Apartment", "2 Bedroom Apartment", "Luxury Apartment"]
    const buyHome = ["Small Condo", ""]
}