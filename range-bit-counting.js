    // You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.

    // Example
    // For a = 2 and b = 7, the output should be 11

    // Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7]. Converting the numbers to binary, we get [10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

    // Input/Output
    // [input] integer a
    // Constraints: 0 ≤ a ≤ b.

    // [input] integer b
    // Constraints: a ≤ b ≤ 100.

    // [output] an integer

    //My solution

    function rangeBitCount(a, b) {
        //coding and coding..
        let array = [];
        for (let i = a; i <= b; i++) {
          array.push(i);
        }
                //convert the numbers to binary
        return array.map(num => num.toString(2))
                      //join all the binary numbers together
                      .join('')
                      .split('')
                        //filter for 1s
                      .filter(el => el == 1)
                      //length gives number of ones
                      .length
        
      }


      //Alternative

      function rangeBitCount(a, b) {

        let sum = 0;
        
        for (let i = a; i <= b; i++) 
          sum += i.toString(2).split('1').length - 1;
        
        return sum;
        
      }