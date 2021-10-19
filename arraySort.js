//To manipulate this code ,uncomment the code chunks and play around with it
var numbers = [5, 3, 4, 1, 2];//dont touch this
numbers.sort(compareFunction = (a, b) => {return b - a});//arrow functions


//Start

// numbers.sort(compareFunction);
// function compareFunction(a,  b){
//     return b -a ;
// }

//End

//start

// numbers.sort(function(a, b){
//     return  b - a;
// });

//end
let lowest = numbers[0];//set a -b
let highest = numbers[0];//set b - a

console.log(highest);