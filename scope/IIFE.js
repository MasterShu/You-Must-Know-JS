/**
 * IIFF 
 * Immediately Invoked Function Expression
 * 
 * 
 */
var msg1 = "Hello World!!!";

// Will make a new block scope inside of myMsg1 function
(function myMsg1() {
    // It will be making a msg1 variable inside of myMsg1 function
    // Not override the one from line 7
    var msg1 = "Hello IIFF!!!"
    // Will print "Hello IIFF!!!"
    console.log(msg1)
})()

// Will print "Hello World!!!"
console.log(msg1)