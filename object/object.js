const user = {}
// Assignments with Dots
user.name = "Ted"
console.log(user.name)

// Access with Dots
var who = user.name
var Ted = user
console.log(who)
console.log(Ted.name)

user.name = "Tom"

console.log(who)
console.log(Ted.name)