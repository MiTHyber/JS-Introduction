var a;
console.log(typeof a); //undefined
a = 10;
console.log(typeof a); //number
a = "Hello";
console.log(typeof a); //string
a = true;
console.log(typeof a); //boolean
a = null;
console.log(typeof a); // null somehow has type object - it's a bug actually
