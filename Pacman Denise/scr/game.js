var config = {
    type: Phaser.AUTO.FIT,
    width: 640,
    height: 640,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
        
    },
    scene: [Menu,Mapa1, Mapa2]
};
var game = new Phaser.Game(config);


