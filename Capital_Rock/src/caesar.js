// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
 
  // function caesar(input, shift, encode = true) {
  //   if(!shift ||-25<shift>25 || shift===0){
  //     return false 
     function caesar(input, shift,encode = true){
      if(!shift ||shift> 25||shift<-25 || shift===0){   // <--- writing shift nullifiers, 
        return false
      }
      if(encode === false){    // < encode is false, so write a decode statement
        shift = -shift
      }
      const little = input.toLowerCase()                       // main code block start with making everything little
      const alphabet='abcdefghijklmnopqrstuvwxyz'.split('')   // make letters into array to loop through, over, whatever
      let result = ""                                         // set result empty return string
      for(let i = 0; i<little.length;i++){                   //loop, deal with spaces, return capitals and deal with symbols
          let current = little[i]
          if(current === " ") {
              result += current
            continue 
          }
          if(current.toLowerCase()===current.toUpperCase())       
          {
              result += current
            continue 
          }
          const currentIndex = alphabet.indexOf(current)    // figure out the whole wrap thing
          let newIndex = currentIndex + shift
          if(newIndex > 25)newIndex = newIndex - 26
          if(newIndex < 0)newIndex = newIndex + 26
          // if(input[i]===input[i].toUpperCase()){
           result += alphabet[newIndex]
          //  result += alphabet[newIndex].toUpperCase()
          // }
          // else 
      }
     return result
  }

 
return {
  caesar
}
})();

module.exports = { caesar: caesarModule.caesar };

// To write a Caesar cipher code in JavaScript using .map(), you can follow these steps:

// Define a string variable containing the alphabet in order.
// Define a function that takes a character and a shift amount as parameters.
// Inside the function, use .indexOf() to find the index of the character in the alphabet string.
// Add the shift amount to the index and use the modulo operator % to wrap around the alphabet if necessary.
// Use the new index to retrieve the shifted character from the alphabet string.
// Return the shifted character.
// Define another function that takes a string and a shift amount as parameters.
// Inside the function, split the string into an array of characters using .split('').
// Use .map() to apply the first function to each character in the array.
// Join the array back into a string using .join('').
// Return the resulting string.
// Here's an example implementation:

// javascript
// Copy code
// const alphabet = 'abcdefghijklmnopqrstuvwxyz';

// function shiftChar(char, shiftAmount) {
//   const index = alphabet.indexOf(char.toLowerCase());
//   if (index === -1) {
//     return char;
//   }
//   const shiftedIndex = (index + shiftAmount) % alphabet.length;
//   const shiftedChar = alphabet[shiftedIndex];
//   return char.toUpperCase() === char ? shiftedChar.toUpperCase() : shiftedChar;
// }

// function caesarCipher(text, shiftAmount) {
//   const chars = text.split('');
//   const shiftedChars = chars.map((char) => shiftChar(char, shiftAmount));
//   return shiftedChars.join('');
// }