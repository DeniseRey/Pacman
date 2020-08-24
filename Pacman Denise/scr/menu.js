class Menu extends Phaser.Scene {
    constructor() {
      super({ key:'Menu'});
    }
    
    preload(){
        this.load.image('lvl1', 'assets/lvl1.png');
        this.load.image('lvl2', 'assets/lvl2.png');
    }

    create(){
        var lvl1= this.add.image(192, 320, 'lvl1').setInteractive();
        var lvl2= this.add.image(384, 320, 'lvl2').setInteractive();

        this.add.text(192, 224,'Selecciona el nivel:')

        lvl1.on("pointerdown", () => {
            this.scene.start('Mapa1');
        });

        lvl2.on("pointerdown", () => {
            this.scene.start('Mapa2');
        });
    }
}