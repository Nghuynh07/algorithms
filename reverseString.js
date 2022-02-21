//write a recursive function that accepts a string and return the string the in reverse

function reverseString(string) {
  if (string.length === 0 || string.length === 1) return string;

  return string[string.length - 1].concat(
    reverseString(string.slice(0, string.length - 1))
  );
}

console.log(reverseString("hello"));

function reverseStringSecond(string) {
  if (string.length === 0 || string.length === 1) return string;

  return reverseStringSecond(string.slice(1)) + string[0];
}

console.log(reverseStringSecond("hello"));
