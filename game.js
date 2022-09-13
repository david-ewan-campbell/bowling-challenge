const Frame = require("./frame");

class Game {
  constructor() {
    this.frames = [new Frame()];
  }

  addRoll(pins) {
    let currentFrame = this.frames[this.frames.length -1];
    if (currentFrame.rolls.length == 2) {
      this.frames.push(new Frame());
      currentFrame = this.frames[this.frames.length -1];
    }
    currentFrame.addRoll(pins);
  }
}

module.exports = Game;
