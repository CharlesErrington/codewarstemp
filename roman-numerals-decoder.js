// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:

// solution('XXI'); // should return 21
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

//My solution

function solution (roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
    let numberArray = roman.split('').map(el => el == 'M' ? 1000 : el == 'D' ? 500 : el == 'C' ? 100 : el == 'L' ? 50 : el == 'X' ? 10 : el == 'V' ? 5 : el == 'I' ? 1 : 0)
    for (let i = 0; i < numberArray.length; i++) {
      if (numberArray[i] < numberArray[i + 1]) {
        numberArray[i] = -numberArray[i]
      }
    }
      return numberArray.reduce((sum, num) => sum + num, 0)
  }

//Alternatives

function solution(roman){
    var conversion = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    
    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
 }

 function solution(roman) {
    var value = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    return roman.split('').map( d => value[d] ).reduce( (s,v,i,o) => s + ( (o[i+1] > v) ? -v : v ), 0 );
  }