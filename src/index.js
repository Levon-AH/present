import Phaser from 'phaser'
import {SceneA} from "../scenes/SceneA";
import {SceneB} from "../scenes/SceneB";

let config = {
    width : window.innerWidth,
    height : window.innerHeight,
    type : Phaser.AUTO,
    autoResize : true,
    scene : [
        SceneA, SceneB
    ]
};

let game = new Phaser.Game(config);

