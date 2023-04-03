// ES5 Values
var student_name = "Jack"
console.log(student_name)

// var var = "jack"  ===> wrong

// ES6 Values
let boy_name = "John"
const girl_name = "Daisy"

// girl_name = "Mary" // error seeing as we are changing a constant

let obj = {}
let arr = []
let numb = 45
let character = 'c'

console.log(typeof obj)
console.log(typeof numb)

let chef = "Jack"

// Numbers
let num1 = 2
let num2 = "2"

console.log(num1 * 2) // 4

console.log((100 + 4) * 11)
console.log(4 % 2)

console.log(Infinity)
console.log(NaN)

// Strings

let phrase = "This is a phrase"
let two_phrases = "This is a phrase\nAnd this is the second"

console.log(phrase)
console.log(two_phrases)

let val1 = "2"
let val2 = "4"

let firstName = "John"
let lastName = "Doe"

console.log(firstName + " " + lastName)

let prof_name = "Marty"

console.log(`My professor's name is ${prof_name}`)

console.log(val1 + val2)

console.log(typeof val1)


let truth = true
let falsy = false

let city = "Douala"
let state = "Douala" == city ? true : false

// Comparison
console.log(2 >= 2)
console.log("2" == 2)
console.log(4 != 5)
console.log("aba" < "bat")

console.log("Aba" < "aba")
console.log("Abaa" < "Aba")

console.log(NaN == NaN)

// Logical Operators
console.log(true && false)
console.log(false && false)

console.log(true || false)
console.log(!true)



console.log(1+1 == 2 && 10 * 10 > 50)

console.log(true ? 1 : 2)
console.log(false ? 1 : 2)

console.log(10 * 10 > 50 ? "yes" : 'no')

// Empty values
console.log(null)
console.log(undefined)
console.log(null === undefined)


console.log(8 * null) // 0
console.log("5" - 1) // 4
console.log("five" * 2) // NaN
console.log(false == 0) // true
console.log(null == 0) // false


// Short circuiting of logical operators
// the OR operator will return the value to its left
// when it can be converted to true 
console.log(null || "users") // users
console.log("Agnes" || "user") // Agnes
console.log(0 || -1)  // -1
console.log(12 && 57) // 12






1;
!false;

// Functions
console.log()
prompt("Enter passcode: ")




console.log(Math.PI)


// Conditional Execution
if (condition) {
    // statements
}

Number.isNaN(5) // false
!Number.isNaN(6) // true

let numb1 = NaN
if (!Number.isNaN(numb1)) {
    console.log("Your number is the square root of ", numb1 * numb1)
}

if (Number.isInteger(numb1)) {
    console.log('....')
} else {
    console.log("The number you entered is not an interger")
}



let numb2 = 5

if (numb2 < 10) {
    console.log('small')
} else if (numb2 < 100) {
    console.log("medium")
} else {
    console.log('large')
}


































































































