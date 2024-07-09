/**
 * requirements
 * - return true or false if x is palidrome
 * - palindrome reads the same forward as it does backward
 * - positive and negative numbers
 * - negatives still considered characters
 * - huge negative to postive number range
 *
 * pseudocode:
 *
 * - convert to string
 * - spilt characters to an array
 * - copy array and reverse
 * - loop through arrays and check values are identical
 * - return true or false
 */
export function solution(x: number) {
  const arr = x.toString().split("");
  const arrReversed = x.toString().split("").reverse();

  for (let i = 0; i < arr.length; i++) {
    const c1 = arr[i];
    const c2 = arrReversed[i];

    if (c1 !== c2) {
      return false;
    }
  }

  return true;
}

function singleLoopSolution(x: number) {
  // if (x < 0) {
  //   return false;
  // }

  // if (x < 10) {
  //   return true;
  // }

  // if (x % 2 === 0) {
  //   // even numbers cannot be palidromes
  //   return false;
  // }

  const arr = x.toString().split("");

  for (let i = 0; i < arr.length; i++) {
    const forward = i;
    const reverse = arr.length - 1 - i;

    if (arr[forward] !== arr[reverse]) {
      return false;
    }
  }

  return true;
}

// TODO - can we solve this problem without converting the number to a string?
// function loopThroughDigits(x: number) {
//   let num = Math.abs(x); // Convert negative number to positive
//   while (num > 0) {
//     const digit = num % 10; // Extract the last digit
//     // Do something with the digit, e.g. compare it with other digits
//     num = Math.floor(num / 10); // Remove the last digit
//   }
// }
