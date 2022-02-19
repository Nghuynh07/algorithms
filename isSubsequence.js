//write a function that takes in 2 strings and check whether the characters in the first string form a subsequence of the characters in the second string.
//basically check if first string appear somewhere in the last string without changing the order.
// isSubsequence('hello', 'hello world') = true
// isSubsequence('sing', 'sting') = true
// isSubsequence('abc', 'abracadabra') = true
// isSubsequence('abc', 'acb') = false

function isSubsequence(stringOne, stringTwo) {
  let i = 0;
  let j = 0;

  while (j < stringTwo.length) {
    if (stringTwo[j] === stringOne[i]) i++;
    j++;
    if (i === stringOne.length) return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
