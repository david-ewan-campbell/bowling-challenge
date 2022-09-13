const Frame = require("./frame");

describe("Frame", () => {
  describe(".addRoll", () => {
    it("Can receive a roll", () => {
      const frame = new Frame();
      frame.addRoll(5);
    });

    it("Can receive two rolls", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.rolls.length).toEqual(2);
    });
  });

  describe(".score", () => {
    it('can score an incomplete frame', () => {
      const frame = new Frame();
      frame.addRoll(5);
      expect(frame.score()).toEqual(5);
    });

    it("can score a complete frame", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.score()).toEqual(9);
    });
  });

  describe("strike", () => {
    it("responds false when strike not scored", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.strike()).toEqual(false);
    });

    it("responds true when a strike is scored", () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.strike()).toEqual(true);
    });
  });

  describe("spare", () => {
    it("responds false when spare is not scored", () => {
      const frame = new Frame();
      frame.addRoll(5);
      frame.addRoll(4);
      expect(frame.spare()).toEqual(false);
    });

    it("responds true when a spare is scored", () => {
      const frame = new Frame();
      frame.addRoll(6);
      frame.addRoll(4);
      expect(frame.spare()).toEqual(true);
    });

    it("responds false when a strike is scored", () => {
      const frame = new Frame();
      frame.addRoll(10);
      expect(frame.spare()).toEqual(false);
    });
  });
});
