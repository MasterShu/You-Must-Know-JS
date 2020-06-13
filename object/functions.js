/**
 * Functions
 * 
 * You must know the new feature. There are include
 * 
 * Functions are Objects
 * 
 * Arrow Function () => {}
 * 
 * Default Parameters
 */

// Arrow Function
const giveMe = () => {
    console.log("Give you!")
}
console.log(typeof giveMe) // function

// Default Parameters
const needTwoArg = (a, b='empty') => {
    return [a, b]
}
const myArgTest = needTwoArg('Just One')
console.log(myArgTest) // [ 'Just One', 'empty' ]

const createTuple = function (a, b, c, d, e, f) {
    // arguments keyword pick up everythings passed into the function,
    // even it doesn't have parameter.
    console.log(arguments)
    return [[a, b, c], [d, e, f]]
}

const obj = createTuple('i', 'am', 'a', 'tuple', 'do', 'you', 'know')
/**
 log [Arguments] {
  '0': 'i',
  '1': 'am',
  '2': 'a',
  '3': 'tuple',
  '4': 'do',
  '5': 'you',
  '6': 'know' }
  */
console.log(obj) // [ [ 'i', 'am', 'a' ], [ 'tuple', 'do', 'you' ] ]

console.log('I need a breadpoint')