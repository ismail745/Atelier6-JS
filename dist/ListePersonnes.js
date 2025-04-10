"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListePersonnes = void 0;
class ListePersonnes {
    constructor(personnes = []) {
        this.personnes = personnes;
    }
    // Getter
    getPersonnes() {
        return this.personnes;
    }
    // Setter
    setPersonnes(personnes) {
        this.personnes = personnes;
    }
    // Method to find a person by name
    findByNom(s) {
        return this.personnes.find(p => p.getNom() === s) || null;
    }
    // Method to find if any person has the given postal code
    findByCodePostal(cp) {
        return this.personnes.some(p => p.getAdresses().some(a => a.getCodePostal() === cp));
    }
    // Method to count people living in a specific city
    countPersonneVille(ville) {
        return this.personnes.filter(p => p.getAdresses().some(a => a.getVille() === ville)).length;
    }
}
exports.ListePersonnes = ListePersonnes;
