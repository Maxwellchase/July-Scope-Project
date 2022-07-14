/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/
 // try .reverse() ,
// your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

//did work fortunatly 
let arrowMirrorArray = arr => {  // if use only arguement, than dont have to use ()
let arrCopy = arr.slice(0, arr.length) // copies all values from 0 index to length of arr
let arrReverse = arr.reverse()
//return [...arrCopy, ...arrReverse] // is this hardcoding / what is spread doing? / how would do with .push(). is join and concat the same?  no join turns into a str
 return arrCopy.concat(arrReverse) //this worked too, join would be incorrect 

}







console.log(arrowMirrorArray([1,2,3])); // => [ 1, 2, 3, 3, 2, 1 ]
console.log(arrowMirrorArray(['a', 'b', 'c', 'd'])); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}
