let arr = [1, 2, 3, 4, 5]
console.log(arr.length)

function Dog(name, breed, colour) {
    this.name = name
    this.breed = breed
    this.colour = colour
    this.bark = function() {
        return 'woof!'

    }
}

const newObj = {}
const info = {
    firstName: "john",
    lastName: "Smith",
    dateOfBirth: '1st DEC 2000',
    friends: ['bob', 'Tom']
}
console.log(info.friends[0])

const example = {
    nestedOb: {
        name: 'Alex'
    }
}
console.log(example)

const anotherObj = new Object()

console.log(anotherObj)

const propsName = 'firstName'

const objOne = {
    [propsName.toUpperCase()]: 'Alex'
}
console.log(objOne)

const objTwo = {
    firstName: 'Alex',
    lastName: 'Ali',
    printFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
console.log(objTwo.printFullName())
console.log(objTwo['firstName'])
console.log(objTwo.hasOwnProperty('lastName'))
console.log(objTwo.hasOwnProperty('address'))

const newProps = delete objTwo.firstName
console.log(newProps)

switch (newDate().getDay()) {
    case 0:
        day = "sunday"
        break
    case 1:
        day = "Monday"
        break
    case 2:
        day = "Tuesday"
        break
    case 3:
        day = "Wednesday"
        break
    case 4:
        day = "Thursday"
    case 5:
        day = "Friday"
        break
    case 6:
        day = "Saturday"
}

(fruits) {
    "Banana": alert("Hello")
    break;
    "Apple": alert("Welcome")
    break;
}