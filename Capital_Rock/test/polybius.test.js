const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe('polybius',()=>{
    it('should encode a message by turning single letters into number couples! omg!',()=> {
        const input = 'message'
        const actual = polybius(input);
        const expected = "23513434112251";
  
        expect(actual).to.equal(expected);
    })

    it('should make i and j share a space',()=>{
        const input = "jive";
        const actual = polybius(input);
        const expected = "42421551";
  
        expect(actual).to.equal(expected);
    });

    it('should leave space alone',()=>{
        const input= 'i am'
        const actual = polybius(input)
        const expected = '42 1123'

        expect(actual).to.equal(expected);
    })
})

describe('decoding number strings => letters',()=>{
    it('should turn number couples into single letters',()=>{
        const input = "23113434112251";
        const actual = polybius(input, false);
        const expected = "massage";
  
        expect(actual).to.equal(expected);
    })

    it('should not know the difference between i and j ',()=>{
        const input = "424222221351";
        const actual = polybius(input, false);
  
        expect(actual).to.include("i");
        expect(actual).to.include("j");
      });

      it('should appreciate the space needed',()=>{
        const message = "2345 23513434112251";
        const actual = polybius(input, false);
        const expected = "my message";
  
        expect(actual).to.equal(expected);
      })

      it('returns false if the number of numbers is odd',()=>{
        const input = "2345 235134341122514";
        const actual = polybius(input, false);
  
        expect(actual).to.be.false;
      })
    })




