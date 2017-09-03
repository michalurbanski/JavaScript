function Person(firstName){
    this.firstName = firstName;
}

Person.prototype.write = function(){
    console.log(this.firstName);
};

var person = Person("Mike"); 
console.log(person instanceof Person); // false
console.log(typeof person); // undefined
console.log(firstName); // works, because object was created without a 'new' keyword, 
                        // so this is attached to the global state

// A scope-safe constructor can be called with or without 'new' keyword and its result is the same
// Like in case of built-in constructors - Array
function Employee(firstName){
    if(this instanceof Employee){
        this.firstName = firstName;
    }
    else{
        return new Employee(firstName);
    }
}

var emp1 = new Employee(); 
var emp2 = Employee();

console.log(emp1 instanceof Employee); // expected
console.log(emp2 instanceof Employee); // true, thanks to scope-safe constructor
