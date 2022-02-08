//Write a function take thats in two arrays
//Function should return true if every value in the array has a corresponding
//value squared in the second array
// Array should have the same frequency. If the the length of both arrays are not equal
//function will return false
//if one of the array does not have a corresponding value it also return false
//if one of the array missing a corresponding value will also return false

//APPROACH ONE
function sameApproachOne(arrayOne, arrayTwo) {
  //check if both arrays has same length, if not return false
  if (arrayOne.length !== arrayTwo.length) return false;

  //loop through arrayOne
  //check if there is a squared value in arrayTwo using indexOf if not return false
  for (let i = 0; i < arrayOne.length; i++) {
    let index = arrayTwo.indexOf(arrayOne[i] ** 2);
    if (index === -1) {
      return false;
    }
    //each iteration if there is a squared value in arrayTwo
    //it'll spice at that index
    //if no corresponding value doesn't or the index is out of bound then return false
    //this steps continue until arrayTwo is spiced no more then return true
    arrayTwo.splice(index, 1);
  }
  //   console.log(arrayOne, arrayTwo);
  return true;
}

const approachOne = sameApproachOne([1, 2, 3, 4], [1, 16, 9, 4]);

// console.log(approachOne);

//approach one time complexity worst case scenario is O(n2) b/c of nested loop
// for each iteration of arrayOne, it checked with indexOf arrayTwo to find a match
//worst case is it'll go through each and every arrayTwo to find the corresponding value which is O(n2)

//APPROACH TWO
