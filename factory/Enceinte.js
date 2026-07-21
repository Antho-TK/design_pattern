const ObjetConnecte = require("./ObjetConnecte");

class Enceinte extends ObjetConnecte {
    constructor(limiteVolts) {
        super(limiteVolts);
    }

    toString() {
        return `Enceinte: ${this.limiteVolts} volts`;
    }
}

module.exports = Enceinte;