// In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, sorted ascending by area.

// For example,

// const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
// sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]

// Without mutating the original array

//My solution

function sortByArea(array) {
  
    let newArray = array.map(el => el)
    function area(element) {
      return Array.isArray(element) ? element[0] * element[1] : 3.14 * (element **2);
    } 
    return newArray.sort((a,b) => area(a) - area(b));
  }

//Alternatives show two other ways to return without mutating

function area(shape) {
    if (typeof shape === 'object')
      return shape[0] * shape[1];
    else
      return Math.PI * Math.pow(shape, 2);
  }
  
  function sortByArea(array) {
    return array.slice(0).sort((a, b) => area(a) - area(b));
  }

const sortByArea = a => {
const getArea = i => Array.isArray(i) ? i[0] * i[1] : Math.PI * i * i;
return [...a].sort((i, j) => getArea(i) - getArea(j));
}