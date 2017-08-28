// Constructor is a function used with 'new' keyword to create an object

function Person(firstName){ // Should begin with a capital letter
    this.firstName = firstName;
    
    this.printMyName = function(){
        console.log(this.firstName);
    };
};

var person = new Person('Michal'); // new operator produces the return value
console.log("Is person an instanceof Person: " + (person instanceof Person)); // true

console.log(person.constructor); // points back to constructor function, but can be overwritten
console.log(person.constructor === Person); 

console.log("First name is: " + person.firstName); 
person.printMyName(); 

// NOTE: var person = Person(); // omitted new keyword will make 'this' attached to the global object
                                // and produce unexpected results

// NOTE2 - Downside: constructors cause redundancy because each instance will have its own copy of a function

