console.log('Hello form the Frequency Counter / Check for Duplicates Problem');

// EXERCISE PROBLEM - 1

// Problem Statement - Write a function that accepts a variable number of arguments and checks weatherthere are any duplicates among the arguments

const checkDuplicates = (...args) => {
  if (args.length < 0) {
    return false;
  }

  let i = 0;
  let j = i + 1;

  while (j < args.length) {
    if (args[i] === args[j]) {
      return true;
    }

    i++;
    j++;
  }

  return false;
};

console.log(checkDuplicates());
