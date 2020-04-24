function arrayOfMultiples(num, length) {
  let arr = [];
  for (let i = 1; i <= length; i++) {
    arr.push(num * i);
  }
  return arr;
}

// console.log("arrayOfMultiples(7, 5) :- ", arrayOfMultiples(7, 5));
// console.log("arrayOfMultiples(12, 10) :- ", arrayOfMultiples(12, 10));

function findThree(arr) {
  const successStr = "I got 3!";
  const failStr = "there is no 3 in the array";

  if (Array.isArray(arr) && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].toString().indexOf('3') > -1) {
        return successStr
      }
    }
  }
  return failStr;
}

// console.log("findThree([1, 2, 3, 4, 5, 6, 7]) :- ", findThree([1, 2, 3, 4, 5, 6, 7]));
// console.log("findThree([2, 55, 60, 97, 86]) :- ", findThree([2, 55, 60, 97, 86]));

function isEquals(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false
  }

  if (arr1.length !== arr2.length) {
    return false;
  }

  let length = arr1.length;
  for (let i = 0; i < length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

// console.log("isEquals([1, 2], [1, 3]) :- ", isEquals([1, 2], [1, 3]));
// console.log("isEquals([1, 2], [1, 2]) :- ", isEquals([1, 2], [1, 2]));

function waysToArrange(...args) {
  let ways = 1;
  const numOfArgs = args.length;
  for (let i = 0; i < numOfArgs; i++) {
    ways *= args[i];
  }
  return ways;
}
// console.log("waysToArrange(2, 3) :- ", waysToArrange(2, 3))
// console.log("waysToArrange(3, 7, 4) :- ", waysToArrange(3, 7, 4))
// console.log("waysToArrange(2, 3, 4, 5) :- ", waysToArrange(2, 3, 4, 5))

function reversedBinary(num) {
  const binary = num.toString(2);
  const revBin = binary.toString().split('').reverse('').join('');
  return parseInt(revBin, 2)
}

// console.log("reversedBinary(10) :- ", reversedBinary(10));
// console.log("reversedBinary(12) :- ", reversedBinary(12));
// console.log("reversedBinary(25) :- ", reversedBinary(25));