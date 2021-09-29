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
test('single photo case', 'Warsaw01.jpg', 'photo.jpg, Warsaw, 2013-09-05 14:08:15');

test(
'two photo case ordered correctly', 
`Warsaw01.jpg
Warsaw02.jpg`, 
`photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:14`
);

test(
'two photo case ordered incorrectly', 
`Warsaw02.jpg
Warsaw01.jpg`, 
`photo.jpg, Warsaw, 2013-09-05 14:08:15
photo.jpg, Warsaw, 2013-09-05 14:08:14`
);

test(
'duplicate photo name and date ordered correctly', 
`Warsaw01.jpg
Warsaw02.jpg
Warsaw03.jpg`, 
`photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:14`
);
    
test(
'duplicate photo name and date ordered incorrectly', 
`Warsaw03.jpg
Warsaw01.jpg
Warsaw02.jpg`, 
`photo.jpg, Warsaw, 2013-09-05 14:08:14
photo.jpg, Warsaw, 2013-09-05 14:08:13
photo.jpg, Warsaw, 2013-09-05 14:08:13`
);

test(
'multiple cities and file extensions', 
`Perth01.jpg
Warsaw01.jpg
Warsaw02.jpg
Melbourne01.png`, 
`photo.jpg, Perth, 2013-09-05 14:08:14
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
    let photos = S.split(`\n`);
    let photoJson = [];

    // assign unique ids and extract information
    for (var p = 0; p < photos.length; p++) {
        let photo = photos[p].split(',');
        let name = photo[0].split('.');
        let city = photo[1].trim();
        let date = Date.parse(photo[2]);
        photoJson.push({
            'id': p,
            'name': name[0],
            'ext': name[1],
            'city': city,
            'date': date,
        });
    }
    
    // sort by date so correct identifiers can be assigned
    photoJson.sort(function (a, b) {

        // Note: duplicate photo times due to city timezones will have their order sorted by
        // their id. i.e. original input position.
        const dateA = a['date'];
        const dateB = b['date'];

        // sort ascending
        return dateA - dateB;
    })

    // assign photo names

    const cityCounts = {};

    // loop through sorted photo array
    for (var p = 0; p < photoJson.length; p++) {
        const photo = photoJson[p];
        const city = photo['city'];
        const ext = photo['ext'];

        // update city counts
        if (cityCounts[city] == undefined) {
            cityCounts[city] = 1;
        } else {
            cityCounts[city] = cityCounts[city] + 1;
        }
        
        // get id from count
        let id = `${cityCounts[city]}`;

        // enforce 2 digit length with prefixed 0
        if(id.length == 1) {
            // TODO - leading 0s - all photo numbers should have same length.. same as largesrt
            id = `0${id}`;
        }

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
    console.log(`pass: ${result}\t expected: ${expectedResult}\t actual: ${actual}\t ${inputs}\t`);
}