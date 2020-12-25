console.log('Hello form the Recursion File / In Depth');

// Helper Method / Collect all Odd numbers into an array

const collectAllOdds = (arr) => {
  const res = [];

  // This helper method will run recursively
  const collectHelper = (newArr) => {
    // Base Case / when the input array consists of no elements, the fuction will return
    if (newArr.length <= 0) {
      return;
    }

    // Check if the number is Odd
    if (newArr[0] % 2 !== 0) {
      // Push the Array into results array
      res.push(newArr[0]);
    }

    // Recursive Call with the input array being one length shorter
    collectHelper(newArr.slice(1));
  };

  collectHelper(arr);

  // Return the result
  return res;
};

// Test Arrays
console.log(collectAllOdds([2, 3, 6, 5, 8, 9, 9, 8, 0, 7, 4]));
