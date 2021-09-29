/**
 * Sample Test cases
 */
test([0,1,2,4], 3);
test([-2,-1,1,2,4], 3);
test([5,37,0,2,1,3,17], 4);
test([-11,1, 37,28,7,-100,5000,2,3,4,5,6], 8);

function test(input, expectedResult) {
    let result = solutionA(input) == expectedResult;
    console.log(`pass: ${result}\t expectedResult: ${expectedResult}\t input: ${input}`);
}

/**
 * Default function signature for solution
 * @param {*} A Some input parameter
 * @returns Some solution
 */
function solutionA(A) {

    // sort input array lowest to highest
    let sorted = A.sort(function (a, b) {
        return a - b;
    });

    // define default lowest value
    let maxLowest = 1;

    // loop through array until lowest missing value is encountered
    for (var i = 0; i < sorted.length; i++) {
        let val = sorted[i];
        if (val == maxLowest) {
            // case 1 - max lowest found. increment to next value.
            maxLowest++
        } else if (val > maxLowest) {
            // case 2 - next value in sorted array greater than maxLowest. End loop.
            break;
        }
        // case 3 - next value less than maxLowest. 0 or negative value. Ignore.
    }

    return maxLowest;

}

// Alternative solution below with poor time complexity.

// console.log(solutionB([0,1,2,4]));
// console.log(solutionB([-2,-1,1,2,4]));
// console.log(solutionB([5,37,0,2,1,3,17]));
// console.log(solutionB([-11,1,37,28,7,-100,5000,2,3,4,5,6]));

function solutionB(A) {

    let maxLowest = 1;

    // unique array of integers in input array A ordered from smallest to largest
    let distinct = [];

    // loop through all data
    for (var i = 0; i < A.length; i++) {
        let integer = A[i];

        // check for negative values. These are never considered in calculations.
        if (integer > 0) {
            
            // get index of current item in distinct array
            let integerDistinctIndex = distinct.indexOf(integer);
            
            // check if current value exists in distinct array
            if (integerDistinctIndex == -1) {
                // not in distinct array
                // to be added in lowest to highest order       
                integerDistinctIndex = addInOrder(integer, distinct);
            } // in array - do nothing

            // check for new maximum lowest calculation case
            if (integer == maxLowest) {
                // case 1 - maxLowest changed                
                maxLowest = calculateMaxLowest(maxLowest, integerDistinctIndex, distinct);
            }  // case 2 - maxLowest unchanged
            
        }

    }
    
    return maxLowest;
}

function addInOrder(integer, distinct) {

    let index = 0;
    let found = false;

    if (distinct.length == 0) {
        // case 1 - no items in array
        distinct.push(integer);
    } else {
        // case 2 - items already in array

        // handle insertion of value that is less than items already in the array
        for (let n = 0; n < distinct.length; n++) {           
            
            if (integer < distinct[n]) {
                distinct.splice(n, 0, integer);
                index = n;
                found = true;
                break;
            }
               
        }

        // handle insertion of value greater than all items in array
        if (!found) {
            
            distinct.push(integer);
            index = distinct.length - 1;
        }
    }
   
    return index;

}

function calculateMaxLowest(maxLowest, startPosition, distinct) {
    // set intial value
    let found = false;

    for (var n = startPosition; n < distinct.length; n++) {
        let prev;
        let current = distinct[n];
        
        if (n == 0 || n == startPosition) {
            // start || 1 length array
            // starting from max lowest. Do nothing.
            prev = null;
        } else {
            // mid or end of array
            prev = distinct[n - 1];
            
            if (current != (prev + 1)) {
                maxLowest = prev + 1;
                found = true;
                break;
            } 
        }

    }

    if (!found) {
        maxLowest++
    }

    return maxLowest;
}