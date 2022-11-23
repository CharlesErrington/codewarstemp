// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

//My solution

function toCamelCase(str){
    if(!str) {
      return ''
    }
    return str.replace(/[-]/g, '_').split('_').map((el,i) => i == 0 && el[0] === el.split('')[0].toLowerCase() ? el : el[0].toUpperCase() + el.slice(1)).join('')
  }

//Alternative

function toCamelCase(str){ 
    let arr = str.split('');
    for(i = 0; i < arr.length; i++){
      let letter = arr[i];
      if(letter == '_' || letter == '-') {
        arr[i + 1] = arr[i + 1].toUpperCase();
        arr[i] = '';
      } 
    }
    return arr.join('');
  }