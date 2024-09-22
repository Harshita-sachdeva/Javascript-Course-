const accountId = 14453  // for not allowing the values to change 
let accountEmail ="harshita@google.com" // for declaring variable 
let accountPassword = "12345"  // for declaring variable 
accountCity = "jaipur"
let accountState; // for declaring a variable 
// accountId = 2 not allowed as its a const 

// accountEmail= "heh@e.com"
// accountPassword="121212121"
// accountCity="Bengaluru"

/*
 PRefer nt to use var :- 
 bcz of issue in block scope and functional scope 
 block scope :- { } // in loops or conditional structures 
*/

console.log(accountId);  //for printing in console 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])  // for printing multiple values on console .. forming a table ..
