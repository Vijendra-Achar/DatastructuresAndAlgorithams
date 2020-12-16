console.log('Hello, Multiple Pointers Pattern, Sum Zero Problem');

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
