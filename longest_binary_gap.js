/**
 * Find the largest binary gap in the provide integer.
 * 
 * Inputs:
 * N: <int> standard integer
 * 
 * Outputs:
 * N: <int> maximum binary gap
 * 
 * binary gap is only valid if it starts with and ends with a 1.
 * e.g. 001, 100 not valid
 * 101 valid
 * 
 * Assumptions:
 * - N is always in int in teh range of [0 ... 2147483647]
 * 
 * Complexity:
 * - Time complexity: O(N)
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

test('null', 0, null);
test('single length', 0, 1);

test('edge case. leading 0', 0, parseInt('01', 2));
test('edge case. ending 0', 0, parseInt('10', 2));

test('valid binary gap minimal', 1, parseInt('101', 2));
test('valid binary gap standard', 4, parseInt('100001', 2));
test('valid binary gap. multiple gaps', 2, parseInt('1001001', 2));

/**
 * Default function signature for solution. One input.
 * @param {*} N Some input parameter
 * @returns Some solution
 */
function solutionA(N) {
    
    /// preconditions
    if (N == null) {
        return 0;
    }

    // convert integer to binary representation
    let binary = N.toString(2);

    // set default value for max binary gap
    let maxBinaryGap = 0;
    let gapCount = 0;
    let leadingOne = false;

    // loop through all numbers in binary
    for (i = 0; i < binary.length; i++) {

        let num = binary[i];

        if (num == 1) {
            /// case 1 - 1 (start and end case)
            leadingOne = true;
            
            /// end case
            /// check if current gap is max
            if (gapCount > maxBinaryGap) {
                maxBinaryGap = gapCount;
            }

            // reset binary count
            gapCount = 0;

        } else {
            // case 2 - 0 (increment gap case)
            if (leadingOne) {
                /// 1 must be encoutered atleast once for there to be any
                /// valid binary gaps
                /// track current binary length
                gapCount++;
            } 
        }
    }
    
    return maxBinaryGap;
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