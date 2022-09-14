const Game = require("./game");

describe("Game", () => {
  describe(".addRoll", () => {
    it("can receive a roll", () => {
      const game = new Game();
      game.addRoll(5);
    });

    it("should have multiple frames when necessary", () => {
      const game = new Game();
      game.addRoll(1);
      game.addRoll(1);
      game.addRoll(1);
      expect(game.frames.length).toEqual(2);
    });

    it("should have multiple frames when necessary, including strikes", () => {
      const game = new Game();
      game.addRoll(10);
      game.addRoll(1);
      expect(game.frames.length).toEqual(2);
    });
  });

  describe(".score", () => {
    it("can score in a game with a single roll", () => {
        const game = new Game();
        game.addRoll(4);
        expect(game.score()).toEqual(4);    
    });

    it("can score in a game with a single roll", () => {
      const game = new Game();
      game.addRoll(4);
      game.addRoll(4);
      game.addRoll(4);
      expect(game.score()).toEqual(12);    
    });
  });
});
