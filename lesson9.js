/*Desired result Print out all names except the name passed into the function 
                        ######NOTE####### 
let is just another way to assign a variable like var except 
it is locally scoped to the function. Var would assign our variable Globally in
our code.
*/
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ];

var nameFilter = function(name) {
    for (let i = 0; i < people.length; i++) {
        let names = people[i].name;
        if (names != name) {
            console.log("My Name is " + names);
        }
    }
};

nameFilter("Roger");
