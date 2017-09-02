// Prototype chaining or prototypal inheritance 

// All objects inherit from Object.prototype unless specified otherwise

// Objects inherit properties from the prototype. Prototype is also an object, so it inherits
// from its own prototype.

function Person(){};

var person = new Person(); 
personPrototype = Object.getPrototypeOf(person);
console.log(personPrototype === Person.prototype); // Person prototype is Person.prototype

prototypeOfPersonPrototype = Object.getPrototypeOf(personPrototype);
console.log(prototypeOfPersonPrototype === Object.prototype); // Person.prototype prototype is Object.prototype

// Methods defined on Object.prototype inherited by all other objects: 
// - hasOwnProperty()
// - propertyIsEnumerable()
// - isPrototypeOf()
// - valueOf()
// - toString()

// valueOf() gets called when operator is used on an object (it can be defined on own objects). 
// By default it returns the object instance.

var now = new Date(); 
console.log("Current date is: " + now);

// but
console.log("Value of date is: " + now.valueOf()); // epoch time in miliseconds

console.log("valueof() by default returns instance of an object: " + (person.valueOf() instanceof Person)); 

// The toString() method is called whenever valueOf() returns a reference value instead of primitive value
// It's also called when one of the operands is a string (then the second one is automatically converted into string):

console.log("Person is: " + person); // known [object Object]
Person.prototype.toString = function(){
    return "This is person";
}

console.log("Person is: " + person); // Custom toString() method is called

var my = {}; 
console.log("getOwnPropertyNames on empty object: "); 
console.log(Object.getOwnPropertyNames(my)); // does not show anything 

// but 
my = function(){};
console.log("When object is created as function(){}:");
console.log(Object.getOwnPropertyNames(my)); // prints enumerable properties

my = {}; 
my.custom = "text";
console.log("Enumeration when custom property is added: ");
for(var prop in my){ // but when run using 'node' this shows only own properties
    console.log(prop);
}