
var food = 'pizza'
switch (food) {
case 'Banana':
case 'apple':
case 'pear':
case 'oranage':
    console.log('fruit')
    break;
case 'pumpkin':
case 'cucumber':
case 'broccoli':
case 'cauliflower':
      console.log('vegetable')
    break;
default:
         console.log('not a fruit or vegetable')
}
//will return 'not a fruit or vegetable'


var vehicle = 'car'

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
console.log(text)

/* Will run
BMW
Volvo
Saab
Ford
Fiat
Audi

*/



var txt = "";
var person = {fname:"John", lname:"Doe", age:25}; 
var x;
for (x in person) {
  txt += person[x] + " ";
  }


  var text = ""
  var i = 0;
  
  do {
    text += " The number is " + i;
    i++;
  }
  while (i < 10);  
  console.log(text)
/* Will run
 The number is 0 The number is 1 The number is 2
 The number is 3 The number is 4 The number is 5
 The number is 6 The number is 7 The number is 8 
 The number is 9
*/