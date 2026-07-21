const Enceinte = require("./Enceinte");
const ObjetConnecte = require("./ObjetConnecte");
const Tablette = require("./Tablette");
const Telephone = require("./Telephone");

class Factory {

    static getInstance(type, limiteVolts) {
        switch (type) {
            case 'tablette':
                return new Tablette(limiteVolts);
            case 'telephone':
                return new Telephone(limiteVolts);
            case 'enceinte':
                return new Enceinte(limiteVolts);
            default:
                throw new Error(`Type invalide: ${type}`);
        }
    }

    static createTablette(limiteVolts) {
        return new Tablette(limiteVolts);
    }

    static createTelephone(limiteVolts) {
        return new Telephone(limiteVolts);
    }

    static createEnceinte(limiteVolts) {
        return new Enceinte(limiteVolts);
    }
}

const objetConnecte = Factory.getInstance('tablette', 9);
console.log(objetConnecte.toString());

const objetConnecte2 = Factory.getInstance('telephone', 12);
console.log(objetConnecte2.toString());

const objetConnecte3 = Factory.getInstance('enceinte', 15);
console.log(objetConnecte3.toString());

module.exports = Factory;