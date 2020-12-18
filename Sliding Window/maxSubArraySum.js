console.log('Hello form the Sliding window Pattern / Check for Max Sub array sum');

// EXERCISE PROBLEM - 1

// Problem Statement - Write a function that accepts an array and a number, find the maximum sum of the sub array with the length represented by the number

const maxSubArrayNumber = (arr, num) => {
  if (arr.length < 0 || num === 0 || num > arr.length) {
    return false;
  }

  let sum = 0;
  let temp = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  temp = sum;

  for (let i = num; i < arr.length; i++) {
    temp = temp - arr[i - num] + arr[i];

    if (temp > sum) {
      sum = temp;
    }
  }

  return sum;
};

// Test condition
console.log(maxSubArrayNumber([100, 200, 300, 400], 2)); //700

// Test condition
console.log(maxSubArrayNumber([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39

// Test condition
console.log(maxSubArrayNumber([-3, 4, 0, -2, 6, -1], 2)); // 5

// Test condition
console.log(maxSubArrayNumber([2, 3], 3)); // False
