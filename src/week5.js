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

let isStudent = true
let price = isStudent ? 8 : 12
console.log(price)
//refer to dsv gitbook to complete this test