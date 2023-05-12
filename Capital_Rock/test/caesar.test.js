const caesar = require(".../src/caesar");
const expect = require("chai").expect;

describe("ceasar", () => {
  it("should return false if shift = 0", () => {
    const input = "hello world";
    const shift = 0;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
});

describe("caesar()", () => {
  it("should return false if shift > 25", () => {
    const input= 'bat cave'
    const shift = 26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });



  it("should return false if shift < -25", () => {
    const shift = -26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
});

describe("caesar()", () => {
  it("its should encode a message and leave spaces and symbols as is", () => {
    const input = 'bat cave!'
    const shift = 1;
    const actual = caesar(input,shift)
    const expected = 'cbu dbqf!'
    expect(actual).to.equal(expected)
  });

  it('should ignore uppercase and wrap around alphabet',()=>{
    const input = 'Jazz'
    const shift = 2;
    const actual = caesar(input,shift)
    const expected = 'lcbb'
    expect(actual).to.equal(expected)
  })
  it('should be able to have a negative effect',()=>{
    const input = 'Jazz'
    const shift = -2;
    const actual = caesar(input,shift)
    const expected = 'hyxx'
    expect(actual).to.equal(expected)
  })
})

describe('caesar()',()=>{
    it('should throw in reverse on the shifter',()=>{
    const input = 'hyxx'
    const shift = -2;
    const actual = caesar(input,shift)
    const expected = 'jazz'
    expect(actual).to.equal(expected)
    })

    it('should leave it the !?$% alone',()=>{
    const input = 'cbu dbqf!'
    const shift = 1;
    const actual = caesar(input,shift)
    const expected = 'bat cave!'
    expect(actual).to.equal(expected)
    })

    it('should ignore capital letters and wrap around',()=>{
    const input = 'Lcbb'
    const shift = 2;
    const actual = caesar(input,shift)
    const expected = 'jazz'
    expect(actual).to.equal(expected)
    })

    it('should be able to have a negative effect',()=>{
        const input = 'hyxx'
        const shift = -2;
        const actual = caesar(input,shift)
        const expected = 'jazz'
        expect(actual).to.equal(expected)
    })
})
