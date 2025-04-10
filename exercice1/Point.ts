export class Point {
    constructor(private abs: number, private ord: number) {}

    // Accesseurs
    public getAbs(): number {
        return this.abs;
    }

    public getOrd(): number {
        return this.ord;
    }

    // Mutateurs
    public setAbs(abs: number): void {
        this.abs = abs;
    }

    public setOrd(ord: number): void {
        this.ord = ord;
    }

    // Méthode pour calculer la distance entre deux points
    public calculerDistance(p: Point): number {
        const dx = this.abs - p.getAbs();
        const dy = this.ord - p.getOrd();
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}
