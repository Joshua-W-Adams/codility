/**
 * Problem Solving Methodology
 * 
 * 1. Understand the problem
 *    Read twice if necessary
 * 
 * 2. Break down the requirements
 *    Define inputs, outputs and any special output considerations
 *    Do a few basic examples
 * 
 * 3. Define the assumptions
 * 
 * 4. Write pseudocode 
 *    Comment the high level steps directly in function signature
 *    DO NOT proceed until this is solved
 *    This is often referred to as "Breath First" coding
 * 
 * 5. Consider options
 * 
 * 6. Code 
 *    Directly in testing platform environment
 *    Avoids unecessary time lost due to writing test cases, function signatures and creating new files
 * 
 * 7. Test and Debug
 */

/**
 * <TODO: Add description of problem>
 * 
 * Assumptions:
 * - <TODO: add list of assumptions for solution>
 * 
 * Complexity:
 * - <TODO: add expected time complexity>
 * - <TODO: Add expected space complexity>
 */

/**
 * Sample Test cases
 */

// <TODO: Add the following test cases>
// Correctness:
// - empty or zero 
// - minimal - just one input, or whatever is the absolute minimal conceiveable input
// - edge cases - e.g. start, middle and end of array
//
// Performance:
// - worst case - i.e. biggest possible numbers for speed and space constraints

test('some test name', 3, [0,1,2,4]);

/**
 * Default function signature for solution. One input.
 * @param {*} A Some input parameter
 * @returns Some solution
 */
function solutionA(A) {

    // <TODO: Create solution>

    // <TODO: Return some result>

    return ;

}

/**
 * Default function signature for solution. Two Inputs.
 * @param {*} A Some input parameter
 * @param {*} D Some input parameter
 * @returns Some solution
 */
// function solutionA(A, D) {


// }

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
        result = actual == expectedResult;
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