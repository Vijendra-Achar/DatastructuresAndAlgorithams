console.log('Hello form the Recursion File / The Basics');

// First recursive function / Print the numbers

const countNumber = (num) => {
  if (num <= 0) {
    console.log('All Done');
    return;
  }

  console.log(num);
  num--;
  countNumber(num);
};

countNumber(5);

// Second Recursion Function / Sum Range

const numberSum = 4;

const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(`The Sum range of ${numberSum} is ${sumRange(numberSum)}`);

// Third Recursion Function / Factorial Problem

const numberFact = 4;

const factorial = (num) => {
  if (num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(`Factorial of ${numberFact} is ${factorial(numberFact)}`);
