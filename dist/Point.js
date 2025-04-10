"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    // Getters
    getAbs() {
        return this.abs;
    }
    getOrd() {
        return this.ord;
    }
    // Setters
    setAbs(abs) {
        this.abs = abs;
    }
    setOrd(ord) {
        this.ord = ord;
    }
    // Method to calculate distance between two points
    calculerDistance(p) {
        const dx = this.abs - p.getAbs();
        const dy = this.ord - p.getOrd();
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}
exports.Point = Point;
