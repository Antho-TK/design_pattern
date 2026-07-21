const ObjetConnecte = require("./ObjetConnecte");

class Telephone extends ObjetConnecte {
    constructor(limiteVolts) {
        super(limiteVolts);
    }

    toString() {
        return `Telephone: ${this.limiteVolts} volts`;
    }
}

module.exports = Telephone;