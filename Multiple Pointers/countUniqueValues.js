console.log('Hello, Multiple Pointers Pattern, Count Unique values Problem');

// Problem Statement - To count the number of unique values in an array

// Solution - Using the Multiple pointers patten
// Initilize Pointer "i" at the start of the array and Pointer "j" at i+1 postion
// Loop through the entire array
// Check if the values of i and j pointesrs are the same
// if True move pointer j to the next position
// if False move pointer i to the next position and set i pointer value to the value of pointer j
// At the end of the loop, The position of i is the total number of unique values

// Solution using WHILE Loop
const countUniqueValuesWhile = (arr) => {
  // Initilize "i" at the start of the array
  let i = 0;

  // Initilize "j" at the i+1 position of the array
  let j = 1;

  // While loop to check the position of j is less than the array's length
  while (j < arr.length) {
    // If the value of i and j pointer are the same, point j to the next value in the array
    if (arr[i] === arr[j]) {
      j++;
    }
    // If not, move the position of i to i+1 and replace its value with pointer j's value
    else {
      i++;
      arr[i] = arr[j];
    }
  }

  // Finally return the total number of unique values
  return i + 1;
};

// Test array
console.log(countUniqueValuesWhile([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 6, 6, 6, 6, 9, 9, 9, 9, 9, 9]));

// Solution using FOR Loop
const countUniqueValuesFor = (arr) => {
  // Initilize "i" at the start of the array
  let i = 0;

  // For loop to loop through the entire array
  for (let j = 1; j < arr.length; j++) {
    // If the value of i and j pointer are not the same, move the position of i to i+1 and replace its value with pointer j's value
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  // Finally return the total number of unique values
  return i + 1;
};

// Test array
console.log(countUniqueValuesFor([1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 6, 6, 6, 6, 9, 9, 9, 9, 9, 9]));
