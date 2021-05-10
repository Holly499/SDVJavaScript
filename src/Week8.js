//firstfun([1,2,3,4], [5,6,7], [8,9,10]) => [1,2,3,4,5,6,7,8,9,10]  

function firstFunc(...args) {
    let result = [];
    for (i = 0; i < (arguments.length); i++) {
        result.concat(arguments[i]);
    }
    return result
}

function esSixFunc(...args) {
return[].concat(...args)
}

//create a function that takes two arguments numbers, length


//secondFunc(7, 5) => (7, 14, 21, 28, 35)

function secondFunc(number, length) {
    let result = []
    for (let i = 1; i <= length; i++) {
    result.push(number * i)
}
return result
}

console.log(secondFunc(5, 5))

//ES6
function esSecondFunc(number, length) {
    return [...Array(length).keys()].map((e, i) => (e+ 1)* number)
}

//create a function that takes an array of numbers and a sting returns an array of numbers sorted in acending to decending

function sortFunc(arr, str) {
    switch(str) {
        case 'Ascending':
            return arr.sort((a, b) => a - b)
            break;
        case 'Descending':
            return arr.sort((a, b) => b - a)
            break;
            default: return arr

    }
}
console.log((sortFunc[1, 2, 3, 4, 5], '6, 7, 8, 9'))


const esSortFunc = (arr, str) => 
str === 'Ascending' ? arr.sort((a, b) => a - b) :
str === 'Descending' ? arr.sort((a, b) => b- a) :
arr

//create a function that returns true if all params are truthy otherwise return false

// ttrueOrFalse (true, true, true) = true (true, true, true, 0) = false

const trueOrFalse = (...args) => args.every(Boolean)

//create a function that takes three arguments (x, y, z,) and returns
// an array cotaining a n number of sub arrays
// each sub array contains item within

function subArrays(x, y, z) {
    return Array(x).fill(Array(y).fill(z))
}



//checkSubArrays([1, 3], [1, 2, 3, 4, 5]) -> true
//checkSubArrays([1, 2, 3], [6, 7, 8, 9] ) => false

//function checkSubArrays (g, h) {
  //  return Array(g).fill(Array(h))
//}

const arrCompare = (arr1, arr2) => {
for (let i = 0; i < arr1.length; i++) {
    if (arr[i] === arr2[i]) {
        return true
}   return false
}
}

console.log(arrCompare([1, 3], [1, 2, 3, 4, 5]))
console.log(arrCompare([1, 2, 3], [6, 7, 8, 9]))

