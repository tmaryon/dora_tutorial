function foo() {
    var name = prompt("Greetings, coffee lover!  What is your name? ");
    confirm("Greetings, " + name + "!");
}
foo();




function getCoffeeType() {
    var coffee = prompt("What kind of coffee do you like? ");
    alert("Awesome!  " + coffee + " is delicious!");
}
getCoffeeType();

function getAge() {
    var age = prompt("Are you old enough to drink coffee? ");
    if (age < 16) {
        alert("You're too young to be drinking coffee!");
    } else if (age >= 16 && age <= 65) {
        alert("you're old enough to drink coffee");
    } else if (age > 65) { 
        alert("You should switch to decaf!");
    }
}
getAge();

// TODO

/*

1. publish html/css/js coffee site
2. turn in notes formatted in Jekyll for missing chapters
3. find out from TA if assignments are due at COB or EOD


*/


/*

var result = validate(question("what is the meaning of life?"));

*/

