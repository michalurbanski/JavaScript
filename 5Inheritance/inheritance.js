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

// ------------------
// Object inheritance

console.log("\nObject inheritance:");
var person = { 
    firstName: "Mike", 
    write: function(){
        console.log(this.firstName); 
    }
};

var employee = Object.create(person, { // first argument is used as prototype for the object
    firstName: {
        configurable: true, 
        enumerable: true, 
        value: "John", 
        writable: true
    }
});

person.write(); 
employee.write();
console.log(person.isPrototypeOf(employee)); // true
console.log(person.hasOwnProperty("write")); // true
console.log(employee.hasOwnProperty("write")); // false

// -----------------------
// Constructor inheritance
console.log("\nConstructor inheritance:");

function Person(name){
    this.name = name;
}

Person.prototype.write = function(){
    console.log(this.name);
}

Person.prototype.toString = function(){
    return "[" + this.name + "]";
}

function Employee(id, name){
    this.id = id;
    this.name = name;
}

Employee.prototype = new Person(); // inherits from person
// employee prototype is Employee.prototype, and Employee.prototype prototype is Person.prototype

Employee.prototype.constructor = Employee; // constructor needs to be restored after setting prototype
Employee.prototype.toString = function(){
    return "[id:" + this.id + ", name: " + this.name + "]";
}

var person = new Person("Mike"); 
person.write();
console.log(person.toString()); // NOTE: when console.log() is called, toString() is not automatically called!

var employee = new Employee(1, "John");
employee.write();
console.log(employee.toString());

// Interesting ones - all are true:
// That's because instanceof uses prototype chain to determine object's type
console.log(employee instanceof Employee); 
console.log(employee instanceof Person);
console.log(employee instanceof Object);

// ----------------
// Constructor stealing: 
console.log("\nConstructor stealing:");

// Redefine employee
function Employee(id, name){
    // constructor stealing - allows to avoid redefining properties from a constructor 
    // like this.name = id
    Person.call(this, id); // id will be used as this.name (constructor is being called with a different 'this' function)
}

Employee.prototype = Object.create(Person.prototype, { // pseudoclassical inheritance
    constructor: {
        configurable: true, 
        enumerable: true, 
        value: Employee,
        writable: true
    }
});

Employee.prototype.toString = function(){
    return "Employee: " + this.name;
}

employee = new Employee(1);
console.log(employee.name); // 1
console.log(employee.id); // undefined - as it was not initialized
console.log(employee.toString()); // overriden toString function in Employee.prototype

// -------------------------
// Calling supertype methods

console.log("\nCalling supertype's toString() method:");
Employee.prototype.toString = function(){
    var personText = Person.prototype.toString.call(this); 
    return personText + " called from employee toString()"; 
};

console.log(employee.toString());