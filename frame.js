const { sum } = require("lodash");

class Frame {
  constructor() {
    this.rolls = [];
  }

  addRoll(pins) {
    this.rolls.push(pins);
  }

  score(nextRoll = 0) {
    if (this.spare()) {
      return sum(this.rolls) + nextRoll;
    }
    return sum(this.rolls);
  }

  strike() {
    return this.rolls[0] === 10;
  }

  spare() {
    if (this.strike()) return false;
    return this.rolls[0] + this.rolls[1] === 10;
  }

  complete() {
    return this.rolls.length === 2 || this.strike();
  }
}

module.exports = Frame;
