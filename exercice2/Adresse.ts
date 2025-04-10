export class Adresse {
    constructor(
        private rue: string,
        private ville: string,
        private codePostal: string
    ) {}

    // Accesseurs
    public getRue(): string {
        return this.rue;
    }

    public getVille(): string {
        return this.ville;
    }

    public getCodePostal(): string {
        return this.codePostal;
    }

    // Mutateurs
    public setRue(rue: string): void {
        this.rue = rue;
    }

    public setVille(ville: string): void {
        this.ville = ville;
    }

    public setCodePostal(codePostal: string): void {
        this.codePostal = codePostal;
    }
}
