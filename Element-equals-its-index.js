// Element equals its index

// DESCRIPTION:
// Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index.
// Return -1 if there is no such index.

// Your algorithm should be very performant.

// [input] array of integers ( with 0-based nonnegative indexing )
// [output] integer

// Examples:
// input: [-8,0,2,5]
// output: 2 # since array[2] == 2

// input: [-1,0,3,6]
// output: -1 # since no index in array satisfies array[index] == index
// Random Tests Constraints:
// Array length: 200 000

// Amount of tests: 1 000

// Time limit: 150 ms

// If you liked this Kata check out my more complex creations:

// Find the neighbourhood in big dimensions. Neighbourhood collection

// The Rubik's cube

// - ARRAYS,
// - ALGORITHMS

// Solution:

function indexEqualsValue(a) {
    let min = 0;
    let max = a.length - 1;
    while (min < max) {
      let i = Math.floor((min+max)/2);
      if (i <= a[i]) {
        max = i;
      } else {
        min = i + 1;
      }
    }
    return a[max] === max ? max : -1;
}