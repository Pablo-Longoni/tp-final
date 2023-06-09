// URL to explain PHASER scene: https://rexrainbow.github.io/phaser3-rex-notes/docs/site/scene/

export default class Menu extends Phaser.Scene {
  constructor() {
    // key of the scene
    // the key will be used to start the scene by other scenes
    super("menu");
  }

  init() {
    // this is called before the scene is created
    // init variables
    // take data passed from other scenes
    // data object param {}
  }

  create() {
    // create game objects
    this.add.image(200, 310, "menu");
  

    //boton de jugar
    const button = this.add.image(290, 450, "jugar")
      .setInteractive();

    button.on("pointerover", () => {
      this.game.canvas.style.cursor = "pointer";
    });

    button.on("pointerout", () => {
      this.game.canvas.style.cursor = "default";
    });

    button.on("pointerdown", () => {
      this.game.canvas.style.cursor = "default";
      this.scene.start("game");
    });
  }

  update() {
    // update game objects
  }
}
