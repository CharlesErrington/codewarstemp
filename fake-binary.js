// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//My solution

function fakeBin(x){
    let x2 = x.replace(/[1-4]/g, 0)
    x2 = x2.replace(/[5-9]/g, 1)
    return x2
  }