function isPalindrome(word) {
  // Write your algorithm here
/* Problem statement : Find out if a word reads the same way forward and backwards*/

// Remove white spaces that are before and after received string
const normalWord = word.trim();
// Convert word to lower case
const lowercaseWord = normalWord.toLowerCase();

const normalWordArray = lowercaseWord.split('');
const reversedWordArray = [];
for(const letter of normalWordArray){

  reversedWordArray.unshift(letter);

}

const reversedWord = reversedWordArray.join('');
return lowercaseWord === reversedWord ? true : false;
}

/* 
  Add your pseudocode here
  i.Create a function that :
  1. Remove white spaces from input and store in a variable (normalWord)
  2. Convert variable to lowercase 
  3. Make a variable to hold an array made from each letter of the normalWord (inputArray)
  4. Crate an empty array to hold the inverse of the inputArray.(reversedArray)
  5. Loop through the input array, adding each letter 
      of this array to the beginning of the inverse array.
  6. Create a variable made by joining the elements of the inverse array into a single 
      string(reversedWord)
  7.Compare the normalWord to the reversed, if they are strictly equal, 
    return true else false
  ii. Test function:
    Should be true for the inputs:
      1."Noon" === capitalized word
      2." noon"  === white space at the start
      3."noon " === white space at the end
      4."noon" === plain without white space lowercase

  and false for 
  ran 
  one
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
