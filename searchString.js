function searchString(long, pattern) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] !== long[i + j]) {
        console.log("Match not found");
        break;
      }
      if (j === pattern.length - 1) {
        console.log("FOUND A MATCH");
        count++;
      }
    }
  }
  return count;
}

console.log(searchString("lorie loled", "lol"));
