import Phaser from 'phaser'
//import {GameScene} from "../scenes/gameScene";

let config = {
    width : window.innerWidth,
    height : window.innerHeight,
    type : Phaser.AUTO,
    autoResize : true,
    scene : {
        create
    }
};

let game = new Phaser.Game(config);
let text;
function create() {
    text = this.add.text(10, 10, 'Hello, World!', { font: '48px Arial', fill: '#ffee00' });
}
