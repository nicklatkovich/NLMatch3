///<reference path="../main.ts"/>
///<reference path="../utils/vector2.ts"/>

class CanvasController {
    private canvas: HTMLCanvasElement;
    public surface: CanvasRenderingContext2D;
    private canvasSize: Vector2;
    private cellSize: Vector2;
    private xStart: number;
    private yStart: number;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.surface = this.canvas.getContext("2d");
        this.canvasSize = new Vector2(this.canvas.width, this.canvas.height);
    }

    public getXStart(): number {
        return this.xStart;
    }

    public getYStart(): number {
        return this.yStart;
    }

    public getCellSize(): Vector2 {
        return this.cellSize.copy();
    }

    private resize(newSize: Vector2) {
        this.canvasSize.equate(newSize);
        this.canvas.width = this.canvasSize.x;
        this.canvas.height = this.canvasSize.y;
        if (this.canvas.width / this.canvas.height > main.getMapSize().x / main.getMapSize().y) {
            var cellEdgeSize: number = this.canvas.height / main.getMapSize().y;
            this.cellSize = new Vector2(cellEdgeSize, cellEdgeSize);
            this.xStart = (this.canvas.width - this.cellSize.x * main.getMapSize().x) / 2;
            this.yStart = 0;
        } else {
            var cellEdgeSize: number = this.canvas.width / main.getMapSize().x;
            this.cellSize = new Vector2(cellEdgeSize, cellEdgeSize);
            this.xStart = 0;
            this.yStart = (this.canvas.height - this.cellSize.y * main.getMapSize().y) / 2;
        }
    }

    private resizeToWindowSize(): void {
        var newSize: Vector2 = new Vector2(window.innerWidth, window.innerHeight);
        if (newSize.is(this.canvasSize) == false) {
            this.resize(newSize);
        }
    }

    public startRender(): void {
        this.resizeToWindowSize();
        this.surface.beginPath();
    }

    public endRender(): void {
        this.surface.closePath();
    }
}
