//write a function given a sorted array and a target number. Determine if there is a pair in the array where the average of the pair === the target value

//averagePair([1,2,3],2.5) return true
//averagePair([1,3,3,5,6,7,10,12,19],8) return true
//averagePair([-1,0,3,4,5,6],4.1) return false
//averagePair([],4) return false

const averagePair = (sortedArray, averageNum) => {
  if (sortedArray.length === 0) return false;

  let start = 0;
  let last = sortedArray.length - 1;

  while (last < sortedArray.length && start !== last) {
    if ((sortedArray[start] + sortedArray[last]) / 2 === averageNum) {
      return true;
    }
    if ((sortedArray[start] + sortedArray[last]) / 2 < averageNum) {
      start++;
    }
    if ((sortedArray[start] + sortedArray[last]) / 2 > averageNum) {
      last--;
    }
  }

  return false;
};

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
