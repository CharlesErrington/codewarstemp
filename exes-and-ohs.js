// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//My solution

function XO(str) {
    //code here
  let strSplit = str.toLowerCase().split('');
  let exes = 0;
  let ohs = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] == 'o') {
      ohs++;
    } else if (strSplit[i] == 'x') {
      exes++;
    }
    
  }
  if (exes == ohs) {
    return true
  } else {
    return false
  }
  
}