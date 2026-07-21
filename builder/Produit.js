class Produit {
    constructor(nom, grade, categorie, marque, ingredients = [], additifs = [], allergenes = []) {
        this.nom = nom;
        this.grade = grade;
        this.categorie = categorie;
        this.marque = marque;
        this.ingredients = ingredients;
        this.additifs = additifs;
        this.allergenes = allergenes;
    }

    getNom() {
        return this.nom;
    }

    getGrade() {
        return this.grade;
    }

    getCategorie() {
        return this.categorie;
    }

    getMarque() {
        return this.marque;
    }

    getIngredients() {
        return this.ingredients;
    }

    getAdditifs() {
        return this.additifs;
    }

    getAllergenes() {
        return this.allergenes;
    }

    toString() {
        const ingredients = this.ingredients
            .map((i) => `${i.getNom()} (${i.getQteMilligrammes()} mg)`)
            .join(", ");
        const additifs = this.additifs
            .map((a) => `${a.getNom()} (${a.getQteMilligrammes()} mg)`)
            .join(", ");
        const allergenes = this.allergenes
            .map((a) => `${a.getNom()} (${a.getQteMilligrammes()} mg)`)
            .join(", ");

        return [
            `Produit: ${this.nom}`,
            `Grade: ${this.grade}`,
            `Catégorie: ${this.categorie.getNom()}`,
            `Marque: ${this.marque.getNom()}`,
            `Ingrédients: ${ingredients || "aucun"}`,
            `Additifs: ${additifs || "aucun"}`,
            `Allergènes: ${allergenes || "aucun"}`,
        ].join("\n");
    }
}

module.exports = Produit;
