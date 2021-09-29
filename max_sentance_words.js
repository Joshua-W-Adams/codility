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

test('empty case', '', 0);
test('empty case', null, 0);

test('minimal case', 'a', 1);

test('edge case', '.a', 1);
test('edge case', 'a.', 1);

test('proper sentance', 'We test coders. Give us a try?', 4);

test('random stuff', '.!?a.!?', 1);

/**
 * Basic function to perform automated unit testing
 * @param {*} input Input value to pass to tested function
 * @param {*} expectedResult result tested function should return
 */
function test(name, input, expectedResult) {
    let result = solutionA(input) == expectedResult;
    console.log(`name: ${name}`);
    console.log(`pass: ${result}\t expectedResult: ${expectedResult}\t input: ${input}\n`);
}

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