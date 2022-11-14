// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

//My solution

function encode(string) {
    let code = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5
    }
    return string.split('').map(el => ['a','e','i','o','u'].includes(el) ? code[el] : el).join('')
  }
  
  function decode(string) {
    let uncode = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u'
    }
    return string.split('').map(el => ['1','2','3','4','5'].includes(el) ? uncode[el] : el).join('')
  }

//alternate solution

function encode(string){
    var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
    return codeStringGivenMapping(string, vowelMapping);
  }
  
  function decode(string){
    var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
    return codeStringGivenMapping(string, vowelMapping); 
  }
  
  function codeStringGivenMapping(string, mapping){
    return string.split('').map(function(char){
      return mapping[char] || char;
    }).join(''); 
  }