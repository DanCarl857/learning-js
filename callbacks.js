// Callbacks
// A call back function is a function that you pass to another function to be executed later

function filter (numbers, callback) {
    let results = []
    for(const number of numbers) {
        if (callback(number)) {
            results.push(number)
        }
    }
    return results
}

function isOdd(number) {
    return number % 2 != 0
}

function isEven(number) {
    return number % 2 == 0
}

let numbers = [1, 2, 4, 7, 3, 5, 6]
console.log(filter(numbers, isOdd))
console.log(filter(numbers, isEven))
console.log(filter(numbers, number => number % 2))
console.log(filter(numbers, (number) => {
    return number % 2
}))


// Synchronous callbacks - executed during the execution of the higher oder function
// Asynchronous callbacks - executed after the higher order function has executed



// function download (url, callback) {
//     setTimeout(() => {
//         console.log(`Dowloading ${url} ...`)

//         // process the picture once it's completed
//         callback(url)
//     }, 5000)
// }

function download (url, success, failure) {
    setTimeout(() => {
        console.log(`Dowloading ${url} ...`)

        // process the picture once it's completed
        !url ? failure(url) : success(url)
    }, 5000)
}

function process(picture) {
    console.log(`Processing ${picture}`)
}

let url = 'https://wwww.javascriptlessons.net/pic.jpg'
let picture = 'img/src1.jpg'

// download(url)
// process(picture)
// download(url, process)
download(
    url,
    (url) => console.log(`Processing the picture ${url}`),
    (url) => console.log(`The '${url}' is not valid`)
)

// Read up on Callback hell


























