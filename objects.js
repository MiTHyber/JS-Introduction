// there is no classes in js - just objects
var myObj = {}; // empty object
console.log(myObj);
myObj.prop = "Hello"; // adding property on the fly
console.log(myObj);
myObj.prop2 = 123;
console.log(myObj);
console.log("The number property is " + myObj.prop2); // accessing property
// building an object from the start
var obj = {
  prop: "Hello",
  prop2: 123,
  prop3: true
}
console.log(obj);
console.log("Accessing property that doesn't exist " + obj.prop4); // undefined
// u can use both dot and brackets notations to access properties
console.log("Accesing property using square brackets " + obj["prop2"]);
// brackets are used when property name isn't valid or a reserved word, starts with number
var strangeObj = {
  1: "one"
}
// console.log(strangeObj.1); syntax error
console.log(strangeObj["1"]); // works as a charm
// brackets are used when property name is dynamic
var propertyName = "prop"; // assume we got it somehow from outside
console.log(obj[propertyName]);
// with brackets js engine has less possibilities to optimize
