const accountId = 123;

let accountEmail = "keshav@gmail.com"
var accountPassword = "12345"
accountCity = "uttarakhand"

let accountState;
/*
prefer not to use var
because of issue in block scope and functional scope
*/


// accountId = 2  //not allowed

accountEmail = "hi@gmail.com"
accountPassword = "3456"
accountCity = "delhi"


console.log(accountId);

console.table([accountId,accountEmail, accountPassword, accountCity ,accountState])
