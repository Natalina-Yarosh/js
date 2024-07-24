let a = 10;
console.log(typeof 5); //boolean 1) 5 - true; 2)отрицание - false 
//0, ''(пустая строка), null, undefined, false, NaN - все отрицательное
console.log(typeof !undefined);
console.log(typeof NaN);//NaN - число! - number
//number string boolean | null undefined | symbol bigInt | object
//-a
//a-b
// a ? b : c; - один!!!  все части обязательны!! можно присваивать значение в переменную
a+=5

// || - первый true или последний false
// && - первый false или последний true

// приоритет ! && || 

2 || 3 || 4; // 2
2 || 3 && 4; // 2
2 && 3 || 4; // 3
"pasha" || 0; // "pasha"
"pasha" && 0; // 0
0 && "pasha"; // 0 
0 || "pasha"; // "pasha"
null || 7 && -4; //-4
null && 7 || -4; //-4
null && !7 || -4; //-4