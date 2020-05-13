/**
 * The class keyword is layered on top of
 * the prototype system and class keyword gives
 * us some syntax that looks a lot more like
 * the class designs that we normally do in say,
 * a C++ or Java.
 */
// ES6 class
class Workshop {
    constructor(title) {
        this.title = title;
    }
    print(msg) {
        console.log(this.title, msg)
    }
}
const weather = new Workshop("Today's weather is")
const schedule = new Workshop("I have to")

weather.print("Bad")
// Today's weather is Bad
schedule.print("go to zoo")
// I have to go to zoo