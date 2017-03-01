var cars = new Array('honda', 'mercedes', 'peugeot');

var cars2 = ['honda', 'mazda', 'toyota', cars];
document.getElementById('box').innerText = cars2[0] + ", " + cars2[2];

var some = "SAE";
//console.log(some[2])
//console.log(cars2[3][2])
//array.lenght will give you a number of elements in the array

var pizzas = [
  'pizza with cheese',
  'vegetarian pizza'
];
var food = [
  ['burger', 'french fries', 'salad'],
  pizzas
];
//console.log(food[1][1]);

cars.push('audi', 'yugo'); //will add to the end
cars.pop(); //will remove last element
cars.unshift('trabant'); //will add to the beginning
cars.shift(); //will remove first element
//universal command for anything

//cars.splice(0, 1, 'bmw');

//console.log(cars);
/* LOOPS */
var fruit = ['plumb', 'banana', 'mango', 'apple', 'kiwi', 'melon', 'cherry'];
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
// console.log(fruit[4]);
// console.log(fruit[5]);

var reversedFruit = [];

for(var i = fruit.length - 1; i >= 0; i--){
 // if (fruit[i].length == 5 ) {
    //console.log(fruit[i]);
    reversedFruit.push(fruit[i])

  //}
}

console.log(reversedFruit);
for (var i = 0; i < 64; i++) {

  var color = (i%2 == 0) ? "white" : "black"; //ternary , modulus

  var div = document.createElement('div');
  div.setAttribute('class', 'box2 ' + color);
  document.body.appendChild(div);

}

//not that important
var e = 0;
while(e < 100){
  e++;
}
