// dashatize it

// function dashatize(num) {
//     console.log(num)
//     if(!Number.isInteger(num)) {
//       return 'NaN';
//     }
//     if(num < 0 ) {
//       num = Math.sqrt(num **2);
//     }
//     num = num.toString().split('')
//     for(let i = 0; i < num.length; i++) {
//       if( num[i] % 2 !== 0) {
//         if(i + 1 < num.length && num[i + 1] !== '-' && num[i] != '-') {
//           num.splice(i + 1, 0, '-')
//         }
//         if(i - 1 >= 0 && num[i - 1] !== '-' && num[i] !== '-') {
//           num.splice(i, 0, '-')
//         }
//       }
//     }
//     return num.join('')
//   }

//My solution

function dashatize(num) {
    console.log(num)
    if(!Number.isInteger(num)) {
      return 'NaN';
    }
    if(num < 0 ) {
      num = Math.sqrt(num **2);
    }
    num = num.toString().split('')
    for(let i = 0; i < num.length; i++) {
      if( num[i] % 2 !== 0) {
        if(i + 1 < num.length && num[i + 1] !== '-' && num[i] != '-') {
          num.splice(i + 1, 0, '-')
        }
        if(i - 1 >= 0 && num[i - 1] !== '-' && num[i] !== '-') {
          num.splice(i, 0, '-')
        }
      }
    }
    return num.join('')
  }

//alternative

function dashatize(num) {
    return num = num.toString().split("").map(function(c){
      return c % 2 ? "-" + c + "-" :  c ;
    }).join("").split("-").filter(a => a != "").join("-");
    
  };
