class Ingredient {
    constructor(nom, qteMilligrammes) {
        this.nom = nom;
        this.qteMilligrammes = qteMilligrammes;
    }

    getNom() {
        return this.nom;
    }

    getQteMilligrammes() {
        return this.qteMilligrammes;
    }
}

module.exports = Ingredient;
