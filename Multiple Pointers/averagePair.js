console.log('Hello form the Multiple Pointers Pattern / Find Average Pair');

// EXERCISE PROBLEM - 2

// Problem Statement - Given a Sorted array and a target average, Find the pair in the array whose average is the target else return false

const averagePair = (arr, avg) => {
  if (arr.length < 0 || avg === 0) {
    return false;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let average = (arr[start] + arr[end]) / 2;
    if (average === avg) {
      return [arr[start], arr[end]];
    } else if (average > avg) {
      end--;
    } else if (average < avg) {
      start++;
    }
  }

  return allTheAns;
};

// Test Condition
console.log(averagePair([1, 2, 3], 2.5));

// Test Condition
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
