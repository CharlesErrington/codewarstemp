// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

//My solution

const reverseWords = (str) => {
    str = str.split(' ')
    
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].split('').reverse().join('')
    }
    let newStr = str[0]
    for (let i = 1; i < str.length; i++) {
      newStr += " " + str[i] 
    }
    return newStr
  }