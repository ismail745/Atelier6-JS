import { Personne } from './Personne';

export class ListePersonnes {
    constructor(private personnes: Personne[] = []) {}

    // Accesseur
    public getPersonnes(): Personne[] {
        return this.personnes;
    }

    // Mutateur
    public setPersonnes(personnes: Personne[]): void {
        this.personnes = personnes;
    }

    // Méthode pour trouver une personne par son nom
    public trouverParNom(nom: string): Personne | null {
        return this.personnes.find(p => p.getNom() === nom) || null;
    }

    // Méthode pour vérifier si une personne a le code postal donné
    public trouverParCodePostal(cp: string): boolean {
        return this.personnes.some(p => 
            p.getAdresses().some(a => a.getCodePostal() === cp)
        );
    }

    // Méthode pour compter le nombre de personnes dans une ville
    public compterPersonnesParVille(ville: string): number {
        return this.personnes.filter(p => 
            p.getAdresses().some(a => a.getVille() === ville)
        ).length;
    }
}
