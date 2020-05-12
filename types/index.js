/**
 * Use new
 * 
 * Object()
 * Array()
 * Function()
 * Date()
 * RegExp()
 * Error()
*/
const yesterday = new Date("May 12, 2020")
yesterday.toUTCString()

console.log(yesterday.toUTCString())

/**
 * Don't use new
 * 
 * String()
 * Number()
 * Boolean
 */
const student = {
    age: 23
}

const myAge = String(student.age)

console.log(myAge)