class ObjetConnecte {
    constructor(limiteVolts) {
        this.limiteVolts = limiteVolts;
    }

    toString() {
        return `ObjetConnecte: ${this.limiteVolts} volts`;
    }
}

module.exports = ObjetConnecte;