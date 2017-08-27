// Objects in JavaScript are dynamic - they can change at any point during code execution. 

// Objects can be constructed using: 
// - the Object constructor 
// - an object literal 

var person1 = new Object(); 
person1.name = "Michal"; // this is 'own property' - indicates that specific instance owns this property 

var person2 = {
    name: "Michal"
};

person2.age = "30"

console.log("Person 2: " + person2.name + ", " + person2.age);

// Detecting properties
// Because properties can be added at any time, it's sometimes necessary to check 
// whether a property exists in the object. 


// This is unreliable way of checking if property exists. 
// The reason is how type coercion affects the outcome. 
if(person2.age){
    // The if condition evaluates to 'true' if the value is 'truthy'.
    // 'Truthy' are: 
    // - an object 
    // - a nonempty string 
    // - a nonzero number
    // - or true

    // The if condition evaluates to 'false' if the value is 'falsy'. 
    // 'Falsy' are: 
    // - null
    // - undefined
    // - 0
    // - false 
    // - NaN
    // - or an empty string
}

// Example: 
person2.age = 0

if(!person2.age){ // do action if property does not exists -> wrong way to check this
    console.log("Unreliable way of checking if property 'age' exists. It exists but it's value is falsy");
}

// A more reliable way to check for property existence is to use 'in'
console.log("Does 'age' exist: " + ("age" in person2));
console.log("Does 'customproperty' exist: " + ("customproperty" in person2)); 

// 'In' can be also used to check if method exists
var person3 = {
    name: "Michal", 
    say: function(){
        console.log(this.name); 
    }
};

console.log("Does 'say' method exist: " + ("say" in person3)); 

// But the in operator checks both own and prototype properties. 
// If only own property should be checked than hasOwnProperty() method should be used. 

console.log("Own 'say': " +  person3.hasOwnProperty("say"));
console.log("Own toString(): " + person3.hasOwnProperty("toString")); // false, because it's a prototype property
console.log("Prototype property toString(): " + ("toString" in person3));

// Deleting properties
// Setting property to null is not sufficient 

person3.say = null; 
console.log("Is 'say' still defined: " + (person3.hasOwnProperty("say"))); 

var isDeleted = delete person3.say; // returns true if successful 
console.log("Is deleted: " + isDeleted); 
console.log("Is still defined: " + (person3.hasOwnProperty("say")));

// Enumeration 
// By default all properties added to an object are enumerable

var myObject = {
    id: 5, 
    name: "test"
};

console.log("Printing object properties"); 
// for-in loop enumerates also prototype properties
for(var property in myObject){ 
    console.log("Property: " + property);
    console.log("Value: " + myObject[property]); // primary use case for bracket notation
}

// Object.keys(object) returns only own properties
var myObjectPropertiesArray = Object.keys(myObject); // properties can be stored for a later use
console.log(myObjectPropertiesArray); 

// Many prototype properties are not enumerable by default
console.log("length" in myObjectPropertiesArray); // returns true!, and this array has only 2 values
console.log("Is length enumerable: " +  myObjectPropertiesArray.propertyIsEnumerable("length")); 

// In ECMAScript 5 there's also possibility to get all properties - also non-enumerable
var f = function(){};
var allProperties = Object.getOwnPropertyNames(f); // Works for function
console.log("All properties: " + allProperties); 

// Types of properties
// - Data properties (these are created by default)
// - Accessor properties (don't contain a value but instead define functions - getter and setter)

// Accessor property using an object literal
var person = {
    // _ common convention to indicate that property is considered private, although it isn't
    _name: "Michal", // notice comma (these are just properties)

    get name(){
        console.log("Custom operation when reading value"); 
        return this._name; 
    },
    set name(value){
        console.log("Custom operation when setting value: " + value);
        this._name = value;
    }
};

console.log("\n" + "Accessor properties:");
console.log(person.name)
person.name = "John"; 

