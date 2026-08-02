const accountId = 144522
let accountEmail = "rishika@gmail.com"
let accountPassword = "12345"
accountCity = "kanpur"
let accountState;


accountEmail = "hfc@google.com"
accountPassword = "55"
accountCity = "bengal"


/*
prefer not to use var bcoz of issue in block scope and function scope(scope means curly braces)
*/
// accountId = 2 not allowed
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
