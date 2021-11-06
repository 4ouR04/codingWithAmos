'use strict'
class shape {
    constructor(a) {
        this.Area = a
    }
}

class Circle extends shape{
    disp() {
        console.log("Area of the circle: " + this.Area)
    }

}
var obj = new Circle(223);
obj.disp()