var myObj = {
  testProp: true
};

myObj.method = function() { // adding function to the object
  console.log("Function inside of object");
};

myObj.method();

var person = {
  firstName: "Takumi",
  secondName: "Nishijou",
  getFullName: function() {
    return this.firstName + " " + this.secondName;
  },
  address: {
    street: "123 JS Street",
    city: "Osaka",
    state: "None"
  },
  isFromState: function(state){
    return this.address.state === state;
  }
}

var fullName = person.getFullName();
console.log(fullName);

console.log(person.isFromState("None")); // true
console.log(person.isFromState("Some")); // false
