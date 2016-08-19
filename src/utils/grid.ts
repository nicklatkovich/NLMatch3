class Grid<T> {
    private _width;
    private _height;
    private _grid: Array< Array<T> >;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
        this._grid = new Array(this.width());
        for (var i = 0; i < this.width(); i++) {
            this._grid[i] = new Array(this.height());
            for (var j = 0; j < this.height(); j++) {
                this._grid[i][j] = null;
            }
        }
    }

    public width(): number {
        return this._width;
    }

    public height(): number {
        return this._height;
    }

    public get(x: number, y: number): T {
        return this._grid[x][y];
    }

    public set(x: number, y: number, value: T) {
        this._grid[x][y] = value;
    }

    public copy(): Grid<T> {
        var result: Grid<T> = new Grid<T>(this.width(), this.height());
        for (var i = 0; i < this.width(); i++) {
            for (var j = 0; j < this.height(); j++) {
                result.set(i, j, this.get(i, j));
            }
        }
        return result;
    }
}