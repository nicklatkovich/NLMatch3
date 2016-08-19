///<reference path="utils/grid.ts"/>

class Level {
    private _width: number;
    private _height: number;
    private _levelType: string;
    private _field: Grid<boolean>;

    public width(): number {
        return this._width;
    }

    public height(): number {
        return this._height;
    }

    public levelType(): string {
        return this._levelType;
    }

    constructor(description: string) {
        var lines: Array<string> = description.split('\n');
        this._width = parseInt(lines[0]);
        this._height = parseInt(lines[1]);
        this._levelType = lines[2];
        this._field = new Grid<boolean>(this.width(), this.height());
        var n: number = -1;
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].indexOf("field") == 0) {
                n = i + 1;
                break;
            }
        }
        if (n != -1) {
            for (var i: number = 0; i < this.height(); i++) {
                for (var j: number = 0; j < this.width(); j++) {
                    this._field.set(j, i, lines[n].charAt(j) == "1");
                }
                n++;
            }
        }
    }

    public field(): Grid<boolean> {
        return this._field.copy();
    }
}
