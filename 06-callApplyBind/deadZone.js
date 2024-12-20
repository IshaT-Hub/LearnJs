function somemethod() {
    console.log(counter1); // undefined
    console.log(counter2); // ReferenceError
    var counter1 = 1;
    let counter2 = 2;
}

var abc = somemethod();
console.log(abc);

// The Temporal Dead Zone(TDZ) is a specific period or area of a block where a variable is inaccessible until
//  it has been initialized with a value. This behavior in JavaScript that occurs when declaring a variable with
//   the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its
//    declaration (within its scope) causes a ReferenceError.