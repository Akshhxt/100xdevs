const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const isPalindrome = str => {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
};
rl.question('Enter a string: ', userInput => {
  const result = isPalindrome(userInput);
  console.log(`Is it a palindrome? ${result}`);
  rl.close();
});
