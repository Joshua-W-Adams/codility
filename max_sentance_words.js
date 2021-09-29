/**
 * Determine the sentance containing the largest number of words.
 * 
 * Input parameters are provided as follows:
 * S: <String (a-z, A-Z, !, ., ?)> String representing sentances separated by !, . or ?
 * 
 * Words within sentances are separated by spaces.
 * A zero length word is not a valid word
 * A zero length sentance is a valid sentance
 * 
 * Assumptions:
 * - S is within [1..100]
 * 
 * Complexity:
 * - Time Complexity: O(N^2). Performance scales exponentially with input. There are nested loops.
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

test('empty case', 0, '');
test('null case', 0, null);
test('single sentance single word', 1, 'a');

test('separator at start of input', 1, '.a');
test('separator at end of input', 1, 'a.');

test('multiple sentances. two separators.', 4, 'We test coders. Give us a try?');
test('multiple sentances. three separators.', 1, '.!?a.!?');

/**
 * Default function signature for solution
 * @param {*} A Some input parameter
 * @returns Some solution
 */
function solutionA(S) {

    // set default maximum words value
    let maxWords = 0;

    // handle empty or zero case
    if (!S) {
        return maxWords;
    }

    // split input string S into a list of sentances
    let sentances = S.split(/[.!?]/);

    // loop through all sentances
    for (var s = 0; s < sentances.length; s++) {

        let sentance = sentances[s];
        let words = sentance.split(' ');
        
        // count words that meet conditions for a valid word
        let wordCount = 0;
        for (var w = 0 ; w < words.length; w++) {
            let word = words[w];
            if (word !== "") {
                wordCount++;
            }
        }

        // update max word length
        if (wordCount > maxWords) {
            maxWords = wordCount;
        }
    }

    return maxWords;

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