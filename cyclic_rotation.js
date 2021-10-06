/**
 * Rotate an array to the right by a given number of steps.
 * 
 * Inputs:
 * A: <[int]> ... [3, 8, 9, 7, 6]
 * K: <int> ... 3
 * 
 * Outputs:
 * A: <[int]> ... [9, 7, 6, 3, 8]
 * 
 * Assumptions:
 * - N and K are integers within the range [0..100];
 * - each element of array A is an integer within the range [−1,000..1,000].
 * 
 * Complexity:
 * - Time complexity: O(K). Function scales linearly with K.
 */

/**
 * Sample Test cases
 */

// Correctness:
// - empty or zero 
// - minimal - just one input, or whatever is the absolute minimal conceiveable input
// - edge cases - e.g. start, middle and end of array
//
// Performance:
// - worst case - i.e. biggest possible numbers for speed and space constraints

test('empty case', [], [], 1);
test('shift zero case', [2], [2], 0);

test('minimal case - shift by 1', [2,0,1], [0,1,2], 1);
test('minimal case - shift by 2', [1,2,0], [0,1,2], 2);

/**
 * Default function signature for solution. Two Inputs.
 * @param {*} A Some input parameter
 * @param {*} K Some input parameter
 * @returns Some solution
 */
function solutionA(A, K) {

    if (A === null || K === null || A.length === 0) {
        return [];
    }

    const arr = A;
    const lastIndex = arr.length - 1;
    const rotations = K;

    // iterate through K rotations
    for (var n = 0; n < rotations; n++) {
        // shift elements in array by one position
        // get last element
        const lastElement = arr[lastIndex];
        // add to start
        arr.splice(0, 0, lastElement);
        // delete last element
        arr.splice(lastIndex + 1, 1);
    }
    
    // return new array of values
    return arr;
}

/**
 * Basic function to perform automated unit testing
 * @param {*} input Input value to pass to tested function
 * @param {*} expectedResult result tested function should return
 */
function test(name, expectedResult, inputA, inputB) {
    let result;
    let inputs;
    let actual;
    if (inputB) {
        actual = solutionA(inputA, inputB);
        // result = actual == expectedResult;
        result = arraysEqual(actual, expectedResult);
        inputs = `inputA: ${inputA}\t inputB: ${inputB}\n`;
    } else {
        actual = solutionA(inputA);
        result = actual == expectedResult;
        inputs = `inputA: ${inputA}\n`;
    }
     
    console.log(`${name}`);
    console.log(`pass: ${result}`);
    console.log(`expected: ${expectedResult}\t actual: ${actual}\t ${inputs}\t`);
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}