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

class Cards {
    constructor () {
        this.career = [["Police", "Mechanic", "Business Owner", "Plumber", "Construction Worker", 
        "Truck Driver"],[ "Teacher", "Doctor", "Engineer", "Scientist", "Lawyer", "Pilot"]]
        this.salary = [35000, 40000, 45000, 44000, 55000, 68000, 74000, 80000, 100000, 225000, 230000]
        this.stock = 10
        this.insurance = ["Auto Insurance", "Life Insurance", "Health Insurance"]
    }
}

class spaces {
    constructor() {
        this.red = 3
        this.orange = 
        this.green
        this.retire = [1, 130]
        this.rich
        this.poor
        this.start
    }
}

let divEL1 = document.querySelector("begin")
let divEL2 = document.querySelector("spinner")
let divEl3 = document.querySelector("gameNotes")


