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
        this.career = ["Police", "Mechanic", "Business Owner", "Plumber", "Construction Worker", 
        "Truck Driver", "Teacher", "Doctor", "Engineer", "Banker", "Lawyer", "Pilot"]
        this.salary = [35000, 40000, 45000, 44000, 55000, 68000, 74000, 80000, 225000, 230000]
        this.stock = [300, 550, 800, 4000, 27000]
        this.insurance
    }
}

class spaces {
    constructor() {
        this.red = 3
        this.orange = 
        this.green
        this.retire
        this.rich
        this.poor
        this.start
    }
}

let getPlayerName = document.querySelector("begin")
