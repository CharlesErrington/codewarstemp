// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

//My solution

var encryptThis = function(text) {
    // Implement me! :)
    text = text.split(' ').map(el => {
      let first = el.charCodeAt(0)
      let second = ""
      if (el.length > 1) {
        second = el.slice(1).split('')
        let tempLetter = second[0]
        second[0] = second[second.length - 1]
        second[second.length - 1] = tempLetter
        second = second.join('')
  
      }
      return first + second
    })
    return text.join(' ')  
}