'use strict'
class polygon{
    constructor(height,width){
        this.h = height;
        this.w = width;
    }
    test(){
        console.log('The height of the polygon is', this.h);
        console.log('The width of this polygon is ', this.w);
    }
}
//creating an instance
const polyObj = new polygon(10,20);
polyObj.test();