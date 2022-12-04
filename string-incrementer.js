// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//My solution

function incrementString (string) {
    console.log('string', string)
    // return incrementedString
    let lastLetterIndex = -1;
    
    for (let i = string.length - 1; i >= 0; i--) {
      if (string.charAt(i).match(/[a-z]/i)) {
        lastLetterIndex = i
        break;
      }
    }
    
    console.log('lastLetterIndex ', lastLetterIndex)
    
    if (string.split('').every(el => isFinite(el))) {
      let number = (+string + 1).toString()
      while (number.length < string.length - lastLetterIndex - 1) {
        number = '0' + number
      }
      return number
    }
    
    if (lastLetterIndex == -1) {
      return string + 1
    }
    
    let number = (+string.slice(lastLetterIndex + 1) + 1).toString()
    
    while (number.length < string.length - lastLetterIndex - 1) {
      number = '0' + number
    }
    console.log('result' + string.slice(0, lastLetterIndex + 1) + number)
    return string.slice(0, lastLetterIndex + 1) + number
  }