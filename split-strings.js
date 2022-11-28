// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//My solution

function solution(str){
    if (str == '') {
      return []
    }
     str = str.split('')
     if (str.length % 2 != 0) {
       str.push('_')
     }
    for(let i = str.length - 2; i > 0; i -= 2) {
      str.splice(i, 0, '-')
    }
    return str.join('').split('-')
  }