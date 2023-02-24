/*
=> expression is a valid unit of code that resolves to a value. example `a = 5`
=> x = 2 + 3  ,  2 and 3 is operand , + is operator
=> js has unary , binary and ternary operators
=> unary -> one operand (x++)
=> binary -> two operand (x+y)

*/

/* ------------------------------------------------------------------------------------*/
// 1. Arithmetic operators
let num1 = 10;
let num2 = 5;
console.log(`${num1} + ${num2} =  ${num1 + num2}`);
console.log(`${num1} - ${num2} =  ${num1 - num2}`);
console.log(`${num1} * ${num2} =  ${num1 * num2}`);
console.log(`${num1} / ${num2} =  ${num1 / num2}`);
console.log(`${num1} % ${num2} =  ${num1 % num2}`); // return int reminder
console.log(`${num1} **${num2} =  ${num1 ** num2}`);

let x = 5;
console.log(++x); // pre-inc
x = 5;
console.log(x++); // post-inc
console.log(x);

x = 5;
console.log(--x); // pre dec
x = 5;
console.log(x--); // post dec
console.log(x);

let y = 10;
console.log(-y); // unary negation

y = "10";
console.log(+y); // unary plus try to convert operand into number

/* ------------------------------------------------------------------------------------*/

// 2. Assignment operators

let a = 10;
console.log(a);
a += 10; // a =  a + 10
console.log(a);
a -= 10;
console.log(a);
a *= 10;
console.log(a);
a /= 10;
console.log(a);
a %= 7;
console.log(a);
a **= 2;
console.log(a);

a = 5; // 00000000000000000000000000000101 (32bit)
a <<= 2; // 00000000000000000000000000010100
console.log(a);
a = 5; // 00000000000000000000000000000101
a >>= 2; // 0000000000000000000000000001
console.log(a);

/* ------------------------------------------------------------------------------------*/

// 3.  Comparison operators
let val1 = 15;
let val2 = "15";
console.log(val1 == val2); // true
console.log(val1 === val2); //false
console.log(val1 != val2); // false
console.log(val1 !== val2); // true

let val3 = 12;
let val4 = 15;
console.log(val3 > val4); //f
console.log(val3 >= val4); //f
console.log(val3 < val4); //t
console.log(val3 <= val4); //t

/* ------------------------------------------------------------------------------------*/

// 4. Bitwise operators
x = 7; //111
y = 3; //011
console.log(`${x} & ${y} = ${x & y}`); //return 011 = 3
console.log(`${x} & ${y} = ${x | y}`); //return 111 = 7
console.log(`${x} & ${y} = ${x ^ y}`); //return 100 = 4 if both bit are same return 0 else 1
console.log(`~${y} = ${~y}`); //return 100 = 4
console.log(`${x}<<1 =  ${x << 1}`); //return 1110 = 14
console.log(`${x}>>1 =  ${x >> 1}`); //return 011 = 3

/* ------------------------------------------------------------------------------------*/

// 5. Logical operators

a = true;
let b = false;
console.log(`${a} && ${b} = ${a && b}`);
console.log(`${a} || ${b} = ${a || b}`);
console.log(`!${a} = ${!a}`);

// `false && anything` is short-circuit evaluated to false.
// `true || anything` is short-circuit evaluated to true.

/* ------------------------------------------------------------------------------------*/

// 6. String operators => + and +=
let protocol = "https://";
let domain = "google.co.in";
console.log(protocol + domain);
let link;
link = protocol += domain;
console.log(link);

/* ------------------------------------------------------------------------------------*/

// 7. conditional operator (ternary operator)
let age = 19;
age > 18 ? console.log("You can vote") : console.log("you can not vote");

/* ------------------------------------------------------------------------------------*/

// 8. comma operators

let nums = (12, 13, 14);
console.log(nums);

/* ------------------------------------------------------------------------------------*/

// 9. unary operators => delete , typeof, void(discards the expression's return value)

let userInfo = {
  name: "Jay",
  age: "20",
  city: "AHM",
};
delete userInfo.age;
console.log(userInfo);

console.log(typeof 12);

/* ------------------------------------------------------------------------------------*/

// 10. relational operators => in and instanceof

userInfo = {
  name: "Jay",
  age: "20",
  city: "AHM",
};

console.log("name" in userInfo);
console.log("country" in userInfo);

let now = new Date();
console.log(now instanceof Date);
