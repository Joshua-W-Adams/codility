// function countVowelPermutation(n: number): number {
//   const vowels = ["a", "e", "i", "o", "u"];
// }

// console.log(countVowelPermutation(1));
// console.log(countVowelPermutation(2));

// perms(1) = 5 = a, e, i, o, u = 5
// perms(2) = 25 = ae, ai, ao, au, ei, ea, eo, eu, ia, ie, io, iu, oa, oe, oi, ou, ua, ue, ui, uo = 25
// perms(3) = 125 = aei, aeo, aeu, aie, aia, aio, aiu, aoe, aoi, aou, aue, aui, aua, eia, eie, eio, eiu, eoa, eoe, eoi, eou, eua, eue, eui, euo, iae, iai, iao, iau, iea, iee, iei, ieo, ieu, ioa, ioe, ioi, iou, iua, iue, iui, iuo, oae, oai, oao, oau, oea, oee, oei, oeo, oeu, oia, oie, oii, oio, oiu, oua, oue, oui, ouo, uae, uai, uao, uau, uea, uee, uei, ueo, ueu, uia, uie, uii, uio, uiu, uoa, uoe, uoi, uou = 125

// So this is effectively a probability calculation.
// perms(n) = 5^n

// so then, if this is the case, how would be solve this problem using a recursive function

// function recursive(n: number): number {
//   if (n === 1) {
//     return 5;
//   }

//   return 5 * recursive(n - 1);
// }

// console.log(recursive(3));

// firstly, we need to also consider the validity cases of the strings
// which would be as follows:

function isValid(vowel: string, nextVowel: string): boolean {
  if (vowel === "a" && nextVowel === "e") {
    return true;
  }
  if (vowel === "e" && ["a", "i"].includes(nextVowel)) {
    return true;
  }
  if (vowel === "i" && ["a", "e", "o", "u"].includes(nextVowel)) {
    return true;
  }
  if (vowel === "o" && ["i", "u"].includes(nextVowel)) {
    return true;
  }
  if (vowel === "u" && nextVowel === "a") {
    return true;
  }
  return false;
}

function perms(vowel: string, nextVowel: string) {
  if (isValid(vowel, nextVowel)) {
    return vowel + nextVowel;
  }

  return null;
}

// How about a 'bottom up' apporach instead? How would I think about this problem then?

// effectively I would need
// 1. calculate all permutaitons of vowels at index 1
// 2. store these perumations in an array at index 1
// 3. move onto the next length
// 4. loop through all the words in the previous location in the array
// 5. grab the last character and check the validity
// 6. store these words in teh next position in the array
// 7. repeat until we reach the desired length

function countPerms(n: number) {
  const vowels = ["a", "e", "i", "o", "u"];
  const words: string[][] = Array.from({ length: n + 1 }, () => []);

  if (n == 1) {
    return 5;
  }

  // base case, n = 1
  for (let v = 0; v < vowels.length; v++) {
    words[1].push(vowels[v]);
  }

  // recursive case, n > 2
  for (let p = 2; p <= n; p++) {
    const prevWords = words[p - 1];
    for (let w of prevWords) {
      for (let v of vowels) {
        if (isValid(v, w[w.length - 1])) {
          words[p].push(w + v);
        }
      }
    }
  }

  // console.log(words);

  return words[n].length;
}

console.log(countPerms(20));

/// okay well this solution is quite good, but how can we make it better and more time and memory efficint, as right now the memory effciency is not great
/// lets take it back to the pattern which is to define the base case, then loop over each result. Maybe we can do something else like...
/// instead of storing all the words, just store the count of the last letter of each word, as that is all we need to complete the calculation
/// so this would look something like this....
///
/// [1] = [a, e, i, o, u] = [1, 1, 1, 1, 1]
/// [2] = ['ae', 'ai', 'au', ea, ei, ie, io, oi, ui, uo] = [1, 2, 4, 2, 1]
///
/// Then in my loop instead of looping through the words, i loop through the instances of the last letter
/// so the solution then would be as follows
/// get previous count of last letter
/// loop through vowels
/// check for validity
/// multiply validity

// Note: modulo 10^9 + 7 is common in programming challenges to prevent the sults falling outside the range in which a integer number can be stored.
// namely 2^31 - 1 for a 32 bit computer system. It is a prime umber and big enough to keep results interesting and small enough to avoid the overflow
// which is which it is commonly used in programming challenges.
