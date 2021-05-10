//creat a function that takes two numbers and a mathmatical thingy and 
function calFunc(num1, operator, num2) {
    operations = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
        '/' : (a, b) => a / b

    }
return operations[operator](num1, num2)
}
console.log(calFunc(3, "+", 4))
console.log(calFunc(4, "*", 9))
console.log(calFunc(123, "/", 3))
console.log(calFunc(9, "-", 6))


//create a function that takes an array and returns the sum of all items in the array. the item in an array can be another array

// function sumFunc(arr) {
//     return arr.flat(infinity).reduce((a,b) => a+b)
// }
// console.logs(sumFunc([1, [2, [1]], 3]))

//create a func that takes multidimensional array, converts into one dimensional array and returns ot using recursive/
// flatten([[17.2, 5, "sdv503"]]) to []

const flatten = (arr) => {
    const result = [];

    arr.forEach(element => {
        Array.isArray(element) ? result.push(...flatten(element)) : result.push(element)
    })
}

//create a function that takes an object or array as an argument and returns the maximum depth of that object or array.
//getdepth ([a : 1]) to 1

//getDepth ([1,[2, [3, [4, [5]]]]]) to 5

const getDepth = obj => {
    let level = 1

    object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
        const depth = getDepth(obj[key]) + 1
            level = Math.max(depth, level)
    }
    })
    return level
}

//create a function that can nest a flat array to represent an incremental depth level sequence.
//the elements do not matter to the function, you should increment by index.
//Expect the array length to be from 2-20

//createDepth([1, 2]) - [1, [2]]
//createDepth([1, 2, 3]) - [1, [2, [3]]]

function createDepth(arr) {
    if(arr.length === 1) return arr
    return [arr[0], createDepth(arr.slice(1))]
    
}
console.log(createDepth([1, 2, 3, 4, 5, 6, 7]))


function flatArray() {
    let result = [];
    if (arr === undefined) {
        return arr
    }

    arr.forEach(function (e) {
        if(Array.isArray(e)){
result = result.concat(flatArray(e))
    } else {
        if(typeof e === 'function') {
            result.push(e())
        } else {
            result.push(e)
        }
    }
})
}


