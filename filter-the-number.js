// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//My solution

var filterString = function(value) {
    //Complete this function :)
    return parseInt(value.split('').map(el => parseInt(el)).filter(el => el == el).join(''))
  }

//Alternatives

var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ""))
  }

  var FilterString = function(value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
  }