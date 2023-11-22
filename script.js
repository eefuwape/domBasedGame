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
//     retire : 121,
//     bridge : 1,
//     lucky : 3,
//     market : 3,
//     millionaire : 1,
//     farm : 1
// }

btn = document.querySelector("button")
btn.addEventListener("click", startGame)



const redSpaces = [11, 15, 26]
const greenSpaces = [[2, 5, 13, 22, 27, 33, 39, 45, 50, 58, 65, 70, 78, 86, 92, 99, 106, 111, 117], [4], [2]]
const forkInDRoad = [0, 33, 63]
const blueSpaces = [[16, 41, 47, 54, 68, 81, 94, 105], [2, 6]]

let divEL1 = document.querySelector("begin")
let divEL2 = document.querySelector("spinner")
let divEl3 = document.querySelector("gameNotes")

const imgEl = document.querySelector("dice")

const startGame = () => {
    btn.setAttribute("disabled", "")
    const playerInfo = document.getElementById("playerInfo")
    playerInfo.style.visibility = "visible"
    const inputp1 = document.querySelector("input")
    inputp1.addEventListener("click", getPlayerNames)    
    playerInfo.style.display = "none"
}

const getPlayerNames = () => {
    let player1Name = document.getElementByID("player1Name").value
    let player2Name = document.getElementByID("player2Name").value
    const player1 = new Player(player1Name)
    const player2 = new Player(player2Name)
}



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
        if (player1.position >= 121 && player2.position >= 121) {
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

const getPlayerWinnings = (player) => {
    let winnings = player.bankAccount 
}