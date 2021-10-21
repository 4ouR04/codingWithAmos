// function MyError(message) {
//     this.name = 'CustomError';
//     this.message = message || 'Error raised with default message';
// }
// try {
//     throw new MyError();
// }
// catch(e){
//     console.log(e.name);
//     console.log(e.message);//default message
// }

function MyError(message) {
    this.name = 'CustomError :';
    this.message = message || 'Default Error Message';
}

try {
    throw new MyError('Printing Custom Error message');
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}
