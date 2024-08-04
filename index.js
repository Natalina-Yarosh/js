console.log(a);
var a = 5;

// let s = 's';// как создать переменную symbol

let s = Symbol('');

//* / - унарные операторы

// d
//от 20 до 1 по убыванию

// let i = 20;

// do{
//     console.log(i);
//     i--;
// }while(i >= 1)

// for(let i = 20; i >= 1; i--){
//     console.log(i);
// }

const x = 1; 
const y = 2; 
switch (x + y) { 
    default: 
        console.log('Нет совпадений'); 
    case "1": 
        console.log('1'); 
        break; 
    case "2": 
        console.log('2'); 
        break; 
    case "3": 
        console.log('3'); 
        break; 
}

function sum(a, b) { 
    a + b; 
} 
console.log( 
    sum(1, 2), //undefined
    typeof sum(1, 2),  //undefined
    typeof sum //function
);

console.log(2 && 3 && 4);  //4
console.log(2 || 3 || 4);  //2
console.log(2 || 3 && 4);  //2
console.log("pasha" || 0); //"pasha"
console.log("pasha" && 0); //0
console.log(0 && "pasha"); //0
console.log(0 || "pasha"); // "pasha"
console.log(null || 7 && -4); //-4
console.log(null && 7 || -4); //-4
console.log(null && !7 || -4); //-4

let count = 2;  
console.log(count++);  //2
console.log(++count);  //4
console.log(--count);  //3
console.log(count++);  //3
console.log(count--);  //4
console.log(count);    //3

