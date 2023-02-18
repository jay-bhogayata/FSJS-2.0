function printHello() {
  console.log("Hello world");
}
printHello(); // calling the function

//function with perimeters and return
function sum(n1, n2) {
  return n1 + n2;
}
let ans = sum(12, 13);
console.log(ans);

function changeObj(obj) {
  obj.uname = "John Doe";
}
let obj1 = {
  uname: "Jay",
  city: "NYC",
};
console.log(obj1);
changeObj(obj1);
console.log(obj1);

const squareFunc = function (n) {
  console.log(n * n);
};
squareFunc(5);

// recursive function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Variables defined inside a function cannot be accessed from anywhere outside

function sumOfArgs() {
  console.log(arguments);
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
}
console.log(sumOfArgs(1, 2, 4, 3));

//closure
function outer(a) {
  function inner(b) {
    return a + b;
  }
  return inner;
}

const innerfunc = outer(5);
const way1 = innerfunc(5);
const way2 = outer(2)(2);
console.log(way2);

// Arrow function
let arrowFunction = (name) => {
  console.log(`Hello ${name}`);
};

arrowFunction("jay");
