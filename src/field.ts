///<reference path="instance.ts"/>
///<reference path="utils/vector2.ts"/>
///<reference path="main.ts"/>
///<reference path="utils/grid.ts"/>

class Field extends Instance {
    private _gridSize: Vector2;
    private _field: Grid<number>;

    constructor(gridSize: Vector2, field: Grid<number>) {
        super();
        this._gridSize = gridSize.copy();
        this._field = field.copy();
    }

    public render(): void {
        for (var i: number = 0; i < this._gridSize.x; i++) {
            for (var j: number = 0; j < this._gridSize.y; j++) {
                if (this._field.get(i, j) == 1) {
                    main.renderer.strokeRect(i + .05, j + .05, .9, .9);
                }
            }
        }
    }
}
