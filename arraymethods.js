//forEach()
var cities = ['Madrid', 'Berlin', 'Tokyo'];
//cities.forEach((val, i, arr) => {console.log(i + ':' + val)});

//join()
// var str = cities.join('-');
// console.log(str);

//split()
var string = 'You are coding with cm-amos';
var arr = string.split();
// console.log(arr);
// console.log('------------')
// console.log(typeof arr)
// console.log('------------')

//merge with concat()
var fruits1 = ['Banana', 'Mango', 'Oranges', 'Pineapples']
var fruits2 = ['Guavas', 'Pears', 'Apples', 'Strawberry']
var fruits3 = ['Grape', 'Watermelon', 'Plums', 'Limes', 'Plums']
var  arr1 = fruits1.concat(fruits2,fruits3);
// console.log(arr1)

//searching an item
var f = fruits2.indexOf('Pears')
// console.log(f);
var i = fruits3.lastIndexOf('Plums')
// console.log(i);

//slice()
var arr2 = cities.slice(1,3)//returns a new array of the selection
// console.log(arr2);

//splice()
var months = ['January', 'February', 'March', 'April']
months.splice(2, 1);
// console.log(months);//removes the third item

//replacing
months[1] = 'December'
//console.log(months);

var numbers = [49, 81, 36, 25]
//var roots = numbers.map(Math.sqrt)
//console.log(roots)
function disp(array_name){
for(let i=0; i<array_name.length; i++)
    {
        console.log(numbers[i])
    }
}
disp(numbers.sort());