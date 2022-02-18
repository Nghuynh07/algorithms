//write a function which accepts a variable nu mer of arguments
//check if there are any duplicates among the arguments passed in
//areThereDuplicates(1,2,3) => false
//areThereDuplicates(1,2,2) => true
//areThereDuplicates('a', 'b', 'c', 'a') => false

function areThereDuplicates(...num) {
  let obj = {};
  //   console.log(num);

  for (let val of num) {
    obj[val] = (obj[val] || 0) + 1;
  }
  //   console.log(obj);

  for (let key in obj) {
    if (obj[key] > 1) return true;
  }

  return false;
}

// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates("a", "b", "c", "a"));

//using multiple pointer

function areThereDuplicates(...args) {
  args.sort();

  let start = 0;
  let next = 1;

  while (next < args.length) {
    if (args[start] === args[next]) return true;
    next++;
    start++;
  }

  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
