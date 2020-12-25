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

// Test Array
console.log(collectAllOdds([2, 3, 6, 5, 8, 9, 9, 8, 0, 7, 4]));

// The Above Problem solved using the Pure recursion method

const collectAllOddsPure = (arr) => {
  // Initilize resultant array / will be empty for every single call
  let newArr = [];

  // Check if the input array is empty
  if (arr.length === 0) {
    return newArr;
  }

  // Check if the number is odd
  if (arr[0] % 2 !== 0) {
    // Push the odd number to the resultant array
    newArr.push(arr[0]);
  }

  // Conacatinate all the arrays upon return and assign it to the resultant array
  newArr = newArr.concat(collectAllOddsPure(arr.slice(1)));

  // Return the Array
  return newArr;
};

// Test Array
console.log(collectAllOddsPure([55, 44, 67, 98, 76, 54, 3]));
