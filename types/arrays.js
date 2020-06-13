var user = []

user.name = "Ted"

var who = user
console.log(who) 
// [ name: 'Ted' ]

console.log(typeof who) 
// object
// It's wired, right?
// In JavaScript arrays are objects


console.log("who's length =>", who.length) // 0
// Arrays are numerical indices.
user[10] = true
console.log("who's length =>", who.length) // 11
