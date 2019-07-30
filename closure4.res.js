// This example is explained in detail below (just after this code box).
function celebrityIDCreator (theCelebrities) {
  var i;
  var uniqueID = 100;
  for (i = 0; i < theCelebrities.length; i++) {
    (function(temp) {
      theCelebrities[temp]["id"] = function ()  {
        return uniqueID + temp;
      }
    })(i);
  }

  return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];  

console.log(stalloneID.id());
