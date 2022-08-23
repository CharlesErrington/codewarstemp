// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My solution

function findShort(s){
    let sArray = s.split(' ')
    let sLength = sArray.length
    let shortest = sArray[0].length
    for (let i = 0; i < sLength; i++) {
      if (sArray[i].length < shortest) {
        shortest = sArray[i].length
      }
    }
    return shortest
  }