let myDate = new Date()

// console.log(myDate.toDateString());
// // console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// // console.log(myDate.toString());
// // console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2024 , 7, 31)
// let myCreatedDate = new Date(2024 , 7, 31, 5, 3)
// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("12-30-2023")
// console.log(myCreatedDate.toLocaleString());

let myDate2 = Date.now()
// console.log(myDate2);
// console.log(myCreatedDate.getTime());

console.log(Date.now()); // present date from 1 jan 1970 in millisec

//convert in sec
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday: "long"
})
);








