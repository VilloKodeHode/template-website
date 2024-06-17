//! Data types:

//* string: 
//* letters and data inside of quotes. shown as white in the console. ex: "hello world", "1", "one"

//* integer:
//* whole numbers. shown as blue in the console. ex: 1,2,3,4,5,6,54837  

//* float:
//* numbers with decimals. also shown in blue in the console. ex: 1.5, 76.3

//* bigInt: BIG numbers. (more then 15 digits). We are not using this.

//* boolean: true or false.

//* array: datastructure type. ex: ["kiwi", "apple", "pear"]

//* object: datastructure type. ex: {firstName: "Jokka", lastName: "Bolle", age: "65"} 



console.log("Hello World");

//* Declaring variables (let and const):
// first you need to initialize a variable to use it futher:
// the let variabel can be changed later:
let a = 3
console.log(a)
// we change the value of the variabel:
a = 4
console.log(a)

// the const variable can not be changed:
const b = 5
console.log(b)

// b = 6 //! THIS WILL CAUSE AN ERROR. (because const b is declared above)
// console.log(b)

// console.log("this will not show if there is an error above")

//* Modulo (%):
let num1 = 10;
let num2 = 5;
// what happends here are that we are looking what the remainder is when trying to put 5 into 10. Since 5 goes into 10 two times and there is no remainder we get 0 as result:
console.log(num1 % num2) // result is 0
// 6 goes one times into 10 and we get 4 as the remainding value:
console.log(10 % 6) // result is 4


let sum = a + b
console.log(sum)

let updatedSum = (a + 1000) + b

console.log(updatedSum)

let greetingType = "hello";
let userName = "Bob";


//* standard concatination:
let greeting = greetingType + " " + userName;
//* how to write a string literal:
let altGreeting = `${greetingType} ${userName}`

console.log(greeting)
console.log(altGreeting)

//* integer
console.log(565464)
//* float:
console.log(1.5786438)

//* boolean:
let bobIsTheName = true

//* if else statement:
if (bobIsTheName) {
    console.log(`user has a name`)
} else {
    console.log(`user does not have a name`)
}

//* array:
let fruitsArray = ["kiwi", "apple", "pear"]

// how to get values out of the array:
console.log(fruitsArray)
console.log(fruitsArray.length)
console.log(fruitsArray[0])
console.log(fruitsArray[1])
console.log(fruitsArray[2])


//* object:
const person = {
    firstName: "Joakim",
    lastName: "Villo",
    age: 36,
    hobbies: ["Gaming", "Trening", "Filmer"]
}

// how to get values out of object
console.log(person)
console.log(person.firstName)
console.log(person.hobbies[0])


//* Math method:
// Math.random gives a random number between 0 and 1
const random = Math.random()

console.log(random)

// Math-floor rounds down the number from Math.floor. We multiply the result of Math.random by 6 to get a random number between 0 and 6. The result of all of this is that we get a random integer (whole number) between 0 and 6:
const diceThrow = Math.floor(Math.random() * 6)

console.log(diceThrow)

const diceResults = ["you die", "you defeated the monster", "you grased the monster", "you ran away scared", "you missed the monster you dufus!", "you tripped!"]

// since diceThrow gives us a random integer between 0 and 6 we can now get a random index value from diceResults:
const stringResult = diceResults[diceThrow]

console.log(stringResult)


const randomNumber = Math.round(Math.random() * 1000)

console.log(randomNumber)

















