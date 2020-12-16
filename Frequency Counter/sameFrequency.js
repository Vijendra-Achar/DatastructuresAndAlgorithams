console.log('Hello form the Frequency Counter / Same Frequency Problem');

// EXERCISE PROBLEM - 1

// Problem Statement - Given two integers, find if the two numbers have the same frequency of digits.

const sameFrequency = (numOne, numTwo) => {
  if (numOne === 0 || numTwo === 0) {
    return false;
  }

  numOne = numOne.toString();
  numTwo = numTwo.toString();

  let counterOne = {};
  let counterTwo = {};

  for (let ele of numOne) {
    counterOne[ele] = (counterOne[ele] || 0) + 1;
  }

  for (let ele of numTwo) {
    counterTwo[ele] = (counterTwo[ele] || 0) + 1;
  }

  for (let key in counterOne) {
    if (counterOne[key] !== counterTwo[key]) {
      return false;
    }
    if (!(key in counterTwo)) {
      return falase;
    }
  }

  return true;
};

// Check for "true"
console.log(sameFrequency(8877000, 7700088));

// Check for "false"
console.log(sameFrequency(8877000, 77000880));
