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
// solutionA([100, 100, -10], ["2020-12-31", "2020-12-31", "2020-11-31"]);

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
 * @param {*} D Some input parameter
 * @returns Some solution
 */

function solutionA(A, D) {

    // TODO - clean up object definitions
    let balances = {};
    let payments = {}; 
    let paymentAmounts = {}; 

    // loop through all transactions
    for (var k = 0; k < A.length; k++) {
        let date = D[k];
        let dateArray = date.split('-');
        let month = dateArray[1];
        let amount = A[k];

        // update balance
        let monthBalance = balances[month];
        if (monthBalance === undefined) {
            // console.log(amount);
            balances[month] = 0 + amount;
            // console.log(balances[month]);
        } else {
            // console.log(amount);
            balances[month] = balances[month] + amount;
        }

        // update payment details
        let monthPayments = payments[month];
        let monthPaymentAmounts = paymentAmounts[month];
        if (monthPayments === undefined) {
            payments[month] = 0;
            paymentAmounts[month] = 0;
        }

        if (amount < 0) {
            payments[month] = payments[month] + 1;
            paymentAmounts[month] = paymentAmounts[month] + amount;
        }
        
    }

    // calculate total balance
    let balance = 0;

    Object.keys(balances).forEach(function(k) {
        let monthCardFee = 5;
        if (payments[k] >= 3 && paymentAmounts[k] <= -100) {
            monthCardFee = 0;
        }

        // console.log(balances[k]);
        balance = balance + balances[k] + monthCardFee;
        // console.log(balance, balances[k], monthCardFee);
    })

    // console.log(balances);
    // console.log(payments);
    // console.log(paymentAmounts);
    // console.log(balance);
    return balance;

}