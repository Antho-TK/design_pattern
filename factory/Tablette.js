const ObjetConnecte = require("./ObjetConnecte");

class Tablette extends ObjetConnecte {
    constructor(limiteVolts) {
        super(limiteVolts);
    }

    toString() {
        return `Tablette: ${this.limiteVolts} volts`;
    }
}

module.exports = Tablette;