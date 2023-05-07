const { welcome, goodbye, tell } = require("../utils/fortune-teller");

async function getFortune(question) {
 try { 
  const response = await tell(question)
      console.log(`Your question was: ${question}`);
      console.log(`Your fortune is: ${response}`);
    }
    catch(err) {
      console.log(`There was an error: ${err}`);
    };
}

async function fullSession(question) {
try {
  
   let fully = await welcome()
    console.log(fully)
    await getFortune(question)
    let byebye = await goodbye()
        console.log(byebye)
  }  catch (err) {
      console.log(`There was an error: ${err}`);
    }
   
}
module.exports = { getFortune, fullSession };
