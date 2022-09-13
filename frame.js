const { sum } = require("lodash");

class Frame {
  constructor() {
    this.rolls = [];
  }

  addRoll(pins) {
    this.rolls.push(pins);
  }

  score() {
    return sum(this.rolls);
  }

  strike() {
    return this.rolls[0] === 10;
  }
}

module.exports = Frame;
