"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adresse = void 0;
class Adresse {
    constructor(rue, ville, codePostal) {
        this.rue = rue;
        this.ville = ville;
        this.codePostal = codePostal;
    }
    // Getters
    getRue() {
        return this.rue;
    }
    getVille() {
        return this.ville;
    }
    getCodePostal() {
        return this.codePostal;
    }
    // Setters
    setRue(rue) {
        this.rue = rue;
    }
    setVille(ville) {
        this.ville = ville;
    }
    setCodePostal(codePostal) {
        this.codePostal = codePostal;
    }
}
exports.Adresse = Adresse;
