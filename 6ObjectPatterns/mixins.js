// One object gets properties of another, without chaning the prototype chain

// Copies all enumerable properties.
// Creates shallow copy (if object is referenced then both objects will point to the same object)
function mixin(receiver, supplier){
    for (var prop in supplier){
        if(supplier.hasOwnProperty(prop)){
            receiver[prop] = supplier[prop];
        }
    }

    return receiver;
}

var person = {
    write: function(text){
        console.log(text);
    }
};

person.write("this is custom text");

var employee = {
    firstName: "Mike"
};

employee = mixin(employee, person);
employee.write("This is employee");