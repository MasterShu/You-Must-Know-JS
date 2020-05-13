function Workshop(title) {
    this.title = title
}

Workshop.prototype.print = function (msg) {
    console.log(this.title, msg)
}

const weather = new Workshop("Today's weather is")
const schedule = new Workshop("I have to")

weather.print("Bad")
// Today's weather is Bad
schedule.print("go to zoo")
// I have to go to zoo