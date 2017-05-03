var a = 10; // 64 bit double precision - like all numbers in js
var b = 20;
var c = a + b;
var d = "Hello"; // String - sequence of Unicode characters 16 bit - no character type
var e = true; // boolean
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
a = "Ignorance is strength"; // no info about type variable - dynamic stuff
console.log(a);
var f; // when u declared variable but didn't assign a value to it than it's of type undefined
console.log(f);
f = null; // another type - null
console.log(f);
// there is one more type - Symbol
