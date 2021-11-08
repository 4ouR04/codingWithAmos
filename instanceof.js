//instanceof operator
'use strict'
class person{}
var obj = new person()
var isPerson = obj instanceof person;
console.log('obj is an instance of person ' + isPerson);