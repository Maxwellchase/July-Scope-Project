/***********************************************************************
Write a function using fat arrow syntax named `arrowMyMap` that accepts an array
and a callback as arguments. The function will return an array of new elements
obtained by calling the callback on each element of the array, passing in the 
element. Assign the below function to a variable using the const keyword.

Do not use the built in Array#map - use Array#forEach for iteration.


Examples:
let result1 = arrowMyMap1([100, 25, 81, 64], Math.sqrt);  // math.sqrt is cb, el is every element inside array []
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

***********************************************************************/

// your code here!

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
let arrowMyMap = (array, cb) => {
  let newArr = []
  for(let i = 0; i < array.length; i ++) {
    let el = array[i]
    newArr.push(cb(el))

  }
  return newArr
}







try {
  module.exports = arrowMyMap;
} catch (e) {
  return null;
}
