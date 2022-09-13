const Game = require("./game");

describe("Game", () => {
  describe(".addRoll", () => {
    it("can receive a roll", () => {
      const game = new Game;
      game.addRoll(5);
    });

    it("should have multiple frames when necessary", () => {
      const game = new Game;
      game.addRoll(1);
      game.addRoll(1);
      game.addRoll(1);
      expect(game.frames.length).toEqual(2);
    });
  });
});
