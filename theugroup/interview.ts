// Q1
//
// Problem: find the length of the longest non-repeating substring.
// Example inputs and outputs are as follows:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence
// and not a substring.
// Input: s = ""
// Output: 0
// Input: s = "wkewsd"
// Output: 5
// Explanation: The answer is "kwesd", with the length of 5.

/**
 * Requiremnents:
 *
 * spilt string into array
 * loop through all elements in array
 * check for repeting substring
 * push elment to hash map
 * check if current elemtn alredy exisittns in hash map
 * if not exits continue
 * if exists
 * store repeating substring and lenth
 * repeat from next character in the original string
 * loop through memoized storage and check for the longest repeating substring
 * return lenght of said string
 *
 * Walking through algorithm with same data
 * [a, b, c, a ,b, c, b, b]
 *
 * first iteration of loop
 * [a, ]
 * [a, b]
 * [a,b, c ]
 * store in Hash map
 *
 * second iteration of loop
 * [b, c, a, ]
 *
 * repeat
 *
 * */

export function solution(s: string) {
  const arr = s.split("");

  let longest = 0;

  for (let i = 0; i < arr.length; i++) {
    const result = checkForRepeatingString(i, arr);
    console.log(result);
    console.log(result.length);

    if (result.length > longest) {
      longest = result.length;
    }
  }

  return longest;
}

function checkForRepeatingString(position: number, arr: string[]) {
  const unique: string[] = [];
  for (let i = position; i < arr.length; i++) {
    const c = arr[i];
    // case 1 - check if in repeating string
    if (unique.includes(c)) {
      // store the repeating string and length
      let str = ``;
      unique.map((e) => {
        str = str + e;
      });
      break;
    } else {
      // case 3 - repeating string
      unique.push(arr[i]);
    }
  }

  return unique;
}

console.log(solution("abcabcbb"));

/**
 * Q2: design a system that scraps reciept data from amazon for a specific recieptJar customer.
 *
 * consider the following:
 * front end and back end
 * user provides user name and pass
 * log into amazon account
 * collect reciepts from account
 * no antibot problems
 * status of user? are they already scrapping
 * inject javascript code? failed case
 * user has not more orders
 * order means they have bought on amazon.com
 * not orders? user closed app, javascripot failed
 *
 */

/**
 * Q3: design the paywall system for a news app.
 *
 * Consider the following:
 * - something like 7news.com
 * - use of cdns
 * - if subscribed umlimited
 * - if not 5 page views
 * - 1 million users per day
 * - 5 million page views
 * - static content
 * - react
 * - aws
 * - ttfp < 100ms
 * - google can see full page, if paywalled
 * - multiple renders for desktop, mobile, etc.
 *
 */
