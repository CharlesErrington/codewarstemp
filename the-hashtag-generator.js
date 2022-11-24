// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

//My solution

function generateHashtag (str) {
    if (str.trim() == '') {
      return false
    }
    if(!str) {
      return false
    }
    console.log(str)
    let hashtag = str.trim().split(' ')
    hashtag = hashtag.filter(el => el != '')
   
    for (let i = 0; i < hashtag.length; i++) {
      hashtag[i] = hashtag[i].split('')[0].toUpperCase() + hashtag[i].slice(1)
    }
  
    hashtag = '#' + hashtag.join('')
  
    if (hashtag.length > 140 || hashtag == '') {
      return false
    }
    return hashtag
  }