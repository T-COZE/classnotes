const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const promise = welcome();

const question = "Will the weather be nice today?";

const tellPromise = tell(question);

// // tellPromise.then((fortune)=>{
// //     console.log(question)
// //     console.log(fortune)
// // })
// // .catch(console.error)

// //console.log(promise);
// // welcome()
// // .then((welcomeMessage)=>
// // goodbye().then((goodbyeMessage) => `${welcomeMessage}\n${goodbyeMessage}`))
// // .then(console.log)
// // .catch(console.error)
// // console.log(welcome())

// function getFortune(question) {
//     const tellPromise = tell(question)
//      return tellPromise.then((result)=> {
//       return [`Your question was: ${question}`,
//      `Your fortune is: ${result}`]
//     })
//     .catch((error)=> {
//       return `There was an error: ${error}`
//     })
//   }
// getFortune(question).then(console.log)

// function fullSession(question){
//     fullSend = []
//     return welcome()
//         .then((welcomeMsg)=>{
//             fullSend.push()

// welcome()
//   .then((welcomeMessage) =>
//     {goodbye().then((goodbyeMessage) =>
//     `${welcomeMessage}\n${goodbyeMessage}`)
//     })

// //   .then(console.log) // Logs combines messages

//   .catch(console.error); // Logs error from welcome() or goodbye()
function fullSession(question) {
  fullChat = [];
  welcome()
    .then((welcomeMsg) => {
      fullChat.push(welcomeMsg);
      return tell(question);
    })
    .then((fortune) => {
      fullChat.push(`Your question was:${question}`)
      fullChat.push(`Your fortune is: ${fortune}`);
      return goodbye();
    })
    .catch((error) => {
      fullChat.push(`There was an error: ${error}`);
      return goodbye();
    })
    .then((goodbyeMsg) => {
      fullChat.push(goodbyeMsg);
      return fullChat
    });
}
console.log(fullSession(question))

