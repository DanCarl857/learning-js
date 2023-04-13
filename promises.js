// Promises

// Variables
// Data types
// Operators
// Loops: while, for, do-while
// Conditionals: if, switch
// Arrays, Objects, Sets, Maps
// Functions - anonymous, arrow, IIFE
// Higher Order Functions
// DOM manipulation
// Callbacks

// A promise is an object that encapsulates the result of an asynchronous operation
/*
    A promise object has 3 states:
        - Pending
        - Fulfilled state with a value
        - Rejected state with a reason
*/

// const promise = new Promise((resolve, reject) => {
//     // contains an operation

//     // return the state
//     if (success) {
//         resolve(value)
//     } else {
//         reject(error)
//     }
// })

// function getUsers(callback) {
//     let users = []

//     setTimeout(() => {
//         callback([
//             { username: 'john', email: 'john@test.com' },
//             { username: 'jane', email: 'jane@test.com' }
//         ])
//     }, 3000)
//     return users
// }

// function findUser(username, callback) {
//     getUsers((users) => {
//         const user = users.find((user) => user.username === username)
//         callback(user)
//     })
// }

// console.log(findUser('john', console.log))

// const promise = new Promise((resolve, reject) => {
//     // ....
// })
// console.log(typeof promise)

// promise.then(onFulfilled, onRejected)
let success = true

function getUsers() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve([
                    { username: 'john', email: 'john@test.com' },
                    { username: 'jane', email: 'jane@test.com' }
                ])
            } else {
                reject('Failed to get the user list')
            }
        }, 1000)
    })
}

function onFulfilled(users) {
    console.log(users)
}

function onRejected(error) {
    console.log(error)
}

// const promise = getUsers();
// promise.then(onFulfilled, onRejected)

// promise.then(
//     (users) => console.log,
//     (error) => console.log
// )
// promise.catch(onRejected)

// getUsers().then(users => console.log(users))

getUsers()
    .then((users) => {
        console.log(users)
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('Our promise is done'))