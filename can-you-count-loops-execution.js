// As a programmer, one must be familiar with the usage of iterative statements in coding implementations! Depending on the chosen programming language, iterative statements can come in the form of for, while, do-while etc.

// Below is an example of a nested C-style for-loop:

// for(int i = 0; i < A; i++){ 
//   // some statements
//   for(int j = 0; j < B; j++){
//     // some statements
//     for(int k = 0; k < C; k++){
//       // some statements
//     }
//   }
// }
// Where A, B and C are natural numbers.

// Task

// Given an array of length N, where N denotes the number of iterative statements. Each item-pair in the array represents two elements, with the 1st value (V) indicating the upper boundary for the iteration to take place (can be inclusive or exclusive depending on the 2nd value) and the 2nd value (Boolean data type -> true / false depending on your chosen language) indicating whether the upper boundary (V) is inclusive or not.

// You must write a function that outputs an array in which each element represents the number of times each for-loop condition is evaluated. Below is an example for better understanding:

// Example

// arr = [[7, true], [5, false]]

// for(int i = 0; i <= 7; i++){   // This statement is executed 9 times before termination -> 0, 1, 2, 3, 4, 5, 6, 7, 8 (since 8 > 7 is the breaking condition)
//   for(int j = 0; j < 5; j++){  // In one cycle of outermost loop, this statement is executed 6 times before termination -> 0, 1, 2, 3, 4, 5 (since 5 >= 5 is the breaking condition)
//     // some statements
//   }
// }
// Note

// The array can be empty, with a range of 0 <= N <= 20
// The starting counter of the C-style for-loop is always 0
// The iteration expression or operation to be performed is always incremental
// The range of upper boundary is as follows: 1 <= V <= 20

//My solution

function countLoopIterations(arr){
    let final = [];
    for (let i = 0; i < arr.length; i++) {
      let sum = 1;
      let tempArray = arr.filter((el, index) => index <= i)
      for (let j = 0; j <= i; j++) {
        if (j < i) {
          sum *= arr[j][1] == true ? arr[j][0] + 1 : arr[j][0];
        }
        else {
          sum *= arr[j][1] == true ? arr[j][0] + 2 : arr[j][0] + 1;
         }
      }
      final.push(sum)
    } 
    return final
  }

//Alternative

function countLoopIterations(arr){
    let result = [],
        product = 1
    for (let [number,boolean] of arr) {
      let count = number + 1 + boolean
      result.push(count * product)
      product *= count - 1
    }
    return result
  }
