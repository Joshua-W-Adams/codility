export function solution(nums: number[], target: number) {
  return bruteForceSolution(nums, target);
  // return twoPassHashMapSolution(nums, target);
  // return onePassHashMapSolution(nums, target);
  // return recursive(0, 1, nums, target);
  // return recursiveWithMemo(0, 1, nums, target, []);
}

/**
 * Understanding and visualising the problem...
 *
 * arr = [1, 2, 3, 4, 5, 6]
 * target = 9
 *
 * looping through all the records would look like this:
 *
 * start case
 * [0,0]
 * [0,1] start here
 * [0,2]
 * [0,3]
 * [0,4]
 * [0,5] end here
 *
 *  mid case
 * [1,0] already solved
 * [1,1] skip
 * [1,2] start here
 * [1,3]
 * [1,4]
 * [1,5] end here
 *
 * ...repeat
 *
 * end case
 * [5,0] solved
 * [5,1] solved
 * [5,2] solved
 * [5,3] solved
 * [5,4] solved
 * [5,5] skip
 */

/**
 * Brute force solution
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 *
 * conclusion: most simple solution to the problem and also most memory efficient.
 * However inefficient for large datasets due to the quadratic time complexity.
 */
function bruteForceSolution(nums: number[], target: number) {
  // Step 1: Iterate over the numbers in the array.
  for (let i = 0; i < nums.length; i++) {
    // Step 2: For each number, iterate over the rest of the numbers in the array.
    for (let n = i + 1; n < nums.length; n++) {
      // Step 3: Check if the current two numbers add up to the target.
      const total = nums[i] + nums[n];
      if (total == target) {
        return [i, n];
      }
    }
  }
  // Step 4: If no such pair is found, return an empty array.
  return [];
}

/**
 * considering time complexity is 0(n2) and space complexity is O(1)...
 *
 * How can we improve the space and time complexity of this function? what other
 * approachs can we consider? recursive? bottom up? one or two pass hash maps? For an
 * iterative style solution like this, using a hash map seems like the most obvious
 * solution.
 *
 */

/**
 * Two pass hash map solution
 *
 * time complexity: O(n + n)
 * space complexity: O(n)
 *
 * conclusion: more advanced version of the brute force solution. Where by we store the
 * numbers as the keys and the indices as the values in a hashmap and calculate the
 * required number to meet the target in each iteration and determine the matching index
 * for this number.
 */
function twoPassHashMapSolution(nums: number[], target: number): number[] {
  // Step 1: Create a map to store numbers and their indices.
  const map = new Map<number, number>();
  // alternatively can use an object for key and values pairs. But this is not
  // as efficient as a map.
  // const comp = {};

  // Step 2 (first pass): Add each number and its index to the map.
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // Step 3 (second pass): find the required number (target - current number)
  for (let i = 0; i < nums.length; i++) {
    const requiredNumber = target - nums[i];

    // Step 4: Ensure the requiredNumber is not the number itself.
    if (map.has(requiredNumber) && map.get(requiredNumber) !== i) {
      // Step 5: If the requiredNumber exists, the indices are returned.
      return [i, map.get(requiredNumber)!];
    }
  }

  // Step 6: If no two numbers sum up to the target, return an empty vector.
  return [];
}

/**
 * One pass hash map solution
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * conclusion: best solution with the lowest combination of space and time
 * complexity, suitable for large datasets and production applicaitions.
 */
function onePassHashMapSolution(nums: number[], target: number) {
  // Step 1: Create a map to store numbers and their indices.
  const map = new Map<number, number>();

  // Step 2: During iteration over the numbers, the required number is calculated for each number.
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];
    const requiredNumber = target - value;

    // Step 3: Checks if the requiredNumber exists in the map.
    // and if the current indice is not the required indice.
    if (map.get(requiredNumber) != null && map.get(requiredNumber) !== i) {
      return [i, map.get(requiredNumber)];
    }

    // Step 4: The current number and its index are added to the map.
    map.set(value, i);
  }

  // Step 5: If no pair sums up to the target, return an empty array.
  return [];
}

function recursive(i: number, n: number, nums: number[], target: number) {
  const total = nums[i] + nums[n];

  if (target === total) {
    return [i, n];
  }

  // case 2 - increment index n
  if (n < nums.length) {
    return recursive(i, n + 1, nums, target);
  }

  // case 1 - increment index i
  return recursive(i + 1, i + 2, nums, target);
}

function recursiveWithMemo(
  i: number, // index
  n: number, // index
  nums: number[],
  target: number,
  memoized: number[] // memoized required number
) {
  const total = nums[i] + nums[n];

  if (target === total) {
    return [i, n];
  }

  // case 2 - increment index n
  if (n < nums.length) {
    const currentNumber = nums[n];
    const requiredNumber = target - currentNumber;
    const existingResult = memoized[requiredNumber];

    if (existingResult != null && existingResult != undefined) {
      return [i, existingResult];
    }

    memoized[currentNumber] = n;

    return recursive(i, n + 1, nums, target);
  }

  // case 1 - increment index i
  return recursive(i + 1, i + 2, nums, target);
}

function rescursive2(nums: number[], target: number) {
  // defined the start position
  let i = 0;

  // define the map for string the soltuions
  const map = new Map<number, number>();

  function recursion(i: number) {
    // end of loop reached: should never happen
    if (i === nums.length - 1) {
      return [];
    }

    // base case: first item in array
    if (i == 0) {
      return recursion(i + 1);
    }

    // base case: solution
    const match = target - nums[i];

    if (map.get(match) != null && map.get(match) != undefined) {
      return [i, map.get(match)];
    }

    // recursive case
    // store the solution for the next iteration
    map.set(nums[i], i);

    return recursion(i + 1);
  }

  return recursion(i);
}
