// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
// Your task is to process a string with "#" symbols.
// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


// My solution



function cleanString(s) {

      const final = [];

      for (const c of s) {

        if (c === '#') {

          final.pop();

        } else {

          final.push(c);

        }

      }

      return final.join('');

    }
    