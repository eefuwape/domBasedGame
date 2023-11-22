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
        this.home = false
        this.car = 1
        this.children = 0
        this.playerPosition = 0
        this.tycoon = false
        this.lifeInsurance = 0
        this.autoInsurance = 0
        this.healthInsurance = 0
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

// number of spaces on the board
//     red : 4,
//     yellow : 115,
//     green : 21,
//     blue : 9,
//     retire : 1,
//     bridge : 1,
//     lucky : 3,
//     market : 3,
//     millionaire : 1,
//     farm : 1
// }

const redSpaces = [["Marry", 15], ["Housing", 26], ["Kids", 33], ["Mid-life Crisis", 45]]
const greenSpaces = [[2, 5, 13, 22, 27, 33], [12], [4], ["2nd fork"], []]
const forkInDRoad = [0, 33, 63]
const blueSpaces = [[16, 41, 47, 54, 68, 81, 94, 105], [2]]
let divEL1 = document.querySelector("begin")
let divEL2 = document.querySelector("spinner")
let divEl3 = document.querySelector("gameNotes")

const img = document.querySelector("dice")

const player1 = new Player(divEL1.player1)
const player2 = new Player(input.player2)

console.log("Player 1 is " + player1.name +".")
console.log("Player 2 is " + player2.name + ".")

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
    let winner 
    if (player1.tycoon === true) {
        winner = "player 1"
    }
    else if (player2.tycoon === true) {
        winner = "player 2"
    }
    else if (player1.bankAccount > player2.bankAccount) {
        winner = "player 1"
    }
    return "The winner is " + winner + "!"
}

const buyHomeOrRent = () => {
    const rentalChoice = ["Studio Apartment", "2 Bedroom Apartment", "Luxury Apartment"]
    const buyHomeOptions = ["3 Bedroom Condo", "4 Bedroom Surbarban Home", "Mansion"]

    const input = document.querySelectorAll("housing")
    if (input){}
}

const getChildMoney (player) => {
    let money4Children = player.children * 20000
    return player.bankAccount += money4Children
}

const getInsurance (player) => {
    let money4Insurance
    if (player.lifeInsurance === 1) {
        money4Insurance = 300000
    }
    else {
        money4Insurance = 0
    }
    return player.bankAccount += money4Insurance
}

const payBackDebtRetire (player) => {
    let playerDebt
    if (player.loan > 0) {
        playerDebt = 25000 * player.loan
    }
    else {
        playerDebt = 0
    }
    return player.bankAccount -= playerDebt
}


