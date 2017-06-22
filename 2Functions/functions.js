// Functions are actually objects in JavaScript - which makes them first-class functions.
// What distinguishes it from any other object is the presence of an internal property name [[Call]].

// Two literal forms of functions: 
// - Function declaration 
// - Function expression

// Function declaration 
// Function declarations are hoisted to the top of the context - such function be defined after it is used in code. 
function add(num1, num2){
    return num1 + num2; 
}

// Function expression - anonymous function
// Function expression are not hoisted - they can be used in code only after variable holding function is created. 
var addFunction = function(num1, num2){
    return num1 + num2; 
}

// Functions can be passed as arguments. 
// Sort function accepts comparison function as, by default, it converts arguments to strings

var a = [1, 2, 3, 11, 12];
var b = a.slice(0); // clones array 
console.log("Sorting array: " + a);

a.sort(); // sorts in-place
console.log("Sort() without comparison function - sorts as strings: " + a); 

b.sort(function(first, second){
    return first - second; 
});
console.log("Sort() with comparison function: " + b);

// Parameters - functions can have any number of arguments 
// Function parameters are stored in array-like structure called arguments

function reflect(value){
    return value; 
}

console.log("Function arity is: " + reflect.length); // function is object so it can have properties 
                                                     // 1 argument is expected, so length will return 1

console.log(reflect(1, "Hi")); // prints 1

reflect = function(){
    return arguments[0]; // access arguments
}

console.log(reflect(1, "Hi")) // prints 1
console.log("Reflect function - without parameters - length (arity): " + reflect.length); // prints 0, as there are no named characters

// Sum any number of arguments 
function sum(){
    var result = 0, 
        len = arguments.length, 
        i = 0;

    while (i < len){
        result += arguments[i];
        i++; 
    }

    return result; 
}

console.log("Generic sum function: " + sum(1, 2, 3, 4)); // 10

// Function overloading - there is no such possibility in JavaScript 
// But a workaround can be used
function say(message){
    if(typeof message === "undefined"){
        message = "Default message";
    }
    
    console.log(message); 
}

say("Hello"); 
say(); // prints default message

// Functions in objects
var person = {
    name: "michal", 
    say: function(){ // Functions as property value is called 'method'
        console.log(this.name); // 'this' keyword represents calling object (in this case person object)
                                // But if needed value of 'this' can be changed -> call, bind, apply methods
    }
};

person.say(); 