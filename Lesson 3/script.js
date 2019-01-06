'use strict';


var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = false;

null;
var obj = {};


var LeftBorderWidth = 1;
let second = 2;
const pi = 3.14;
console.log(4/0);
console.log('string');

let person = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];
console.log(arr[1]);

//alert("Hello World!")

/*let answer = confirm("Are you here?");
console.log(answer)*/

/*let answer = prompt("Are you here?", "YES");
console.log(typeof(answer));*/

// confirm("Are you here?"); // выдает только два варианта ответа, true, false

// prompt("Are you here?", "YES"); // выдает поле для ввода инорамации в string и предаварительно заполненный ответ.



let incr = 10,
    decr = 10;



console.log(++incr);
console.log(--decr);

console.log(5%2);

let isChecked = true,
    isClose = true;

    console.log(isChecked && isClose);
