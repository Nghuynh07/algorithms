//write a recursive function that return true if the string passed it is a palindrome. otherwise return false
function isPalindrome(string) {
  if (string.length === 1) return true;
  if (string.length === 2) return string[0] === string[1];
  if (string[0] === string[string.length - 1])
    return isPalindrome(string.slice(1, string.length - 1));
  return false;
}

console.log(isPalindrome("tacocat"));
