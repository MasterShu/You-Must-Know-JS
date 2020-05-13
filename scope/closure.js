/**
 * Closure is when a function "remembers" the variables outside of it,
 * even if you pass that function elsewhere.
 * 
 * Closure is a tremendously important concept in all of programming.
 * 
 * - Variable is declared in some outer scope.
 * - It's only closure, we can only observe that
 *   as a closure if we take that function we pass
 *   it somewhere.
 */
function printHello(hello) {
    setTimeout(() => {
        console.log(hello)
    }, 2000);
}

function printAgain(hello) {
    return function sayHello() {
        console.log(hello)
    }
}

printHello("Hello closure!!!")
const sayAgain = printAgain("How are you?")
sayAgain()