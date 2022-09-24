// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

//My solution

function switcheroo(x){
    return x.split('').map(el => el === 'a' ? 'b' : el === 'b' ? 'a' : el).join('')
  } 

//Alternative

const switcheroo = x => x.replace(/[ab]/gi, match => match === 'a' ? 'b' : 'a');