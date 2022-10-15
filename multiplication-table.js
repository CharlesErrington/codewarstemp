// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

//My solution

multiplicationTable = function(size) {
    // insert code here
    let multiArray = [];
  
    for (let i = 0; i < size; i++) {
      let tempArray = []
      for (let j = 1; j <= size; j++) {
        let number = ((i + 1) * j)
        tempArray.push(number)
      }
      multiArray.push(tempArray)
    }
  
    return multiArray
  }

  
//Alternative

multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
  }