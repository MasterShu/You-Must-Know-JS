/**
 * This
 * 
 * A function's this keyword references the excution contex
 * for that call, determined entirely by how the function was called.
 * 
 * Dynamic context, It's very powerful.
 * A this-aware function can thus have a different context
 * each time it's called, which makes it more flexible & reusable. 
 */
function print(msg) {
    console.log(this.title, msg)
}

function demo1() {
    var myContext = {
        title: "I am ok"
    }
    print.call(myContext, "Right?")
}

const demo2 = {
    title: "Print: ",
    print(msg) {
        console.log(this.title, msg)
    }
}

demo1()
demo2.print("Are you ok?")