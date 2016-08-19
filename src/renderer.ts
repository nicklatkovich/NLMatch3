///<reference path="controllers/canvas_controller.ts"/>

class Renderer {

    private canvasController: CanvasController;

    constructor(canvasController: CanvasController) {
        this.canvasController = canvasController;
    }

    private getSurf(): CanvasRenderingContext2D {
        return this.canvasController.surface;
    }

    private getXStart(): number {
        return this.canvasController.getXStart();
    }

    private getYStart(): number {
        return this.canvasController.getYStart();
    }

    private getCellSize(): Vector2 {
        return this.canvasController.getCellSize();
    }

    public strokeRect(x: number, y: number, width: number, height: number): void {
        this.getSurf().strokeRect(
            x * this.getCellSize().x + this.getXStart(),
            y * this.getCellSize().y + this.getYStart(),
            width * this.getCellSize().x, height * this.getCellSize().y
        );
        this.getSurf().stroke();
    }
}
