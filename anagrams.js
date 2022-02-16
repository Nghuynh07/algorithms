//give two strings, write a function to determine if the second string
// is an anagram of the first. anagram is word/phrase/name formed by rearranging
//the letters of another such as  cinema, formed iceman

function anagrams(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  let objOne = {};
  let objTwo = {};

  for (let val of stringOne) {
    objOne[val] = (objOne[val] || 0) + 1;
  }

  for (let val of stringTwo) {
    objTwo[val] = (objTwo[val] || 0) + 1;
  }

  for (let val in objOne) {
    if (objOne[val] !== objTwo[val]) {
      return false;
    }
  }

  //   console.log(objOne);
  //   console.log(objTwo);
  return true;
}
console.log(anagrams("codingdojo", "codjodoing"));
console.log(anagrams("codingdojo", "ccodjodoing"));
console.log(anagrams("birthappydayh", "happybirthday"));

//0123456789
//
