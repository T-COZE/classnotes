// const letters = {'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j', 'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't', 'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'}
// use letters.shift() somehow.  also, maybe map into an array?
//const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
function newAlphabet(str, shift=0){
    const little = str.toLowerCase()
    const alphabet='abcdefghijklmnopqrstuvwxyz'.split('')
    let result = ""
    for(let i = 0; i<little.length;i++){
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
        const currentIndex = alphabet.indexOf(current)
        let newIndex = currentIndex + shift
        if(newIndex > 25)newIndex = newIndex - 26
        if(newIndex < 0)newIndex = newIndex + 26
        if(str[i]===str[i].toUpperCase()){
         
         result += alphabet[newIndex].toUpperCase()
        }
        else result += alphabet[newIndex]
    }
   return result
}
console.log(newAlphabet("What in the wide world of sports?",1))
console.log(newAlphabet("What in the wide world of sports?",13))

//   }
//   console.log(shifty("Hello World"))
// function caesarCipher(str, shift) {
//     const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//     let result = '';
//     str.split('').forEach(char => {
//       if (char === ' ') {
//         result += ' ';
//       } else {
//         const index = alphabet.indexOf(char.toLowerCase());
//         const newIndex = (index + shift) % 26;
//         result += char === char.toUpperCase() ? alphabet[newIndex].toUpperCase() : alphabet[newIndex];
//       }
//     });
//     return result;
//   }
//   console.log(caesarCipher("Hello World!", 2))