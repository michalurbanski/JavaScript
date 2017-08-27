// Primitive types: 
// Boolean 
// Number
// String 
// Null 
// Undefined

// A variable holding a primitive directly contains the primitive value 
// (rather than a pointer to an object)
var color1 = "red"; 
var color2 = color1; 

color1 = "blue"; 

console.log("Primitive types contain values:");
console.log(color1); // blue
console.log(color2); // red

// The best way to identify primitive types is with the typeof operator 
console.log("Primitive types identification:");
console.log(typeof 10); // number
console.log(typeof true); // boolean 
console.log(typeof undefined); // undefined 
console.log("But typeof null is: " + typeof null); // object 

console.log("Reference types:");
// By convention, constructors begin with a capital letter to distinguish them 
// from nonconstructor functions
var object = new Object(); 

// Custom property can be added to the object dynamically
object.myCustomProperty = "custom property"; 
console.log(object.myCustomProperty); 

// Object can be dereferenced and then cleaned by garbage collector
object = null; // dereference

console.log("Dereferenced object: " + object);

// In JavaScript there are also built-in types: 
// Array
// Date
// Error
// Function 
// Object
// RegExp

var items = new Array(); 
var now = new Date();

// Object and arrays literals 
console.log("Objects and arrays literals:"); 

var book = {
    name: "The principles of object-oriented JavaScript", 
    year: 2014
};

// For properties with spaces string literals can be used
var book2 = {
    "name with space": "first title"
};

console.log(book.name);
console.log(book2["name with space"]);

// Arrays literals 
var array = new Array("red", "blue", "green");
var array2 = ["red", "blue", "green"]; 

console.log(array[0]); 
console.log(array2[0]);

// Properties are accessed using dot notation, but they can be also access using bracket notation 
var arr = []; 
arr.push(123); // dot notation
console.log(arr); 

var arr = []; 
arr["push"](1234); // bracket notation 
console.log(arr); 

// Identifying reference types
function reflect(value){
    return value; 
}; 

console.log("Typeof function is: " + typeof reflect); // function 

// For all reference types other than functions, typeof returns Object
// This is because every reference type inherits from Object
var arr = []; 
console.log("Typeof array is: " + typeof arr); // this returns Object

// To check if array is typeof array following method can be used
console.log(arr instanceof Array); // true

console.log("Array.isArray: " + Array.isArray(arr)); // better way to check when using ECMAScript 5

// But instanceof should not be used to determine primitive types
console.log("text" instanceof String); // false

// Primitive wrapper types - does not correctly show primitive type 
var found = new Boolean(false); 
console.log(found); 
console.log(typeof found); // Shows Object, not boolean

// And objects are always considered true inside a conditional statements:
if(found){
    console.log("Found is displayed, because object in conditional statement is always true"); 
}