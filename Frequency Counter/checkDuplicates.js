console.log('Hello form the Frequency Counter / Check for Duplicates Problem');

// EXERCISE PROBLEM - 2

// Problem Statement - Write a function that accepts a variable number of arguments and checks weatherthere are any duplicates among the arguments

const checkDuplicates = (...args) => {
  if (args.length < 0) {
    return false;
  }

  let counter = {};

  for (let ele of args) {
    counter[ele] = (counter[ele] || 0) + 1;
  }

  for (let key in counter) {
    if (counter[key] > 1) {
      return true;
    }
  }

  return false;
};

console.log(checkDuplicates(1, 2, 3, 2, 5));
