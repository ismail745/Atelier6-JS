import { Adresse } from './Adresse';
import { Personne } from './Personne';
import { ListePersonnes } from './ListePersonnes';

// Test des classes de l'exercice 2
console.log('Test des classes de l\'exercice 2:');

// Création des adresses
const adresse1 = new Adresse('123 Rue A', 'Paris', '75001');
const adresse2 = new Adresse('456 Rue B', 'Lyon', '69001');
const adresse3 = new Adresse('789 Rue C', 'Paris', '75002');

// Création des personnes
const personne1 = new Personne('Jean Dupont', 'M', [adresse1]);
const personne2 = new Personne('Marie Martin', 'F', [adresse2]);
const personne3 = new Personne('Pierre Durant', 'M', [adresse3]);

// Ajout d'une deuxième adresse à personne1
personne1.ajouterAdresse(adresse2);

// Création de la liste de personnes
const liste = new ListePersonnes([personne1, personne2, personne3]);

// Test de trouverParNom
console.log('\nTest de trouverParNom:');
const personnetrouvee = liste.trouverParNom('Marie Martin');
console.log('Personne trouvée par le nom "Marie Martin":', personnetrouvee ? personnetrouvee.getNom() : 'Non trouvée');

// Test de trouverParCodePostal
console.log('\nTest de trouverParCodePostal:');
console.log('Personne avec le code postal 75001 existe:', liste.trouverParCodePostal('75001'));
console.log('Personne avec le code postal 00000 existe:', liste.trouverParCodePostal('00000'));

// Test de compterPersonnesParVille
console.log('\nTest de compterPersonnesParVille:');
console.log('Nombre de personnes à Paris:', liste.compterPersonnesParVille('Paris'));
console.log('Nombre de personnes à Lyon:', liste.compterPersonnesParVille('Lyon'));
