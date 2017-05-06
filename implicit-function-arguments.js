// "this" is one of the implicit arguments

var add = function() {
  console.log(arguments); // implicit argument with all arguments in a list
  var sum = 0;
  for (var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
};

console.log(add(13, 20, 12, 10));

// "arguments" isn't an array
