// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

//My solution

function towerBuilder(nFloors) {

    let tower = []
    for (let i = 0; i < nFloors; i++) {
      tower.unshift(' '.repeat(i) + '*'.repeat((nFloors * 2) - 1 - (i * 2)) + ' '.repeat(i))
    }
    return tower
  }