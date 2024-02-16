let string1 = 'hello';
let string2 = 'world';
let number1 = 10;
let number2 = 20;
let array = [1, 2, 3, 4, 5];

console.log(string1 == 'hello');
console.log(string1 != 'world');

console.log(string1.toLowerCase() == 'hello');
console.log(string2.toLowerCase() != 'WORLD');

console.log(number1 == 10);
console.log(number1 != 20);
console.log(number2 > 10);
console.log(number1 < 20);
console.log(number2 >= 20);
console.log(number1 <= 10);

console.log((number1 == 10) && (number2 == 20));
console.log((number1 == 10) || (number2 == 30));

console.log(array.includes(3));
console.log(array.includes(6));

console.log(!array.includes(6));
console.log(!array.includes(3));


