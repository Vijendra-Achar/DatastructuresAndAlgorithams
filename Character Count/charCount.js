console.log('Hello from the Character count Javascript file ');

// Get the Character count of an input string.
// Example : "Hello There"
// Expected result: { h:2, e:3, l:2, o:1, ... }

// Function to calculate character count
const charCount = (str) => {
  // Initilize an empty object and return tis object at the end
  let count = {};

  // Convert the string to lower case,
  str = str.toLowerCase();

  // // Things that could be excluded
  // const ignore = [' ', '@', '!', '#', '%', '^', '&', '*', '(', ')'];

  // Loop through every element in the string
  for (let char of str) {
    // let char = str[i];

    // // Check for spaces
    // if (ignore.includes(char)) {
    //   continue;
    // }

    // check for spaces using Regular expressions

    if (/[a-z0-9]/.test(char)) {
      // If the character already existes in the object, Increase its count by one
      if (count[char] > 0) {
        count[char]++;
      }
      // Else add that character and initilize the count to one
      else {
        count[char] = 1;
      }
    }
  }

  // return the final count object
  return count;
};

console.log(charCount('Hello There 123456!!@#'));
