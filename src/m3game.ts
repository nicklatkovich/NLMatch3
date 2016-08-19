///<reference path="file_reader.ts"/>
///<reference path="level.ts"/>
///<reference path="main.ts"/>
///<reference path="field.ts"/>


class M3Game {
    private levelNumb: number;
    private levelDescription: string;
    public level: Level;

    constructor(levelNumb: number) {
        this.levelNumb = levelNumb;
        this.levelDescription = FileTextReader.read("levels/lvl_" + this.levelNumb + ".lvl");
        this.level = new Level(this.levelDescription);
    }

    public start(): void {
        main.instanceCreate(new Field(new Vector2(this.level.width(), this.level.height())));
    }
}
