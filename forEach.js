//syntax
//array.forEach(callback[, thisObject])
console.log('Normal array')
var nums =  [90, 88, 65, 47, 13];
nums.forEach((val, index) => {
    console.log(val)
})
console.log('Reversed array');
nums.reverse()
nums.forEach((val, index) => {
    console.log(val)
})