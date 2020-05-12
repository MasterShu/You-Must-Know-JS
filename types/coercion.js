/**
 * Coverting types is necessary in programs.
 */

/**
 * Coercion - String concatenation(number to string)
 */
const msg1 = "There are "
const dogs = 23
const msg2 = " dogs."

// Implicit coercion by plus operator 
const sentenceMsg1 = msg1 + dogs + msg2
console.log(sentenceMsg1)

// Idiomatic way of convertting number to string by adding empty tring.
const cats = 16
const myCats = cats + ""
console.log(myCats)

/**
 * Coercion - String to number
 */
const mouse = "98"
const myMouse = Number(mouse)
console.log(myMouse)

/**
 * Coercion - Boolean
 */

// Falsy
// "" 0 -0 null NaN false undefined
// Truthy
// Everthing else

// Sometimes implicit coercion can be quite useful.
const element2 = {
    value: "19"
}
const elementValue1 = 23
const elementValue2 = element2.value

if(Number(elementValue1) > Number(elementValue2)) {}

// More clean by use implicit coercion
if (elementValue1 > elementValue2) {}

/**
 * 
 * If a feature is sometimes useful and sometimes dangerous 
 * and if there is a better option
 * then always use the better option 
 * - "The Good Parts" Crockford
 * 
 * @var Usefule When the reader is focused on what's important
 * @var Dangerous When the reader can't tell what happen
 * @var Better When the reader understand the code 
 */