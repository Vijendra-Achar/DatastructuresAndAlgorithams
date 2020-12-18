console.log('Hello form the Sliding window Pattern / Check for Minimum sub Array Length');

// EXERCISE PROBLEM - 1

// Problem Statement - Write a function that accepts a positive number and an array of positive integers and finds a continious subarray for which the sum is greater than or equal to the number that was passed

const minSubArrayLength = (arr, sum) => {
  let start = 0;
  let end = 0;

  let tempSum = 0;

  let minLen = Infinity;

  while (start < arr.length) {
    if (tempSum < sum && end < arr.length) {
      tempSum += arr[end];
      end++;
    } else if (tempSum >= sum) {
      minLen = Math.min(minLen, end - start);

      tempSum = tempSum - arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

// Test Condition
console.log(minSubArrayLength([2, 1, 6, 5, 4], 9));

// Test COndition
console.log(minSubArrayLength([2, 3, 1, 2, 4, 3], 7));
