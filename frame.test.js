const Frame = require("./frame");

describe("Frame", () => {
  describe('.addRoll', () => {
    it("Can receive a roll", () => {
      const frame = new Frame();
      frame.addRoll(5);
    });

    it("Can receive two rolls", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(4);
    });
  });
});
