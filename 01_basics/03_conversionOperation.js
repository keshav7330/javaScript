let score = null

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof (valueInNumber));

console.log(valueInNumber);


//  "33" => 33
//  "33abc" => Nan
//   true => 1; false => 0


let isLoggedIn = "hello"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//  1 => true; 0 => false 
//  "" => false
// "hello" => true

let someNumber = 33

let stringNum = String(someNumber)
console.log( typeof stringNum);
console.log(stringNum);
