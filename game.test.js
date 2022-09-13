const Game = require("./game");

describe("Game", () => {
  describe(".addRoll", () => {
    it("can receive a roll", () => {
      const game = new Game;
      game.addRoll(5);
    });
  });
});
