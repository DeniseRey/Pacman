class Mapa1 extends Phaser.Scene {
    constructor() {
      super({ key:'Mapa1'});
    }

    preload (){
        this.load.tilemapTiledJSON('map', 'assets/mapa1/map1.json');
        this.load.image('tiles', 'assets/mapa1/tiles_pacman.png');
        this.load.image('pacman', 'assets/pacman.jpg');
    }

    create (){
        var map = this.make.tilemap({ key: 'map' });
        var tiles = map.addTilesetImage('tiles_pacman', 'tiles');
        var layer = map.createDynamicLayer(0, tiles, 0, 0).setCollisionByExclusion([-1]);

        var player = this.physics.add.image(32+16, 32+16, 'pacman').setScale(0.9);
        player.setCollideWorldBounds(true);

        this.physics.add.collider(player, layer);

        this.input.keyboard.on('keydown_D', function (event) {
            player.body.setVelocityX(160);
    
        });
        this.input.keyboard.on('keydown_A', function (event) {
            player.body.setVelocityX(-160);
    
        });
        this.input.keyboard.on('keydown_W', function (event) {
            player.body.setVelocityY(-160);
    
        });
        this.input.keyboard.on('keydown_S', function (event) {
            player.body.setVelocityY(160);
    
        });

    }
}