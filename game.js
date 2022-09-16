const Frame = require("./frame");

class Game {
  constructor() {
    this.frames = [new Frame()];
  }

  addRoll(pins) {
    if (this.#currentFrame.complete()) {
      this.frames.push(new Frame());
    }
    this.#currentFrame.addRoll(pins);
  }

  score() {
    let score = 0;
    for (let i = 0; i < this.frames.length; i++) {
      const frame = this.frames[i];
      const nextFrame = this.frames[i + 1];
      score += frame.score(nextFrame?.rolls[0]);
      }
    // console.log("score:", score);
    // console.log("frame.score():", frame.score());
    return score;
  }

  get #currentFrame() {
    return this.frames[this.frames.length -1];
  }
}

module.exports = Game;
