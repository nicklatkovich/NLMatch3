///<reference path="instance.ts"/>
///<reference path="utils/vector2.ts"/>
///<reference path="main.ts"/>

class Field extends Instance {
    private gridSize: Vector2;

    constructor(gridSize: Vector2) {
        super();
        this.gridSize = gridSize.copy();
    }

    public render(): void {
        for (var i: number = 0; i < this.gridSize.x; i++) {
            for (var j: number = 0; j < this.gridSize.y; j++) {
                main.renderer.strokeRect(i + .1, j + .1, .8, .8);
            }
        }
    }
}
