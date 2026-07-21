const Produit = require("./Produit.js");
const Categorie = require("./Categorie.js");
const Marque = require("./Marque.js");
const Ingredient = require("./Ingredient.js");
const Additif = require("./Additif.js");
const Allergene = require("./Allergene.js");

class ProduitBuilder {
    constructor() {
        this._nom = null;
        this._grade = null;
        this._categorieNom = null;
        this._marqueNom = null;
        this._ingredients = [];
        this._additifs = [];
        this._allergenes = [];
    }

    setNom(nom) {
        this._nom = nom;
        return this;
    }

    setGrade(grade) {
        this._grade = grade;
        return this;
    }

    setCategorie(nom) {
        this._categorieNom = nom;
        return this;
    }

    setMarque(nom) {
        this._marqueNom = nom;
        return this;
    }

    addIngredient(nom, qteMilligrammes) {
        this._ingredients.push({ nom, qteMilligrammes });
        return this;
    }

    addAdditif(nom, qteMilligrammes) {
        this._additifs.push({ nom, qteMilligrammes });
        return this;
    }

    addAllergene(nom, qteMilligrammes) {
        this._allergenes.push({ nom, qteMilligrammes });
        return this;
    }

    build() {
        const categorie = new Categorie(this._categorieNom);
        const marque = new Marque(this._marqueNom);
        const ingredients = this._ingredients.map(
            ({ nom, qteMilligrammes }) => new Ingredient(nom, qteMilligrammes)
        );
        const additifs = this._additifs.map(
            ({ nom, qteMilligrammes }) => new Additif(nom, qteMilligrammes)
        );
        const allergenes = this._allergenes.map(
            ({ nom, qteMilligrammes }) => new Allergene(nom, qteMilligrammes)
        );

        return new Produit(
            this._nom,
            this._grade,
            categorie,
            marque,
            ingredients,
            additifs,
            allergenes
        );
    }
}

const produit = new ProduitBuilder()
    .setNom("Jus d'orange")
    .setGrade("A")
    .setCategorie("Boisson")
    .setMarque("Tropicana")
    .addIngredient("Jus de fruit", 250)
    .addIngredient("Eau", 50)
    .addAdditif("Acide ascorbique", 15)
    .addAllergene("Sulfites", 5)
    .build();

console.log(produit.toString());

module.exports = ProduitBuilder;
