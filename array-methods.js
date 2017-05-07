var myArray = [10, 20, "Hello", {}];
console.log(myArray.push(10)); // adding to the end, return new length
console.log(myArray);
console.log(myArray.pop()); // removes last element and returns it's value
console.log(myArray);
console.log(myArray.shift()); // removes first element and returns it's value
console.log(myArray);
console.log(myArray.unshift("Saya")); // adding to start of the array, returns new length
console.log(myArray);
// first arg is the current element, second is index of this element, third is the array himself
myArray.forEach(function(e, index, array){
  console.log(e + " " + index + " " + array);
});
