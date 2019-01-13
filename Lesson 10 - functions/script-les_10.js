/* let num = 20; // global variable

function showFirstMessage(text){
    alert(text);
    // num = 10 // var from global
    let num = 10; // new local variable
    console.log(num) //is showing local var (10)
}
showFirstMessage("Hello!");
console.log(num); // is howing global var (20) */

//FUNCTION DECLARATION // PERVYI VARIANT
 function calc(a,b){
    return (a + b);
} 
//let calc = (a,b) => a+b; // VTOROY VARIANT DEKLARIROVANIA FUNKCII

console.log(calc(30,1));
console.log(calc(1,2)); 


function retVar(){
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);




//FUNCTION EXPRESSION
let calc2 = function(a,b){
    return a + b;
};
console.log(calc2(0,1));


// METODS / MEtody
let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());



let twelve = 12.2;
console.log(Math.round(twelve));

let twelve2 = "12.2px";
console.log(parseInt(twelve2));
console.log(parseFloat(twelve2));