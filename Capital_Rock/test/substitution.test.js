const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() errors", () => {
  it("return false with no cipher alphabet", () => {
    const input = "howdy";
    const actual = substitution(input);
    expect(actual).to.be.false;
  });

  it("should be false if alphabet > 26 characters", () => {
    const input = "avocado";
    const alphabet = "abc";
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
  });

  it("should return false with repeating characters", () => {
    const input = "hootyhoo";
    const alphabet = "aabbcc";
    const actual = substitution(input, alphabet);

    expect(actual).to.be.false;
  });
});
describe("encoding the message i.e. input", () => {
  it("should encode text by using a sub alphabet", () => {
    const input = "message";
    const alphabet = "plmoknijbuhvygctfxrdzeswaq";
    const actual = substitution(input, alphabet);
    const expected = "ykrrpik";

    expect(actual).to.equal(expected);
  });

  it("should work with any key as long as characters do not repeat", () => {
    const input = "message";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet);
    const expected = "ysii.rs";

    expect(actual).to.equal(expected);
  });

  it("should maintain spaces", () => {
    const input = "my message";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet);
    const expected = "yp ysii.rs";

    expect(actual).to.equal(expected);
  });
});

describe('decoding the code',()=>{
    it('should turn code into message',()=>{
      const input = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(input, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    })

    it('should work so long as alphabet does not repeat characters',()=>{
      const input = "ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    })

    it('should maintain spaces',()=>{
      const input = "yp ysii.rs";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, false);
      const expected = "my message";

      expect(actual).to.equal(expected);
    })
})