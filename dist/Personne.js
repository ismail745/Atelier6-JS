"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(nom, sexe, adresses = []) {
        this.nom = nom;
        this.sexe = sexe;
        this.adresses = adresses;
    }
    // Getters
    getNom() {
        return this.nom;
    }
    getSexe() {
        return this.sexe;
    }
    getAdresses() {
        return this.adresses;
    }
    // Setters
    setNom(nom) {
        this.nom = nom;
    }
    setSexe(sexe) {
        this.sexe = sexe;
    }
    setAdresses(adresses) {
        this.adresses = adresses;
    }
    // Method to add a new address
    ajouterAdresse(adresse) {
        this.adresses.push(adresse);
    }
}
exports.Personne = Personne;
