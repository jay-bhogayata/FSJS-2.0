// dynamic type
let a = 10;
console.log(typeof a);
a = "Jay";
console.log(typeof a);
a = true;
console.log(typeof a);

//weakly types -> implicit type conversion

let Uname = "jay";
Uname = Uname + 15;
console.log(Uname);

/* 
=> in js all primitive value is immutable and object is mutable but we can reassign variable.


=> An immutable value is one whose content cannot be changed without creating an entirely new value.
*/

// primitive data type
// -> all the primitive data type excluding null and undefined have corresponding object wrapper that provide useful methods. ex. toString()

// 1. number
let num = 12;
console.log(typeof num);
let num1 = 2.4;
console.log(typeof num1);
console.log(
  `Number type min value is ${Number.MAX_VALUE} and max value is ${Number.MIN_VALUE}`
);

console.log(`NaN === Nan ${NaN === NaN}`);
// NaN -> only value in JavaScript that is not equal to itself.

let n1 = "jay";
console.log(isNaN(n1));

console.log(Number("15jk"));
console.log(typeof NaN); // type of NaN is a number
console.log(isNaN("15")); // return false bcz js can convert '15' to number 15
console.log(isNaN("Jay")); // return true bcz js can not convert "jay" to number data type

/* How isNaN() works?
isNaN first converts the provided value to Number and if its anything other than NaN, it returns false.
*/

// 2. null -> absence of object
let x = null;
console.log(null === 0); // return false
console.log(typeof null);

// 3. undefined -> absence of value
let y;
console.log(typeof y);

// 4. boolean
let isAnimal = true;
console.log(typeof isAnimal);

// 5. BigInt
// A BigInt is created by appending n to the end of an integer or by calling the BigInt() function.
let bigInt = BigInt(Number.MAX_SAFE_INTEGER);
console.log(bigInt);
console.log(Number.MAX_SAFE_INTEGER);
console.log(typeof bigInt);

// 6. string
// utf-16 encoded
let myName = "Jay";
console.log(typeof myName);
console.log(myName[0]);

// 2nd way to define string
let str = new String("jay");
console.log(`the string is ${str} and type of it is ${typeof str}`);

// // 7. symbol
// // unique and immutable primitive value , The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code.

let j = Symbol("jay");
let k = Symbol("jay");
console.log(`j ===k ${j == k}`);
console.log(j.valueOf == k.valueOf);

/*

=> Primitive data type
1. Number
2. BigInt
3. String
4. Boolean
5. Symbol
6. Undefined
7. Null (type is object)

=> Everything else is object type
    function
    array
    Date
    RegExp
    Error

*/
