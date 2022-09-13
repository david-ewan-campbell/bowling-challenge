const Frame = require("./frame");

class Game {
  constructor() {
    this.frames = [new Frame()];
  }

  addRoll(pins) {
    let currentFrame = this.#getCurrentFrame();
    if (currentFrame.rolls.length == 2) {
      this.frames.push(new Frame());
      currentFrame = this.#getCurrentFrame();
    }
    currentFrame.addRoll(pins);
  }

  #getCurrentFrame() {
    return this.frames[this.frames.length -1];
  }
}

module.exports = Game;
