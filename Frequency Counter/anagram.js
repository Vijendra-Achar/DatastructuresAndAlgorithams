console.log('Hello, Anagram using Frequency Counter Pattern');

// Write a function that accepts 2 arrays
// Returns TRUE if The other array contains the squared values of of the numbers from the first array
// Returns FALSE if it doesn't
// Note: The values can be shuffled

// ANAGRAMS
const checkAnagram = (strOne, strTwo) => {
  // Check if the length of the stings match
  if (strOne.length !== strTwo.length) {
    return false;
  }

  // Convert the strings to Lowercase
  strOne = strOne.toLowerCase();
  strTwo = strTwo.toLowerCase();

  // Initilize the counter objects
  let counterOne = {};
  let counterTwo = {};

  // Loop through each array and store the frequency of the elements
  for (let char in strOne) {
    counterOne[strOne.charAt(char)] = (counterOne[strOne.charAt(char)] || 0) + 1;
  }
  for (let char in strTwo) {
    counterTwo[strTwo.charAt(char)] = (counterTwo[strTwo.charAt(char)] || 0) + 1;
  }

  // Display the Counter objects
  console.log(counterOne);
  console.log(counterTwo);

  // Core logic / see if all the letters exist with the same count
  for (let key in counterOne) {
    if (!(key in counterTwo)) {
      return false;
    }
    if (counterOne[key] !== counterTwo[key]) {
      return false;
    }
  }
  return true;
};

// Check True
console.log(checkAnagram('twisttimetest', 'timetwisttest'));

// Check True with Uppercase
console.log(checkAnagram('twisttimetest', 'timetwisTTest'));

// Check False
console.log(checkAnagram('twisttimetest', 'timetwisttttest'));
