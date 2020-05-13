/**
 * Block Scope
 * 
 * It had been missing from JavaScript for quite 
 * a long time, and now we have that.
 * In ES6, we have the ability to use the let keyword.
 * 
 * You can use block scope instead of IIFF.
 */
var msg1 = "Hello World!!!"

{
    let msg1 = "Hello Block Scope!!!"
    console.log(msg1)
}

console.log(msg1)