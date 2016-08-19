///<reference path="controllers/canvas_controller.ts"/>
///<reference path="renderer.ts"/>
///<reference path="instance.ts"/>
///<reference path="field.ts"/>
///<reference path="file_reader.ts"/>

var main: Main = null;

class Main {
    private document: HTMLDocument;
    public canvasController: CanvasController;
    private mapSize: Vector2;
    private interval: number;
    public renderer: Renderer;
    private instances: Array<Instance> = new Array<Instance>();

    constructor() {
        this.document = document;
        this.mapSize = new Vector2(8, 8);
        this.canvasController = new CanvasController(this.getCanvas("draw"));
        this.interval = setInterval(this.render.bind(this), 17);
        this.renderer = new Renderer(this.canvasController);
        this.instanceCreate(new Field(this.getMapSize()));
    }

    public render(): void {
        this.canvasController.startRender();
        for (var i: number = 0; i < this.instances.length; i++) {
            this.instances[i].render();
        }
        this.canvasController.endRender();
    }

    public instanceCreate(instance: Instance): void {
        for (var i: number = 0; i < this.instances.length; i++) {
            if (instance == this.instances[i]) {
                return;
            }
        }
        this.instances.push(instance);
    }

    public getMapSize(): Vector2 {
        return this.mapSize.copy();
    }

    private getCanvas(id: string): HTMLCanvasElement {
        var canvases: Array<HTMLCanvasElement> = this.getAllCanvases();
        for (var i = 0; i < canvases.length; i++) {
            if (canvases[i].id == id) {
                return canvases[i];
            }
        }
        throw new Error("canvas " + id + " is not exist");
    }

    private getAllCanvases(): Array<HTMLCanvasElement> {
        var result: Array<HTMLCanvasElement> = [];
        var nodeListOfCanvas: NodeListOf<HTMLCanvasElement> = this.document.getElementsByTagName("canvas");
        for (var i = -1, length = nodeListOfCanvas.length; ++i != length;) {
            result.push(nodeListOfCanvas[i])
        }
        return result;
    }
}

window.onload = function () {
    main = new Main();
};
