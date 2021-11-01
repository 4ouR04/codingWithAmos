var isBigEnough = (element, index, array) => {
    return (element >= 10);
}
var passed = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(passed);

//filter arra<y method
//syntax
//array.filter(callback[, thisObject]);