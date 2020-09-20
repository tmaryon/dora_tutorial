//----- SCOPE in JavaScript -------------------//

var test = "foo";

function foo() {
    var test2 = "bar";
    return 1;
}

var obj = {
    name: "Dora",
    trueFalse: true,
    print: function() {
        console.log(obj.trueFalse)
    }
}



//console.log(test)
//console.log(test2)
// obj.print()

// var var1 = obj.name
// var var2 = obj['name']
// console.log("\nvar1: " + var1)
// console.log("\nvar2: " + var2 +"\n")


var dog = {
    breed: "Beagle",
    weight: 30,
    group: "hound"
}
var key = "weight"

if (dog[key] === 30) { console.log("true1")}
if (dog["weight"] === 30) { console.log("true2")}
if (dog.key === 30) { console.log("true3") } 


