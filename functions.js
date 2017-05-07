// functions are objects

function sayHello(){ // just using function keyword
  console.log("Hello");
}

sayHello(); // calling the function

function sayHelloToPerson(name, timeOfDay){
  return "Hello " + name + "; Time of day is " + timeOfDay;
}

var returnedValue = sayHelloToPerson("Saya", "afternoon");
console.log(returnedValue);

console.log(sayHelloToPerson("Saya")); // missing arguments passed as undefined

console.log(sayHelloToPerson("Saya", "evening", 42)); // extra argument is discarded

// so overloading is impossible in JS

function returnNothing(){
  // return;
}

console.log(returnNothing()); // if function doesn't return a value, but you're asking for one
// then you get undefined
