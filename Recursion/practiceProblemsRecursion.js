console.log('Hello form the Recursion File / Practice Problems');

// Problem - 1 / Power

const baseNum = 2;
const powerNum = 2;

const power = (base, pow) => {
  if (pow === 0) return 1;

  return base * power(base, pow - 1);
};

console.log(`Result of ${baseNum} to the power ${powerNum} is ${power(baseNum, powerNum)}`);

// Problem - 2 / Factorial

const factNum = 3;

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(`Result of the Factorail of ${factNum} is ${factorial(factNum)}`);

// Problem - 3 / Product of array

const prodArr = [1, 2, 3, 10];

const productOfArray = (arr) => {
  let sum = 1;

  if (arr.length === 0) return null;

  const helperProductOfArray = (newArr) => {
    if (newArr.length === 0) return;

    sum *= newArr[0];

    helperProductOfArray(newArr.slice(1));
  };

  helperProductOfArray(arr);
  return sum;
};

console.log(`Result of the Product of ${prodArr} is ${productOfArray(prodArr)}`);

// Problem - 4 / Recursive Range

const recNum = 10;

const recursiveRange = (num) => {
  if (num === 1) return 1;
  return num + recursiveRange(num - 1);
};

console.log(`Result of the Sum of all the number from 0 to ${recNum} is ${recursiveRange(recNum)}`);

// Problem - 5 / Fibonacci Series

const fibNum = 28;

const fibonacci = (num) => {
  if (num <= 2) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(`Result of the Sum of Fibonacci series till ${fibNum} is ${fibonacci(fibNum)}`);
