const { expect } = require("chai");
const { caesar } = require("../src/caesar")

describe('error handling', () =>{
  it("should return false if shift = 0", () => {
    const input = "hello world";
    const shift = 0;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });



  it("should return false if shift > 25", () => {
    const input= 'bat cave'
    const shift = 26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });



  it("should return false if shift < -25", () => {
    const input = 'I am'
    const shift = -26;
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
  });
});

describe("encoding", () => {
  it("its should encode a message and leave spaces and symbols as is", () => {
    const input = 'bat cave!'
    const shift = 1;
    const actual = caesar(input,shift)
    const expected = 'cbu dbwf!'
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

describe('decoding',()=>{
    it('should throw in reverse on the shifter',()=>{
    const input = 'jazz'
    const shift = -2;
    const actual = caesar(input,shift)
    const expected = 'hyxx'
    expect(actual).to.equal(expected)
    })

    it('should leave it the !?$% alone',()=>{
    const input = 'bats!'
    const shift = 1;
    const actual = caesar(input,shift)
    const expected = 'cbut!'
    expect(actual).to.equal(expected)
    })

    it('should ignore capital letters and wrap around',()=>{
    const input = 'jazz'
    const shift = 2;
    const actual = caesar(input,shift)
    const expected = 'lcbb'
    expect(actual).to.equal(expected)
    })

    it('should be able to have a negative effect',()=>{
        const input = 'jazz'
        const shift = -2;
        const actual = caesar(input,shift)
        const expected = 'hyxx'
        expect(actual).to.equal(expected)
    })
})
