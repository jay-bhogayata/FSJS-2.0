/* 
=> array is object is js that is capable of store collection of multiple items  
=> it can be same data type or different data type
=> resizable
=> JavaScript arrays are not associative arrays
=> 1st elm index 0 , last index length-1
=> array copy operation perform shallow copy
*/

// how to create array

// method 1
let fruitList = ["apple", "banana", "kiwi", "greps"];

// method 2
let user = new Array(4); // create new array with 4 empty slot
user = ["John", 21, "NYC"]; // it resize to 3

console.log(fruitList);
console.log(user);

// length of array
console.log(fruitList.length);
user.length = 10; // inc length of user array to 10
console.log(user, user.length);

// index and access value using index
console.log(fruitList[0]); // 1st element
console.log(fruitList[fruitList.length - 1]); // last element
console.log(user["1"]); // this is also valid give first element of user array
console.log(user["01"]); // not give the element

// reverse() => reverse the actual array and return it
console.log(fruitList.reverse());
console.log(fruitList);

// sort() => sort the original array and return
// first convert every element to string and then use seq of utf-16 to sort in aesc. order
let numList = [1, 3, 5, 6, 7, 8, 31];
// console.log(numList.sort());
console.log(numList.sort((a, b) => a - b));
// fn value > 0 sort => ba
// fn value < 0 sort => ab
// fn value === 0 keep as it is
console.log(numList);

// fill => fill the element , change og array
fruitList = ["apple", "banana", "kiwi", "greps"];
// console.log(fruitList.fill(0)); //fill all place
console.log(fruitList.fill(0, 1, 2)); // fill 0 , start from 1 go till 2
console.log(fruitList.fill(0, 2)); // fill 0 , start from 2 go till end

//join => not change og array , convert array into string
fruitList = ["apple", "banana", "kiwi", "greps"];
console.log(fruitList.join());
console.log(fruitList.join("-")); // in "" give ant delimiter
console.log(fruitList);

//toString()
user = ["john", 20, "NYC"];
console.log(user.toString());

// pop() => remove last element and return it, change og array
console.log(fruitList.pop());
console.log(fruitList);

// shift() => remove 1st(0th index) element and return it , change og array
console.log(fruitList.shift());
console.log(fruitList);

//push() => push element at last of og array return size of array
console.log(fruitList.push("apple"));
console.log(fruitList);
console.log(fruitList.push("avocado", "watermelon"));
console.log(fruitList);

//unshift() => add the element (one or more) at start and return length of array
console.log(fruitList.unshift("greps"));
console.log(fruitList);
fruitList.unshift("coconut", "oranges");
console.log(fruitList);

// concat() => merge to or more array not modify og array , return shallow copy
let arr1 = ["IND", "USA", "UK"];
let arr2 = ["AUS", "CN", "FRN"];
console.log(arr1.concat(arr2)); // return new array
let arr3 = arr1.concat(arr2);
console.log(arr3);

//splice() => modify arr , splice(start, deleteCount, item1, item2, itemN)
fruits = ["apple", "banana", "cherry", "mango"];
// console.log(fruitList.splice(0));
// console.log(fruit.splice(0, 2));
console.log(fruits.splice(0, 3, "kiwi", "watermelon"));
console.log(fruits);

// indexOf() => return first index if found else -1 (use ===)
arr1 = ["IND", "USA", "UK", "IND"];
console.log(arr1.indexOf("UK"));
console.log(arr1.indexOf("CN"));
console.log(arr1.indexOf("IND")); // only return 0 (first index)
console.log(arr1.indexOf("IND", 2)); // start searching from index 2
//lastIndexOf()
console.log(arr1.lastIndexOf("IND"));

// Array.of() => create new array from var as args
console.log(Array.of("John", 25, "NYC"));

//slice() => not modify og array
fruitList = ["apple", "banana", "kiwi", "greps"];
console.log(fruitList.slice()); // whole array
console.log(fruitList.slice(-1)); // start index
console.log(fruitList.slice(0, 1)); // start index, end index
console.log(fruitList);

// findIndexOf() => return 1st index that satisfy condition
nums = [3, 5, 12, 6, 7, 8];
console.log(nums.findIndex((e) => e % 2 === 0));
// find() => return 1st item that satisfy condition
console.log(nums.find((e) => e % 2 === 0));

// includes()
nums = [3, 5, 12, 6, 7, 8];
console.log(nums.includes(5));
console.log(nums.includes(5, 2)); //(key,startIndex)
