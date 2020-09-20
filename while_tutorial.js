const rl = require("readline-sync"); 
/*

THE FUN-FILLED GUIDE TO -[ WHILE ]- LOOPS!
Everything you've ever wanted to know, as well as 
stuff you didn't know you wanted to know!  Yay!

Here's how it goes:

while (condition to run or stop running) {
    do stuff;
    possibly modify the condition that makes the loop run;
}
*/

/*  Example 1: Count until it's done.
    The count variable is set to zero OUTSIDE of the loop,
    and is modified INSIDE of the loop UNTIL the 
    condition is met.  Take a look. 
*/

// Set the counter to zero (outside of the loop)
var count = 0;                              // set count to zero

while (count < 10) {                        // run until count hits 10, then STOP 
    console.log("Count is " + count); // print the count value to the screen
    count++;                                // increase count by 1
}
console.log("Final count: " + count)

/*  Example 2: Run until a condition is matched
    This will ask the user to type 'yes' or 'no' UNTIL they type yes, 
    then the loop will finish.  Setting the condition to not equal yes 
    is better than setting it to while it equals no, to prevent an infinite loop.
*/


var yesOrNo;    // define the variable with no value

while (yesOrNo !== "yes") {     // run while the answer is NOT EQUAL TO 'yes'
    var yesOrNo = rl.question("Type yes or no (lowercase)? ");  // Ask the user what to enter
}

 
