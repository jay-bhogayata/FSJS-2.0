// do something repeatedly

// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// do-while loop
// minimum executed once
i = 1;
do {
  console.log(i);
  i++;
} while (i < 0);

// while loop
i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// break => terminate the loop
i = 1;
while (i <= 10) {
  if (i == 5) {
    break;
  }
  console.log(i);
  i++;
}

// continue => skip iteration
i = 1;
for (i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

let user = {
  uname: "jay",
  age: 20,
  city: "AHM",
};

for (const i in user) {
  console.log(`${i} is ${user[i]}`);
}

let numbers = [1, 2, 3, 4, 5, 6];

for (const i in numbers) {
  console.log(numbers[i]);
}
for (const i of numbers) {
  console.log(i);
}

let users = [
  {
    name: "jay",
    age: 20,
  },
  {
    name: "john",
    age: 21,
  },
];

for (const j of users) {
  console.log(j);
  //   console.log(j.name);
  //   console.log(j.age);
}

// for in vs for of
let names = ["jay", "kishan", "john"];
names.name = "diya";
// print keys
for (const i in names) {
  console.log(i);
}
//print values
for (const i of names) {
  console.log(i);
}

// we can use the for...of loop in JavaScript to iterate over objects as well, but it is important to note that for...of is designed to work with iterable objects, which objects are not by default.

const myObject = {
  name: "Jay",
  age: 20,
};

for (const [key, value] of Object.entries(myObject)) {
  console.log(`${key}: ${value}`);
}
// Object.entries(myObject) is return array
console.log(Object.entries(myObject));
console.log(typeof Object.entries(myObject));

const city = "NEW YORK CITY";
for (i of city) {
  console.log(i);
}
