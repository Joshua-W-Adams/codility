/**
 * Rename a list of provided photos according to location taken (city) and time taken.
 * 
 * Photos are provided in the following format:
 * S: <String "<<photoname>>.<<photoextension>>, <<cityname>>, yyyy-mm-dd hh:mm:ss\n ... next photo ">
 * 
 * Ouput should be in the following format:
 * <String "<<cityname>><<uniqueid>>.<<photoextension>>">
 * 
 * New names must be returned in the same order in which they were provided.
 * Combination of photo names, cities and date are not unique due to photos being taken in multiple timezones.
 * unique id is a sequential number based on the city taken and the time it was taken. ordered least to greatest.
 * the unique id should have the same length as the length of the largest number in the photo group.
 * 
 * Assumptions:
 * - photoname, photoextension, cityname are in [a-z, A-Z]
 * - all properties for a photo are always provided
 * 
 * Complexity:
 * - Time Complexity: O(3N + 2(N log N)) = O(N log N)
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

test('empty case', '', '', '');
test('null case', '', null, null);
test('single photo case', 'Warsaw1.jpg', 'photo.jpg, Warsaw, 2013-09-05 14:08:15');

test(
'two photo case ordered correctly', 
`Warsaw1.jpg
Warsaw2.jpg`, 
`photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:14`
);

test(
'two photo case ordered incorrectly', 
`Warsaw2.jpg
Warsaw1.jpg`, 
`photo.jpg, Warsaw, 2013-09-05 14:08:15
photo.jpg, Warsaw, 2013-09-05 14:08:14`
);

test(
'duplicate photo name and date ordered correctly', 
`Warsaw1.jpg
Warsaw2.jpg
Warsaw3.jpg`, 
`photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:14`
);
    
test(
'duplicate photo name and date ordered incorrectly', 
`Warsaw3.jpg
Warsaw1.jpg
Warsaw2.jpg`, 
`photo.jpg, Warsaw, 2013-09-05 14:08:14
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13`
);

test(
'multiple cities and file extensions', 
`Perth1.jpg
Warsaw1.jpg
Warsaw2.jpg
Melbourne1.png`, 
`photo.jpg, Perth, 2013-09-05 14:08:14
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.png, Melbourne, 2013-09-05 14:08:12`
);

test(
'more than 9 cities for leading zeros', 
`Perth1.jpg
Warsaw01.jpg
Warsaw02.jpg
Warsaw03.jpg
Warsaw04.jpg
Warsaw05.jpg
Warsaw06.jpg
Warsaw07.jpg
Warsaw08.jpg
Warsaw09.jpg
Warsaw10.jpg
Melbourne1.png`, 
`photo.jpg, Perth, 2013-09-05 14:08:14
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.png, Melbourne, 2013-09-05 14:08:12`
);

/**
 * Default function signature for solution
 * @param {*} S Some input parameter
 * @returns Some solution
 */
function solutionA(S) {

    // handle null and empty string cases
    if (S == null || S.length == 0) {
        return '';
    }

    // split
    const photos = S.split(`\n`);
    const photoJson = [];

    // assign unique ids, extract information and count total occurances of cities

    const cityTotals = {};
    
    for (var p = 0; p < photos.length; p++) {
        
        const photo = photos[p].split(',');
        const name = photo[0].split('.');
        const city = photo[1].trim();
        const date = Date.parse(photo[2]);
        
        photoJson.push({
            'id': p,
            'name': name[0],
            'ext': name[1],
            'city': city,
            'date': date,
        });

        // count total occurances in city grouping
        cityTotals[city] = increment(cityTotals[city]);
    }
    
    // sort by date so correct identifiers can be assigned
    photoJson.sort(function (a, b) {

        // sort by dates
        const dateA = a['date'];
        const dateB = b['date'];

        // only if dates are different
        if (dateA > dateB) return 1;
        if (dateA < dateB) return -1;

        // if dates are the same. Sort by id.
        const idA = a['id'];
        const idB = b['id'];

        // ascending order
        return idA - idB;
    })

    // assign new photo names

    const cityRunningTotal = {};

    // loop through sorted photo array
    for (var p = 0; p < photoJson.length; p++) {
        const photo = photoJson[p];
        const city = photo['city'];
        const ext = photo['ext'];

        // update running total
        cityRunningTotal[city] = increment(cityRunningTotal[city]);

        // get leading zeros
        const runningTotal = `${cityRunningTotal[city]}`;
        const cityTotal = `${cityTotals[city]}`;
        const leading = getLeadingZeros(runningTotal.length, cityTotal.length);

        // get id
        let id = `${leading}${runningTotal}`;
     
        // assign new filename
        const filename = `${city}${id}.${ext}`;
        photo['newName'] = filename;
        
    }

    // sort to original order
    photoJson.sort(function (a, b) {

        const idA = a['id'];
        const idB = b['id'];

        // sort ascending
        return idA - idB;
    })

    // output data in expected format
    let newNames = '';
    for (var p = 0; p < photoJson.length; p++) {
        const photo = photoJson[p];
        const filename = photo['newName'];

        // compile new list of file names
        if (newNames === '') {
            newNames = filename;
        } else {
            newNames = `${newNames}\n${filename}`;
        }

    }

    return newNames

}

function getLeadingZeros(length1, length2) {
    let leading = '';
    for (var l = length1 ; l < length2; l++) {
        leading = `0${leading}`;
    }
    return leading;
}

function increment(value) {
    if (value === undefined) {
        return 1;
    } else {
        return value + 1;
    }
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