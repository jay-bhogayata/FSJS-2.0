/* 
=> array is object is js that is capable of store collection of multiple items  
=> it can be same data type or different data type
=> resizable
=> JavaScript arrays are not associative arrays
=> 1st elm index 0 , last index length-1
=> array copy operation perform shallow copy
*/

let fruits = ["apple", "banana", "cherry", "mango"];
console.log(typeof fruits);

console.log(fruits.length);

console.log(fruits[0]); // or console.log(fruits["0"]) works same way
console.log(fruits[fruits.length - 1]);

console.log(fruits["1"]);
console.log(fruits["01"]); //this will not work bcz "01" is arbitrary value

// array properties

let arr1 = ["IND", "USA", "UK"];
let arr2 = ["AUS", "CN", "FRN"];

// concat
console.log(arr1.concat(arr2)); // return new array
let arr3 = arr1.concat(arr2);
console.log(arr3);



//copyWithin
arr = ["apple", "banana", "cheery", "mango", "greps"];
console.log(arr.copyWithin(0, 1, 2)); // return modified arr
arr = ["apple", "banana", "cheery", "mango", "greps"];
console.log(arr.copyWithin(1, 3));


// every()
const isEven = (num) => {
  num % 2 === 0;
};
console.log(Boolean(isEven(12))); // return true
num = [1, 2, 3, 4, 5, 6];
console.log(num.every(isEven)); // false bcz all are not even
num = [2, 4, 6, 8];
console.log(num.every(isEven)); // true bcz all values are even
// some()=> if one item pass the fn return true
let num = [1, 2, 3, 4, 5, 6];


// filter
let numGtThen3 = num.filter((n) => n > 3);
console.log(numGtThen3);

// map() => not modify og array
num = [1, 2, 3, 4];
console.log(num.map((n) => n + 1));
console.log(num);

// reduce() =>
const sum = (n1, n2) => {
  return n1 + n2;
};
console.log(num.reduce(sum));


let arr = [
  "a",
  "b",
  "c",
  ["d", "e", "f", ["g", "h", "i", ["Jay", ["abc", ["def"]]]]],
];

// flat

console.log(arr.flat()); // return new array
console.log(arr.flat(2));
console.log(arr.flat(3));
console.log(arr.flat(Infinity));



// flatMap => Map + filter
arr = [1, 2, [3, 4]];
console.log(arr.flatMap((n) => n * n)); // first apply fun then then flat it



// foreach => not modify og array
num.forEach((n) => console.log(n));
num.forEach((n) => console.log(n * 2));



// indexOf() => return first index if found else -1 (use ===)
arr1 = ["IND", "USA", "UK", "IND"];
console.log(arr1.indexOf("UK"));
console.log(arr1.indexOf("CN"));
console.log(arr1.indexOf("IND")); // only return 0 (first index)
//lastIndexOf()
console.log(arr1.lastIndexOf("IND"));



// reverse => change og array
let names = ["Albert", "bob", "carl", "Daisy"];
arr = names.reverse();
console.log(names, arr);

//slice() => return shallow copy of arr
console.log(names.slice());
console.log(names.slice(-1));
console.log(names.slice(0, 1));

//splice() => modify arr
fruits = ["apple", "banana", "cherry", "mango"];
console.log(fruits.splice(0, 3, "kiwi", "watermelon"));
console.log(fruits);

// sort()
fruits = ["watermelon", "kiwi", "apple", "banana", "cherry", "mango"];
console.log(fruits.sort());
nums = [10, 2, 31, 4, 50, 9, 7, 6, 9, 100];
console.log(nums.sort((a, b) => a - b));

