const { input } = require('@inquirer/prompts');

const userInput =  input({ message: 'Enter array method to search for' }
).then(userInput =>
   console.log(`Hello ${userInput}`)
   )