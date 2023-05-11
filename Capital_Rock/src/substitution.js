// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function decode(input,alphabet) {
  //   // if(!alphabet || alphabet.length !== 26
  //   //    || alphabet.length !== new Set (alphabet) .size){
  //   //   return false
  //   // }
     
    let message = ""
  //   // loop through input
     for(let i=0;i<input.length;i++){
         let letter = input[i]
  //       //again, spaces
        if(letter === " "){
            message += " "
             continue   //<-- still my new best friend
         }
  //       //symbols !@#$%^&*()? etc
          let LetterIdx = alphabet
         .indexOf(letter.toLowerCase())
         if(LetterIdx ===-1){
             message += letter
             continue
        }
  //       // build the wonky input version of reg input
       let newLetter ='abcdefghijklmnopqrstuvwxyz'[LetterIdx]
         message += newLetter
      }
       return message  
    }
    
  //   return message
    
  // }
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !== 26
       || alphabet.length !== new Set (alphabet) .size){
      return false 
    }
     if(encode === false){
      return decode(input, alphabet)
     }   //return decode()
    let wonky = ""
    // loop through input
    for(let i=0;i<input.length;i++){
        let letter = input[i]
        //again, spaces
        if(letter === " "){
            wonky += " "
            continue   //<-- still my new best friend
        }
        //symbols !@#$%^&*()? etc
        let regLetterIdx = 'abcdefghijklmnopqrstuvwxyz'
        .indexOf(letter.toLowerCase())
        if(regLetterIdx ===-1){
            wonky += letter
            continue
        }
        // build the wonky input version of reg input
       let wonkyLetter = alphabet[regLetterIdx]
        wonky += wonkyLetter
    }
    return wonky
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
