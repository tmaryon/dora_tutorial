arr = [2,3,4]



function sumArray(arr) {
    var answer = 0;
    for (var i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer;

}
// console.log(sumArray(arr))


function sum(a, b) {
    var sum = a + b;
    var msg = "The sum is " + sum + ".";
    return [sum, msg];
}

function multiply(a,b) {
    return a * b;
}

function arrAdd(a, b, c) {
    var answer = [];

    answer[0] = sum(a , sum(b, c));
    answer[1] = multiply(a, multiply(b, c));
    console.log(answer)
}   
arrAdd(5,7,9);

[16, 140, "4 and 7 and 5 equals 16.", "The product of 4 and 7 and 9 is 140."]


sum(a, sum(b, c))
