//  primitive

/* 7 types :-
*
* String
* Number
* Boolean
* null
* undefined
* Symbol
* BigInt
*/
const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);
//false 

const bigNumber = 7744334323233432n

// reference / non-primitive

/*
* Array
* Objects
* Functions
*/

const heros = ["tony", "thor", "hulk"];

let myObj = {
    name: "keshav",
    age: 22,

}

const myFunction = function (){
    console.log("Hello world");
}

console.log(typeof heros);
