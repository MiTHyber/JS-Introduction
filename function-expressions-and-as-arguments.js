var f = function foo() { // assigning function to variable
  console.log("Saya");
};

f(); // executing variable as function

// anonymous function expression
f = function(title) { // there is no need for name - we're using variable insead
  console.log("Saya " + title);
};

f();

// in the first variant u can use name for recursive calls and it is sometimes usefull for debugging

var executor = function(fn, title) {
  console.log(fn);
  fn(title);
}

executor(f, "goddess"); // passing function as an argument
