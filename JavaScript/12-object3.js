const normalObj = {};
console.log(normalObj);

const nullObj = Object.create(null);
console.log(nullObj);

//watch log of bot obj in browser console

// add properties to null object

nullObj.toString = Object.prototype.toString;
console.log(nullObj.toString);
console.log(nullObj);

const obj1 = {
  name: "jay",
  age: 20,
};

for (const [k, v] of Object.entries(obj1)) {
  console.log(`${k} : ${v}`);
}

const map = new Map([
  ["name", "jay"],
  ["age", 20],
]);

console.log(Object.fromEntries(map));

console.log(Object.isFrozen(obj1));
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
