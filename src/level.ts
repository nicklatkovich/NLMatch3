class Level {
    private _width: number;
    private _height: number;

    public width(): number {
        return this._width;
    }

    public height(): number {
        return this._height;
    }

    constructor(description: string) {
        var lines: Array<string> = description.split("\n");
        this._width = parseInt(lines[0]);
        this._height = parseInt(lines[1]);
    }
}