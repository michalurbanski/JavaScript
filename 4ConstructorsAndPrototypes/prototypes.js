// Object have prototypes, which tell how object is built.
// Also almost every function (but some built-in) has a prototype property
// which is used for building new instances. 
// Prototype is shared among all instances. 

console.log("Is hasOwnProperty a prototype property?: " + Object.prototype.hasOwnProperty("hasOwnProperty"));

// Proper way to identify prototype property
function hasPrototypeProperty(object, name){
    return name in object && !object.hasOwnProperty(name); 
}

var person = {};

console.log(hasPrototypeProperty(person, "hasOwnProperty"));

// Using prototype can reduce code duplication (all objects point to the constructor's prototype property)

var object = {}; // generic object
var prototype = Object.getPrototypeOf(object); 
console.log(prototype === Object.prototype); // true

function Person(){
}

var person = new Person(); 
var personPrototype = Object.getPrototypeOf(person); 
console.log(personPrototype === Person.prototype); // true

// Also another way: 
console.log(Person.prototype.isPrototypeOf(person)); // true

// Prototype properties can be shadowed by object's own properties 
// Delete keyword can't delete prototype property


// Prototypes and constructors: 
// It's more efficient to put methods on the prototype and use this.
function Person(firstName){
    this.firstName = firstName
}

Person.prototype.write = function(){
    console.log(this.firstName); // 'this' points to the current instance of an object
                                 // -> person object when it's created
}

var person = new Person("Mike"); 
person.write(); 

// Object literal as prototype property. 
// But in this way constructor property for objects is changed - example below: 
Person.prototype = {
    write: function(){
        console.log(this.firstName); 
    },

    toString: function(){
        return "[Current person is: " + this.firstName + "]"; 
    }
}

var person = new Person("Mike"); 
console.log(person.toString()); 

// But now there's a downside 
console.log(person.constructor === Person); // false
// A way to solve is to define prototype with "constructor: Person" property

// Add properties dynamically to prototype 
Person.prototype.anotherAction = function(){
    console.log("testing..."); 
}

person.anotherAction();

// In this way also built-in objects can be extended
