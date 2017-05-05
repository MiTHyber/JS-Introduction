var myArray = [100, 200, 300]; // array is an object in JS with propery names as 0, 1 etc.

console.log(myArray[0]); // just as in java
console.log(myArray[3]); // undefined - no exceptions are thrown

myArray[5] = "Saya"; // to add element just pretend that this index exist
// missing indicies are filled with undefined values
// and yes - any types can be mixed inside of an array

console.log(myArray);

console.log(myArray.length); // depend on biggest index in array

myArray["goddess"] = "Saya"; // array is an object - so u can add non integer named properties

console.log(myArray);

console.log(myArray.length); // length doesn't change with adding non integer named properties
