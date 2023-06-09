/*
#
##
###
####
#####
######
#######
########
#########
##########
*/
// 1. going through 10 iterations
// 2. for each iteration we are printing index + 1
// 3. after writing # signs, print a newline after printing the # signs
// let NUM = 10
// for (let index = 0; index < 10; index++) {
//     for(let j = 0; j < index; j++) {
//         process.stdout.write('#')
//     }
//     console.log('')
// }

// let text = '#'
// for (let i = 0; i < 10; i++) {
//     console.log(text)
//     text += '#'
// }


/*
Write a program that uses console.log to print all the numbers from 1 to 100
with two exceptions. for numbers divisible by 3 print "Fizz" instead of the
number and for numbers divisible by 5 (and not  3), print "Buzz" instead.

Modify the program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those)
*/

// 1. Print numbers from 1 - 100
// 2. if number is divisible by 3 -> print "Fizz"
// 3. if divisible by 5 and not 3 -> print "Buzz"
// 4. if divisible by both 3 and 5 -> print "FizzBuzz"
for (let index = 0; index < 100; index++) {
    if ((index+1) % 5 === 0 && (index+1) % 3 === 0) {
        // console.log("FizzBuzz")
    } else if ((index+1) % 5 == 0) {
        // console.log("Buzz")
    } else if ((index+1) % 3 == 0) {
        // console.log("Fizz")
    } else {
        // console.log(index+1)
    }
}

/*
    Write a program that create a string that represent an 8x8 grid, using newline
    to separate lines. At each position of the grid there is either a space or "#"
    character. The characters should form a chessboard.
    End result should be:
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
*/
// 1. print # for 8x8 grid -> 2 loops
// 2
// for (let i = 0; i < 8; i ++) {
//     for (let j = 0; j< 8; j++) {
//         if(i % 2 !== 0 && j % 2 == 0) {
//             process.stdout.write('#');
//         }

//         if(i % 2 ==0 && j % 2 !== 0) {
//             process.stdout.write('#');
//         }
//         process.stdout.write(' ');
//     }
//     console.log('')
// }

// let result = ""
// for (let index = 0; index < 16; index++) {
//     for (let j = 0; j < 16; j++) {
//         result += (index + j) % 2 ? "◼" : "◻"
//     }
//     result += "\n"
// }
// console.log(result)


// let x = 8
// if(x < 3) {
//     return "";
// }
// let tree = "";
// for(let i = 1; i <= x; i++) {
//     for(let j = 1; j <= x + x - 1; j++) {
//         if(j <= x - i || j >= x + i) {
//             tree += " ";
//         } else {
//             tree += "*";
//         }
//     }
//     tree += "\n";
// }
// console.log(tree);



// Data Types
// String
// Number
// Boolean

// Arrays
let arr = [1, 2, 3, 4, 5, 6]
arr.push(45)
console.log(arr)

let test = ["Jack", 2, 4, {a: "g"}]
console.log(test)


let x = 'rainy'
switch (x) {
    case "rainy":
        console.log('x is rainy')
        break
    case "sunny":
        console.log('x is sunny')
        break
    default:
        console.log('x is cold')
        break
}





// Functions
const square = function (x) {
    return x * x
}

let sq = square(7)
console.log(sq)

const makeNoise = function() {
    console.log("Bling")
}

makeNoise()

const power = function (base, exponent) {
    let result = 1;
    console.log(sq)
    for (let count = 0; count < exponent; count++) {
        result *= base
    }
    return result
}

console.log(result)


var result = "Jack"

let ans = power(2, 10)

console.log(ans)



// const <name> = function (args) {
//     // ...body
// }



// 1. Function that returns 50% of a number given
const half = function (x) {
    return x * (50/100)
}
// 2. Function that takes a name and returns a greeting with the name
const greeting = function (name) {
    return "Hello " + name
}
// 3. Function called isEven that determines if a number is even
const isEven = function (num) {
    return num % 2 == 0
}
// 4. Function called isOdd that determines if a number is odd
const isOdd = function (num) {
    return num % 2 != 0
}

const stew = function (factor) {
    let x = 5
    const ingredient = function (amount, unit, name) {
        console.log(x)
        console.log(ans)
        let ingredientAmt = amount * factor
        if (ingredientAmt > 1) {
            unit += "s" // unit = unit + "s"
        }
        console.log(`${ingredientAmt} ${unit} ${name}`)
    }
    ingredient(1, "can", "chickpeas")
}

stew(5)

// Each local scope can see all the local scopes that contain it and all scopes can see the global scope
// Lexical scoping

// function isMultipleOf2 (X) {

// }


// Using Arrow Functions
// 1. Write a function called plus5 that adds 5 to a number
const plus5 = (num) => {
    return num + 5
}

// const plus5 = num => num + 5

// 2. Write a function called minus12 that subtracts 12 from a number
const minus12 = (num) => {
    return num - 12
}

// Write an arrow function called isPalindrome that determines if a string is a palindrome
// example: madam, nun, civic, level
const isPalindrome = (val) => {
    // Create a temporary variable
    // Reverse given value and store in temporary variable
    // If temporary variable and given value are the same, return true, else false
    let temp = ""
    let arr = val.split('')
    for (let i = arr.length-1; i >= 0; i--) {
        temp += arr[i]
    }

    return temp == arr.join('')

    // Loop through half the string and compare with other half starting from end
    // if same return true, else false
}

const isPalindrome1 = (val) => {
    return val == val.split('').reverse().join('')
}

console.log(isPalindrome("madam"))


// Write a function to calculate the factorial of a number
// const factorial = (x) => {
//     // ....
// }

// let b = factorial(5)
// console.log(b)



// Write a function to calculate the area of a rectangle given the length and width
const areaRect = (length, width) => length * width

// Write a function to calculate the perimeter of a circle given the radius( hint: Math.PI)
const circlePerimeter = (radius) => 2 * Math.PI * radius

// Write a function to reverse a number
const reverseNumber = num => {
    let strNum = String(num)
    return strNum.split('').reverse().join('')
}

const reverseNumber1 = num => {
    let rev = 0
    while (num != 0) {
        let lastDigit = num % 10
        rev = rev * 10 + lastDigit
        num = Math.floor(num/10)
    }
    return rev
}
console.log(reverseNumber1(123456))
// Write a function to count the number of vowels in a string
const numberOfVowels = (phrase) => {
    let charArr = phrase.toLowerCase().split('')
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = 0
    for (let index = 0; index < charArr.length; index++) {
        if (vowels.includes(charArr[index])) vowelCount++
    }
    return vowelCount
}
console.log(numberOfVowels('I am a boy'))

const nVowels = (phrase) => {
    let charArr = phrase.toLowerCase().split('')
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let vowelCount = charArr.reduce((acc, currentValue) => {
        if (vowels.includes(currentValue)) acc++
        return acc
    }, 0)
    return vowelCount
}
console.log(nVowels('I am a boy'))



// Write a function to check if a number is prime
const isPrime = (num) => {
    if (num <= 1) return false
    for (let i = 2; i < Math.floor(Math.sqrt(num)); i++) {
        if (num % i == 0) return false
    }
    return true
}

const factorial = (num) => {
    if (num == 1) return 1
    return num * factorial(num-1)
}

// 10! = 10 * 9!...1!

// factorial(10)
//     factorial(9)
//         factorial(8)
//             factorial(7)
//                 ...
//                 factorial(1)

// 0 1 1 2 3 5 8 13 21 34 55 89 144
// Write a function to print the first 10 fibonacci numbers
const fib = (num) => {
    if (num < 2) {
        return num
    }
    return fib(num-1) + fib(num-2)
}

const printFib = (num) => {
    for (let i = 0; i < 10; i++) {
        let ans = fib(i)
        console.log(ans)
    }
}
printFib(10)


// Write a function to find the sum of natural numbers upto a given number(use recursion)




// Immutability
/*
string
number
boolean
null
undefined
symbol
bigint

primitive types and they immutable
let x = 3.14
*/

// Objects
// created using curly braces 
let obj = {}


// an object is an entity with properties and type
// let obj1 = {
//     property: value,
//     property1: value,
//     proptery2: value
// }

let mercedes = {
    color: "red",
    wheels: 4,
    engine: {
        cylinders: 4,
        sizes: 4.4
    }
}

console.log(mercedes.color)
console.log(mercedes.engine.cylinders)
console.log(mercedes.engine)
console.log(typeof mercedes)
console.log(typeof isPalindrome)


function Car (make, model, year, color) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
}
const myCar = new Car("Eagle", "Talon TS1", 1993, "black")
const myCar1 = new Car("Benz", "C100", 2000, "grey")
const myCar3 = new Car("Benz", "C100", 2000, "grey")
console.log(myCar.make)
console.log(myCar.model)
console.log(myCar.year)

myCar3.color = "red"
console.log(myCar1)
console.log(myCar3)


for(const i in myCar) {
    console.log(i)
}

delete myCar1.color
console.log(myCar1)

Car.prototype.age = "20"
console.log(myCar.age)
console.log(myCar3.age)
console.log(myCar1.age)

Math.sqrt()

const testObj = {
    myMethod: (a, b) => {
        return a + b
    }
}
console.log(testObj.myMethod(5, 6))

const CustomMath = {
    min: (arr) => {
        let minimum = Number.MAX_SAFE_INTEGER
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] < minimum) minimum = arr[i]
        }
        return minimum
    }
}

console.log(CustomMath.min([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

let newArr = []

const person = {}
person.firstName = "Jack"
person.lastName = "Ryan"
person.age = 50

person.name = function() {
    return this.firstName + " " + this.lastName
}
console.log(typeof person.name)
console.log(person.name())

console.log(Object.values(person))
console.log(Object.keys(person))


let ab = 5
let z = ab
z = 6
// ab = 7
console.log(ab)
console.log(z)


const x1 = person
x1.firstName = "George"
console.log(x1)
console.log(person)
console.log(person["firstName"])

person.profession = "engineer"


let objOfObj = {
    name: "Jack",
    profession: {
        title: "Engineer",
        years: 2
    }
}

// objOfObj["profession"]["title"]
// objOfObj.profession.title

// Accessing Object properties
// let obj = {}
// obj.property
// obj["property"]


for (let index in person) {
    console.log(person[`${index}`])
}

// JSON
// Javascript Object Notation
let personString = JSON.stringify(person)
console.log(personString)
// console.log(Object.values(personString))
console.log(typeof personString)

let personObj = JSON.parse(personString)


// Javascript Sets
// A set is a collection of unique values

// Each value can only occur one in a Set
// a Set can hold any value of any data type
let s = new Set()
let t = new Set([1, 12, 1, 2, 2, 3])
console.log(t)

// add() -> adds a new element to a set
// delete() -> deletes an element from a set
// has() -> returns true if a value exists
// clear() -> Removes all elements from a set
// forEach() -> Invokes a callback for each element
// values() -> returns an iterator with all the values in a set
// keys() -> same as values()
// entries() -> Returns an Iterator with the (value, value) pairs from a set
// size -> returns the number of elements in a set

// Read up on Maps

let object1 = { value: 10 }
let object2 = object1
let object3 = { value: 10 }

console.log(object1 == object2) // true
console.log(object1 == object3) // false

// String Methods(some)
console.log("coconuts".slice(4, 7)) // nut
console.log("coconut".indexOf('u')) // 5
console.log("coconut".indexOf('p')) // -1
console.log("coconut".indexOf('o')) // 1
console.log("coconut".indexOf('o', 1)) // 3
console.log("    okay".trim()) // okay


// Rest parameters
// Math.min(1, 2, 3) -> 1
// Math.min(1) -> 1
// Math.min(1, 2, 3, 4, 5) -> 1

function max(...numbers) {
    let result = -Infinity
    for (let number of numbers) {
        if (number > result) result = number
    }
    return result
}
console.log(max(1))
console.log(max(1, 2))
console.log(max(1, 2, 3, 4, 5))

let xp = [5, 1, 7]
console.log(max(...xp))

// ... -> spread operator
let wordsAgain = ["never", "fully"]
console.log(["will", ...wordsAgain, "understand"])


/*
Write a range function that takes 2 arguments start and end and returns and array
containing all the numbers from start up to (and including) end.

Next write a fum function that takes an array of numbers and returns the sum of these numbers

Modify your range function to take an option third argument that indicates the "step" value 
used when building the array.
If no step is given, the elements go up by increments of one.
So 
range(1, 10, 2) -> [1, 3, 5, 7, 9]
range(1, 10) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Write a function deepEqual that takes two values and returns true only if they are the same or are objects
with the same properties, where the values of the properties are equal when compared with a recursive call to 
deepEqual.

*/
const range = (start, end, step = 1) => {
    let arr = []
    for(let i = start; i <= end; i += step) {
        arr.push(i)
    }
    return arr
}
console.log(range(1, 10))

const fum = (arr) => {
    let sum = 0
    for (n of arr) {
        sum += n
    }
    return sum
}

console.log(fum([1, 2, 3, 4]))
console.log(fum([2,3]))

// const deepEqual = (val1, val2) => {
//     if (typeof val1 !== 'object' && typeof val2 !== 'object') {
//         return val1 == val2
//     }
//     let keys1 = Object.keys(val1)
//     let keys2 = Object.keys(val2)

//     if (keys1.length !== keys2.length) return false

//     for (let i = 0; i < keys1.length; i++) {
//         for (let j = 0; j < keys1.length; j++) {
//             if ()
//         }
//     }

// }

// deepEqual(
//     { a: { name: "Jack"}},
//     { b: { age: 24} }
// )

// let testA = 3
// console.log(testA++)
// console.log(testA)

// Closures
/*
A closure is a function that references variables in the outer scope from its inner scope.
The closure preserves the outer scope inside its inner scope
*/

// let example_name = 'John'

// function greeting() {
//     let message = 'Hi'

//     function sayHi() {
//         console.log(message)
//     }
//     // console.log(message + ' ' + example_name)
//     sayHi()
// }

// greeting()



// function greeting() {
//     let message = 'Hi'

//     function sayHi() {
//         console.log(message)
//     }

//     return sayHi
// }
// let hi = greeting()
// hi()

// function greeting (message) {
//     return function (name) {
//         return message + " " + name
//     }
// }
// let sayHi = greeting('Hi')
// let sayHello = greeting('Hello')

// console.log(sayHi('John'))
// console.log(sayHello('John'))

// Javascript closures in a loop
// for (var index = 1; index <= 3; index++) {
//     setTimeout(function () {
//         console.log('after ' + index + ' second(s"): ' + index);
//     }, index * 1000)
// }

// IIFE - Immediately Invoked Function Expression
// for (var index = 1; index <= 3; index++) {
//     (function(index) {
//         setTimeout(function () {
//             console.log('after ' + index + ' second(s): ' + index);
//         }, index * 1000)
//     })(index)
// }

// Using let keyword in ES6
for (let index = 1; index <= 3; index++) {
    setTimeout(function() {
        console.log(('after ' + index + ' second(s):' + index))
    }, index * 1000)
}

// Higher Order Functions
// A function that operates on other functions
// function greaterThan(n) {
//     return m => m > n
// }

// Modules
/*
A module is a piece of program that specifies which other pieces it relies on and which
functionality it provides for other modules to use
*/

import ordinal from "ordinal"
import { days, months} from "date-names"

export function formatDate(date, format)

// compilers/interpreters
// bundlers
// minifiers
// transpilers


// THE WEB
// www.google.com
// URL
// https://google.com?search=what-is--text
//  -> protocol: http
//  -> google.com
//  -> search=what-is-text
// Document Object Model/DOM
// document => entire document
// documentElement => html

<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>





















































































































































































































































































































































