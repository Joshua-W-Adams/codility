/**
 * Determine the account balance in the year 2020 for a list of transactions.
 * 
 * Transactions are are provided as the following parameters:
 * A: []<int>
 * D: []<String YYYY-MM-DD>
 * 
 * Monthly account fees are also charged at $5 per month. Unless there have been atleast 3 negative transactions with a minimal total of $100.
 * 
 * Assumptions:
 * - Dates will only ever be in the year 2020
 * - The account has been open for the whole year (e.g. Fees will always attempt to be charged for every month)
 * - Input arrays will always be the same length
 * - Input arrays will always have data in the format specified
 * - Initial balance is always 0
 * 
 * Complexity:
 * - Time Complexity: O(A) i.e. performance scales linearly with input size. Only performs a single loop.
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

test('empty case', 0, [], []);
test('null case', 0, null, null);
test('minimal positive case', -50, [10], ['2020-01-01']);
test('minimal negative case', -70, [-10], ['2020-01-01']);

test('fee applied all months', 230, [100, 100, 100, -10], ['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29']);
test('fee applied 11 months', 25, [180, -50, -25, -25], ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31']);
test('fee applied 11 months. 0 case.', -164, [1, -1, 0, -105, 1], ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12']);
test('transaction values exceeds fee limit. Count does not.', -164, [1, -1, 0, -105, 1], ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12']);
test('transaction count exceeds fee limit. Value does not.', 80, [100, 100, -10, -20, -30], ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08']);

/**
 * Default function signature for solution
 * @param {*} A Some input parameter
 * @param {*} D Some input parameter
 * @returns Some solution
 */
function solutionA(A, D) {

    // json object to track the balances, payment totals and payment counts per month
    const balances = {};

    // handle empty case inputs
    if (!A || A.length == 0) {
        return 0;
    }

    // loop through all transactions
    for (var k = 0; k < A.length; k++) {
        // extract information from transactions
        const date = D[k];
        const dateArray = date.split('-');
        // strip any leading 0s
        const month = parseInt(dateArray[1]);
        const amount = A[k];

        // handle negative transaction amounts (payments)
        let payment = 0;
        let increment = 0;
        if (amount < 0) {
            payment = amount;
            increment++;
        }

        // calculate monthly balance values
        if (balances[month] === undefined) {
            balances[month] = {
                'balance': 0 + amount, 
                'paymentTotal': 0 + payment, 
                'paymentCount': 0 + increment,
            };
        } else {
            let balance = balances[month];
            balances[month] = {
                'balance': balance['balance'] + amount, 
                'paymentTotal': balance['paymentTotal'] + payment, 
                'paymentCount': balance['paymentCount'] + increment,
            };
        }        
        
    }

    // calculate total balance
    let totalBalance = 0;

    // loop through all months in year
    for (var m = 1; m <= 12; m++) {
        // get null object if no balance was calculated for month
        const balance = balances[m] || {};
        const pCount = balance['paymentCount'] || 0;
        const pTotal = balance['paymentTotal'] || 0;

        // handle waiving account fees
        let monthlyFee = -5;
        if (pCount > 2 && pTotal <= -100) {
            monthlyFee = 0;
        }

        // caculate yearly balance aggregate
        totalBalance = totalBalance + (balance['balance'] || 0) + monthlyFee;
    }

    return totalBalance;

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
        inputs = `inputA: ${inputA}`;
    }
     
    console.log(`${name}`);
    console.log(`pass: ${result}\t expected: ${expectedResult}\t actual: ${actual}\t ${inputs}\t`);
}