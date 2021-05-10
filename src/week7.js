// two arguments, return the two arguments in an array

function newArr(a, b) {
   let arrOne = [a, b]
   return arrOne
}
console.log(newArr(1, 2))

let newArr = (a,b) => [a, b]
console.log(newArr(1, 'Ali'))

let newArr = (...a) => a
console.log(typeof newArr)
console.log(newArr(1, 'Ali', 3, 4, 5, 6, 7, 8))


let arrTwo = ['Ali', 'Kenny', 'Sharleen', 'Daev', 'Lewis', 'Holly', 'Howard', 'Justin']
console.log(arrTwo[5], arrTwo[4], arrTwo[7], arrTwo[0])


function oddOrEven(x) {
   let sum = 0
   x.forEach(num => sum += num)
   return sum%2 === 0 ? 'even' : 'odd'
}
console.log(oddOrEven([1, 2, 3, 4, 5]))

function oddOrEven(x) {
let sum = 0
for(let i = 0; i < x.length; i++) {
   sum += x[i]
   if (sum%2 === 0) {
   return 'even'
} else {
   return 'odd'
}
}
}
console.log(oddOrEven([2, 4, 5]))




function odd (x) {  
  let arr = [] 
  for (let i = 0; i <= x; i++) {  
 if (i%2 !== 0) { 
     arr.push(i) 
  }
 
  } 
  let result = 0 
  for (let a = 0; a < arr.length; a++) { 
      result += arr[a] 
  }
  return result
}
console.log(odd(13)) 



// function stringToNumber(arr){
//     return arr.map(x => Number(x))
// }

// console.log(stringToNumber(["9.4", "4.2"]))


// function stringToNumber(arr) {
//     newArr = []
//     arr.forEach((x) => {
//         newArr.push(parseInt(x))
//     })
// return newArr
// }
// console.log(stringToNumber(["9.4", "4.2"]))
// console.log(stringToNumber(["7010.7"]))

// function arrayToString(arr){
//     let text = " "
//     for (let i = 0; i < arr.length; i++) {
//         text += arr[i]
//     }
// return text
// }
// let example = arrayToString([1, 2, 3, 4, 5, 6])
// console.log(arrayToString([1, 2, 3, 4, 5, 6]))
// console.log(example)
// console.log(typeof example)


//function arrayToString(arr){
//}


function gnirts(x) {
    let arr = x.split('')
    console.log(arr)
    let newArr = arr.reverse()
    console.log(newArr)
    let joinNewArr = newArr.join('')
    console.log(joinNewArr)
    return joinNewArr 
}
console.log(gnirts('Holly'))




