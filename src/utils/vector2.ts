class Vector2 {
    public x;
    public y;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public is(vector: Vector2): boolean {
        return (this.x == vector.x && this.y == vector.y);
    }

    public equate(vector: Vector2) {
        this.x = vector.x;
        this.y = vector.y;
    }

    public copy() {
        return new Vector2(this.x, this.y);
    }
}
