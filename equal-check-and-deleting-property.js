var firstObj = {};
var secondObj = {};
console.log(firstObj == secondObj); // false
console.log(firstObj === secondObj); // false
// just as in java - variables should point to same object
secondObj = firstObj;
console.log(firstObj == secondObj); // true
console.log(firstObj === secondObj); // true

var person = {
  name: "Saya",
  age: 18
}
console.log(person);
person.age = undefined; // u've not really deleted a prop
console.log(person);
delete person.age; // now it really disappeared
console.log(person);
