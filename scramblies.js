// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

//My solution

function scramble(str1, str2) {
   
    let counts = {};
    for (let c of str1) {
        if (!counts[c]) {
            counts[c] = 0;
        }
        counts[c] += 1;
    }

   
    for (let c of str2) {
        if (!counts[c] || counts[c] === 0) {
            return false;
        }
        counts[c] -= 1;
    }


    return true;
}