const lengthOfLastWord = function (string) {
  let index = 0;
  let emptySpaces = 0;
  let splitString = string.trim().split("");
  console.log(splitString.length);

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === " ") {
      index = i;
      emptySpaces++;
    }
  }

  if (emptySpaces === 0) {
    return splitString.length;
  }

  return splitString.length - (index + 1);
};

console.log(lengthOfLastWord("hello world hi"));
