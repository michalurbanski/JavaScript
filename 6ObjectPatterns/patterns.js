// All object properties in JavaScript are public. 
// Module pattern - create singleton objects with private data.
// IIFE - immediately invoked function expression.
// Closures are functions that access data outside of their own scope.

// Revealing module pattern (allows to keep private data): 
var person = (function(){ // Creates one instance of an object
    var firstName = "Mike"; 

    function getName(){
        return firstName;
    }

    return{
        getName: getName // function is assigned to the returned object, revealing them outside of IIFE
    };
}()); // note parenthesis at the end of function declaration

console.log(person.firstName); // undefined 
console.log(person.getName()); // returns firstName value

// For creating more than one instance of an object constructor is neeeded
// For instance-specific private data
function Person(){
    var firstName = "Mike"; // this variable is only accessible inside this constructor

    // ! Although placing methods on object instance is less efficient, than placing them on prototype
    // this is the only way possible to store private 'instance-specific data'.
    this.getFirstName = function(){
        return firstName;
    };
};

var person1 = new Person(); 
console.log(person1.getFirstName());

// To share private data across all instances (module pattern using constructor):
var Person = (function(){
    var firstName = "Mike"; // will be shared across all instances
    
    function InnerPerson(age){
        this.age = age;
    }

    InnerPerson.prototype.getFirstName = function(){
        return firstName;
    };

    InnerPerson.prototype.setFirstName = function(name){
        firstName = name; // note: firstName = firstName won't work
    };

    return InnerPerson;
}()); 

var person2 = new Person(30);
console.log(person2.age); // yes - it's possible to display this.age
console.log(person2.firstName); // undefined - private variable
console.log(person2.getFirstName()); // Mike
var person3 = new Person(32);
console.log("Person 3 is changing name");
person3.setFirstName("John");
console.log("Person 2: " + person2.getFirstName()); // firstName is shared across all instances - displayes "John", even if it was set to "Mike"
console.log("Person 3: " + person3.getFirstName());