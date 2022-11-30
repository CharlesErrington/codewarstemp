// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//My solution

// complete the function
function solution(string) {
    string = string.split('')
  for(let i = string.length - 1; i >= 0; i--) {
    if (string[i] === string[i].toUpperCase()) {
      string.splice(i,0,' ')
    }
  }
  return string.join('')
}

//Alternative

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }