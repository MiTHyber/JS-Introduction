var myObj = {
  objProp: { // nothing special about nested objects
    innerProp: "Inner Property"
  }
};

console.log(myObj.objProp.innerProp);

myObj.objProp.newInnerProp = "New Inner Property";

console.log(myObj);

console.log(myObj.objProp["newInnerProp"]); // u can mix dots and brackets
