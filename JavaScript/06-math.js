/* 
=> Math -> built-in object that has properties and methods for math const(PI,LN2,E,SQRT2) and math function like (sin,pow,sqrt)
=> works with number type does't work with bigint
=> all methods are static
*/

console.log(Math.PI);
console.log(Math.SQRT2);

console.log(Math.cbrt(27));
console.log(Math.sqrt(16));

console.log(Math.ceil(2.2));
console.log(Math.floor(2.2));

console.log(Math.max(5, 1, 2, 3, 4));
console.log(Math.min(5, 1, 2, 3, 4));

console.log(Math.pow(2, 3));

console.log(Math.round(1.5)); //0.1 to 0.4 -> lower value else upper

console.log(Math.sin(90));

console.log(Math.round(Math.random() * 10 + 1));

min = 1;
max = 100;
let rand = Math.floor(Math.random() * (max - min + 1) + min);
console.log(rand);
