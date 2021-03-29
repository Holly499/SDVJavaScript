const mark = 65
switch (mark) {
    case 50 :
        console.log('C+')
        break
        case 70:
            console.log('B-')
            break
            case 80 :
            console.log('A-')
            break
            case 90 :
            console.log('A')
            break
            default:
                console.log('')
                break
}

const food = 'pumpkin'
switch (food) {
  case 'apple' : 
  case 'banana' : 
  case 'pear' : 
  case 'grape': 
    console.log('fruit');
    break
  case 'pumpkin': 
  case 'potato':
    console.log('vegetable')
    break
  default:
    console.log('Misc')
}

const foo = 1
let output = ''
switch (foo) {
  case 0:
    output += 'So'
  case 1:
    output += 'How'
    output += 'Old'
  case 2:
    output += 'Are'
  case 3:
    output += 'You'
  case 4:
    output += '?'
    console.log(output)
    break;
  case 5:
    output += '!'
    console.log(output)
    break
  default:
    console.log('Please pick a number from 0 to 5!')
}

let isStudent = false
let isSenior = true
let price = isStudent ? 8 : isSenior ? 6 : 10
console.log(price)
//refer to dsv gitbook to complete this test
console.log(isStudent)
console.log(price)


let arr = [1,2,3,4,5,6,7]
console.log(arr.length)
for (i =0; i <= arr.length; i++) {
    console.log('this is a loop')

}

let string = 'This Long ass Piece of Text'
for (let value of string)
console.log(value)

for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
        for (let g = 0; g < 3; g++)
            for (let t = 0; t < 3; t++) {
                console.log(i, j, g, t, i, j, g, t, g, t, i, j, i, j)
            }

            let array = [4, 5, 6]
            for (let value of array)
            console.log(value)
            
            let object = { l: 4, m: 5, n: 6}
            for (let value in object) // error object is not iterable
            console.log(value, object[value])

            




