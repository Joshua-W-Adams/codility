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

test('some test name', [0,1,2,4], 3);
test('basic', 'photo.jpg, Warsaw, 2013-09-05 14:08:15\nphoto.jpg, Warsaw, 2013-09-05 14:08:15', 'Warsaw01.jpg\nWarsaw02.jpg');

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
 * @param {*} S Some input parameter
 * @returns Some solution
 */
function solutionA(S) {
    let newNames = '';
    // TODO - clean up object definitions
    let photos = S.split(`\n`);

    let identifiers = {};

    for (var p = 0; p < photos.length; p++) {
        let photo = photos[p];
        let photoDetails = photo.split(',');
        let city = photoDetails[1].trim();

        if(identifiers[city] === undefined) {
            identifiers[city] = '01';
        } else {
            let id = parseInt(identifiers[city]) + 1;

            if(id.length == 1) {
                identifiers[city] = `${id}`;
            } else {
                identifiers[city] = `0${id}`;
            }     
        }
    }

    for (var p = 0; p < photos.length; p++) {
        let photo = photos[p];
        let photoDetails = photo.split(',');
        let city = photoDetails[1].trim();
        let identifier = identifiers[city];
        let extension = photoDetails[0].split('.')[1];
        
        if (newNames === '') {
            newNames = `${city}${identifier}.${extension}`;
        } else {
            newNames = `${newNames}\n${city}${identifier}.${extension}`;
        }
        
    }

    console.log(newNames);
    return newNames

}