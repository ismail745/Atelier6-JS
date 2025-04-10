import { Adresse } from './Adresse';

export class Personne {
    constructor(
        private nom: string,
        private sexe: 'M' | 'F',
        private adresses: Adresse[] = []
    ) {}

    // Accesseurs
    public getNom(): string {
        return this.nom;
    }

    public getSexe(): 'M' | 'F' {
        return this.sexe;
    }

    public getAdresses(): Adresse[] {
        return this.adresses;
    }

    // Mutateurs
    public setNom(nom: string): void {
        this.nom = nom;
    }

    public setSexe(sexe: 'M' | 'F'): void {
        this.sexe = sexe;
    }

    public setAdresses(adresses: Adresse[]): void {
        this.adresses = adresses;
    }

    // Méthode pour ajouter une nouvelle adresse
    public ajouterAdresse(adresse: Adresse): void {
        this.adresses.push(adresse);
    }
}
