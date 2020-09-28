// function Dog(name, age) {
//     this.name = name
//     this.age = age
// }

// var ageDiff = function (dog1, dog2) {
//     //return Math.abs(dog1.age - dog2.age)
//     return dog1.name + ' ' +dog2.name
// }

// console.log(ageDiff(new Dog("Sparky", 12), new Dog("molly", 8)))


// function Animal(name, color) {
//     this.name = name
//     this.color = color
//     this.mammal = true
// }

function Cat(name) {
    this.name = name
    this.color = "fawn"
}

function Calico(name) {
    this.name = name
    this.says = "Meow"
}

var myCalico = new Cat("Jules")
console.log(myCalico)