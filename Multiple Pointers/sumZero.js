console.log('Hello, Multiple Pointers Pattern, Sum Zero Problem');

// Problem Statement - To find two numbers in a given array whose sum will add up to Zero

// Solution - Using the Multiple pointers patten
// Considereing that this is a sorted array
// We will first initulize two pointers
// left which indiactes the start of the array, index = 0
// right which indiactes the end of the array, index = array.length - 1

// As long as the left and the right pointers do not overlap
// We check if the sum of the values of the left and the right pointers is equal to zero
// If true, we return the value
// If the Sum is greater than 0, we decrement the right pointer
// If the Sum is less than 0, we increment the right pointer
// If we could not find the value, we return undefined

const sumZero = (arr) => {
  // Set the left pointer to the start of the array
  let left = 0;

  // Set the right pointer to the end of the array
  let right = arr.length - 1;

  // While condition if the pointers meet
  while (left < right) {
    // calculate the sum of the values of the pointers
    let sum = arr[left] + arr[right];

    // Check if the sum is equal to ZERO
    if (sum === 0) {
      return `${[arr[left], arr[right]]} equals ${sum}`;
    }
    // Else if sum is a negetive number, increment the left pointer by one
    else if (sum < 0) {
      left++;
    }
    // Else if sum is a positive number, increment the rignt pointer by one
    else if (sum > 0) {
      right--;
    }
  }

  // This return statement will be excuted if the condition is not satisfied
  return `No Match found`;
};

// Check for valid condition
console.log(sumZero([-5, -4, -3, -2, -1, 0, 1, 2, 3, 6]));

// Check for invalid condition
console.log(sumZero([1, 2, 3, 4, 5, 6, 7]));
