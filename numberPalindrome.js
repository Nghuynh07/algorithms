const numberPalindrome = (number) => {
  const numberInString = String(number);
  const reverseString = numberInString.split("").reverse().join("");

  let sameIndex = 0;

  if (numberInString.length === 0 || numberInString.length === 1) return true;

  for (let i = 0; i < numberInString.length; i++) {
    if (numberInString[i] === reverseString[i]) {
      sameIndex++;
    } else {
      return false;
    }
  }
  return sameIndex === numberInString.length;
};

console.log(numberPalindrome(1000021));
