
// 1. Выведи в консоль числа от 1 до 100.
// for (let i = 1; i <= 100; i++){
//     console.log(i)
// }
// 2. Выведи в консоль числа от 11 до 33.
// for (let i = 11; i <= 33; i++){
//     console.log(i)
// }
// 3. Выведи в консоль все целые числа от 10 до 1 в обратном порядке:
// for (let i = 10; i >= 1; i--){
//     console.log(i)
// }
// 4.Выведи столбец четных чисел в промежутке от 0 до 100.
// for (let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     } 
// }
// 5. Выведи в консоль таблицу умножения на 5. 
// for (let i = 1; i <= 10; i++){
//     console.log('5 x ', i, ' = ', 5 * i);
// }
// 6. С помощью цикла найди сумму чисел от 1 до 100.
// let sum = null;
// for (let i = 1; i <= 100; i++){
//     sum += i; 
// }
// console.log(sum);
// 7.Напиши switch, который проверит значение переменной a и выведет в консоль соответствующее сообщение а равен 1,а равен 2,а равен 3,а не равен ничего из перечисленого .
// const a = 4;
// switch (a) {
//   case 1:
//     console.log('а равен 1');
//     break;
//   case 2:
//     console.log('а равен 2');
//     break;
//   case 3:
//     console.log('а равен 3');
//     break;

//   default:
//     console.log('а не равен ничего из перечисленого');
//     break;
// }
// 8.Напиши switch который принимает на вход число от 1 до 7 и выводит в консоль соответствующий день недели (1 - понедельник, 2 - вторник и т.д.):
// const day = 4;
// switch (day) {
//   case 1:
//     console.log('понедельник');
//     break;
//   case 2:
//     console.log('вторник');
//     break;
//   case 3:
//     console.log('среда');
//     break;
//   case 4:
//     console.log('четверг');
//     break;
//   case 5:
//     console.log('пятница');
//     break;
//   case 6:
//     console.log('суббота');
//     break;
//   case 7:
//     console.log('воскресенье');
//     break;

//   default:
//     console.log('число не входит в диапазон от 1 до 7');
//     break;
// }
// 9. Напиши switch, который принимает на вход символ латинского алфавита и выводит в консоль его порядковый номер (A - 1, B - 2 и т.д.)
// const symbol = 'a';
// switch (symbol.toUpperCase()) {
//     case 'A': console.log ('1'); break;
//     case 'B': console.log ('2'); break;
//     case 'C': console.log ('3'); break;
//     case 'D': console.log ('4'); break;
//     case 'E': console.log ('5'); break;
//     case 'F': console.log ('6'); break;
//     case 'G': console.log ('7'); break;
//     case 'H': console.log ('8'); break;
//     case 'I': console.log ('9'); break;
//     case 'J': console.log ('10'); break;
//     case 'K': console.log ('11'); break;
//     case 'L': console.log ('12'); break;
//     case 'M': console.log ('13'); break;
//     case 'N': console.log ('14'); break;
//     case 'O': console.log ('15'); break;
//     case 'P': console.log ('16'); break;
//     case 'Q': console.log ('17'); break;
//     case 'R': console.log ('18'); break;
//     case 'S': console.log ('19'); break;
//     case 'T': console.log ('20'); break;
//     case 'U': console.log ('21'); break;
//     case 'V': console.log ('22'); break;
//     case 'W': console.log ('23'); break;
//     case 'X': console.log ('24'); break;
//     case 'Y': console.log ('25'); break;
//     case 'Z': console.log ('26'); break;
//     default: console.log('введите символ латинского алфавита');break;
// }

// 10. Напиши switch, который принимает на вход число от 1 до 12 и выводит в консоль соответствующее ему время года (зима, лето, осень, весна) (потренируй объедине́ние case-ов)

// const a = 4;
// switch (a) {
//   case 1:
//   case 2:
//   case 12:
//     console.log('зима');
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log('весна');
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log('лето');
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log('осень');
//     break;
//   default:
//     console.log('число не входит в диапазон от 1 до 12');
//     break;
// }