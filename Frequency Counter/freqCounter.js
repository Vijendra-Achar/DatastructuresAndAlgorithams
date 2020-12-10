console.log('Hello, Frequency Counter');

// Write a function that accepts 2 arrays
// Returns TRUE if The other array contains the squared values of of the numbers from the first array
// Returns FALSE if it doesn't
// Note: The values can be shuffled

// THE NAVIE APPROCH
const checkSame = (arrOne, arrTwo) => {
  // Check if the length of the two arrays match
  if (arrOne.length !== arrTwo.length) {
    return false;
  }

  // Loop over the two arrays and check if the squared numbers exist
  for (let i = 0; i < arrOne.length; i++) {
    let indexExists = arrTwo.indexOf(arrOne[i] ** 2);
    if (indexExists === -1) {
      return false;
    }
    console.log(arrOne, arrTwo);
    arrTwo.splice(indexExists, 1);
  }

  // Return true upon successful completion of the loop
  return true;
};

// Check for True Return value
console.log(checkSame([1, 2, 3, 4, 5], [25, 4, 9, 16, 1]));

// Check for False Return value
console.log(checkSame([1, 2, 3, 4, 5], [25, 4, 9, 99, 1]));
