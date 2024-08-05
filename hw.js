// 1. Какой будет результат?

// parseInt('17px'); // ? 17
// parseInt('17px10'); // ? 17
// parseInt('pas123'); // ? NaN
// parseInt('   123px'); // ? 123
// parseInt('6e6'); // ? 6

// 1. Напиши функцию, которая принимает два числа и возвращает их сумму.

// function sum(a,b){
//     return a + b;
// }

// console.log(sum(1, 3));
// 2. Напиши функцию, которая принимает число и возвращает его квадрат.

// function pow(a){
//     return Math.pow(a, 2);
// }

// console.log(pow(4));

// 3. Напиши функцию, которая принимает три числа и возвращает наименьшее из них.

// function min(a, b, c){
//     return Math.min(a, b, c);
// }

// console.log(min(1, 3, 5));
// 4. Напиши функцию, которая принимает число и возвращает его факториал (можно и нужно погуглить).
// function factorial(a){
//     return (a != 1) ? a * factorial(a - 1) : 1;
// }

// console.log(factorial(5));
// 5. Напиши функцию, которая принимает число и возвращает true, если оно четное, и false, если нечетное.
// function comparison(a){
//     return a % 2 == 0 
// }

// console.log(comparison(5));
// 6. Напиши функцию, которая сгенерирует рандомное число в диапазоне от 1 до 5 (можно и нужно погуглить).
// function random(){
//     let rand = 1 + Math.random() * (5);
//     return Math.floor(rand);
//     }
    
// console.log(random(5));
// 7. Перепиши предыдущую функцию с возможностью задавать диапазон через аргументы функции.

// function randomNew(min, max){
//     let rand =  min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//     }
    
// console.log(randomNew(2, 20));