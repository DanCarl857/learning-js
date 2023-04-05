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
console.log(Object.values(personString))
console.log(typeof personString)

let personObj = JSON.parse(personString)







































































































































































