//   Stack ( primitive ), Heap( non-primitive )

let myName = "keshavChettry"

let anotherName = myName
anotherName = "hello"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "username@gmail.com",
    upi: "hello@ylb"
}
let userTwo = userOne

userTwo.email = "keshav@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


