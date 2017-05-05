function sayHello(){ // just using function keyword
  console.log("Hello");
}

sayHello(); // calling the function

function sayHelloToPerson(name, timeOfDay){
  console.log("Hello " + name + "; Time of day is " + timeOfDay);
}

sayHelloToPerson("Saya", "afternoon");

sayHelloToPerson("Saya"); // missing arguments passed as undefined

sayHelloToPerson("Saya", "evening", 42); // extra argument is discarded

// so overloading is impossible in JS
