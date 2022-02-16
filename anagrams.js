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
    console.log(val);
    if (objOne[val] !== objTwo[val]) {
      return false;
    }
  }

  //   console.log(objOne);
  //   console.log(objTwo);
  return true;
}
console.log(anagrams("codingdojo", "codjodoing"));

function anagramTwo(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  const letterObject = {};

  for (let i in stringOne) {
    letterObject[stringOne[i]] = letterObject[stringOne[i]]
      ? (letterObject[stringOne[i]] += 1)
      : (letterObject[stringOne[i]] = 1);
  }

  for (let i in stringTwo) {
    if (!letterObject[stringTwo[i]]) {
      return false;
    } else {
      letterObject[stringTwo[i]] -= 1;
    }
  }
  return true;
}

console.log(anagramTwo("anagrams", "smagrana"));
console.log(anagramTwo("anagrams", "smagranawr"));
