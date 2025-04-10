import { Point } from './Point';

// Test de la classe Point
console.log('Test de la classe Point:');

// Création de deux points
const point1 = new Point(0, 0);
const point2 = new Point(3, 4);

// Test des accesseurs
console.log('\nTest des accesseurs:');
console.log(`Coordonnées du point1: (${point1.getAbs()}, ${point1.getOrd()})`);
console.log(`Coordonnées du point2: (${point2.getAbs()}, ${point2.getOrd()})`);

// Test des mutateurs
console.log('\nTest des mutateurs:');
point1.setAbs(1);
point1.setOrd(1);
console.log(`Nouvelles coordonnées du point1: (${point1.getAbs()}, ${point1.getOrd()})`);

// Test du calcul de distance
console.log('\nTest du calcul de distance:');
const distance = point1.calculerDistance(point2);
console.log(`Distance entre point1(1,1) et point2(3,4): ${distance}`);
// Distance attendue ≈ 3.605551275463989
