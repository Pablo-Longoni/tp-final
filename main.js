import Menu from "./src/scenes/Menu.js";
import Precarga from "./src/scenes/Precarga.js";
import Game from "./src/scenes/Game.js";
import GameOver from "./src/scenes/GameOver.js";
import Game2 from "./src/scenes/Game2.js";
import Game3 from "./src/scenes/Game3.js";
import Game4 from "./src/scenes/Game4.js";
import Game5 from "./src/scenes/Game5.js";
// Create a new Phaser config object
const config = {
  type: Phaser.AUTO,
  width: 400,
  height: 620,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 400,
      height: 620,
    },
    max: {
      width: 400,
      height: 1240,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  // List of scenes to load
  // Only the first scene will be shown
  // Remember to import the scene before adding it to the list
  scene: [Precarga, Menu, Game, Game2, Game3, Game4, Game5,  GameOver],
};

// Create a new Phaser game instance
window.game = new Phaser.Game(config);
