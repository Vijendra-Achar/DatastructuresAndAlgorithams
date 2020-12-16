console.log('Hello, Multiple Pointers Pattern, Sum Zero Problem');

// Problem Statement - To find the maximum result of sum of "n" digits in an Array

// Solution - Sliding window pattern

// We will loop over the array up to "n" numbers and then calculate the sum of its values
// We assign the the current value to a "Temp" variable
// We need to loop over the array once again, but this time starting from "n"
// As we loop over we need to subtract the "i-num" value and add "i" value
// we need to compare the temp value with the current Max Value and assign the highest number to the "Max" variable
// Return the "Max" variable

const maxSum = (arr, num) => {
  // Initilize the Temp Variable to Zero
  let temp = 0;
  // Initilize the Max Variable to Zero
  let max = 0;

  // Loop from the start of the array up to "num" elements // Create the window
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }

  // Assign the Max variable's value to the Temp variable
  temp = max;

  // Loop from the "num"th element till the end of the array // Move the window
  for (let i = num; i < arr.length; i++) {
    // calculat the sum of the next "num" digits and assign them to temp
    temp = temp - arr[i - num] + arr[i];

    // Check the maximum value between Temp and Max and Assign it to Max variable
    max = Math.max(temp, max);
  }

  // At the end of the loop, return the Max value
  return max;
};

// Test Array and Number
console.log(maxSum([1, 2, 5, 2, 8, 1, 5], 4));
