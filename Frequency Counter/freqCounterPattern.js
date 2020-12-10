console.log('Hello form the Frequency Counter Pattern');

// Write a function that accepts 2 arrays
// Returns TRUE if The other array contains the squared values of of the numbers from the first array
// Returns FALSE if it doesn't
// Note: The values can be shuffled

// USING THE FREQUENCY PATTERN APPROCH
const checkSame = (arrOne, arrTwo) => {
  // Check of the Length of the arrays match
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  // Initilaze the counter objects
  let counterOne = {};
  let counterTwo = {};

  // Loop through each array and store the frequency of the elements
  for (let ele of arrOne) {
    counterOne[ele] = (counterOne[ele] || 0) + 1;
  }
  for (let ele of arrTwo) {
    counterTwo[ele] = (counterTwo[ele] || 0) + 1;
  }

  console.log(counterOne);
  console.log(counterTwo);

  for (let key in counterOne) {
    if (!(key ** 2 in counterTwo)) {
      return false;
    }
    if (counterOne[key] !== counterTwo[key ** 2]) {
      return false;
    }
  }

  return true;
};

console.log(checkSame([4, 5, 7, 7, 7, 2, 5], [25, 16, 49, 25, 4, 49, 49]));
