function anotherError(message) {
  this.name = 'Lethal 403 :';
  this.message = message || 'Not allowed to connect to this wifi';
}
try{
    throw new anotherError(); // prints default mesasage
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}