var a = 10;
var b = "10";
if (a == b) // we're comparing different types - first is type coersion and then comparing takes place
  console.log("Values are equal"); // true
if (a === b) // this one cares about types and doesn't do type conversion
  console.log("Values are really equal"); // false
if (a)
  console.log("Wait a minute - is it c or what?"); // true
a = 0;
if (a)
  console.log("Here we go"); //false
a = "Random";
if (a)
  console.log("Come on - not strings too"); // true
a = "";
if (a)
  console.log("I get it"); // false
a = undefined;
if (a)
  console.log("I get it"); // false
a = null;
if (a)
  console.log("I get it"); // false
