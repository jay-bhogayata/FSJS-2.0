/*

=> all object is instance of a Object

=> object is inherits properties from Object.prototype , but they are may be shadowed(override)

=> null.prototype is not inherits properties from Object.prototype

=> change in Object.prototype is see by all objects using prototype chaining

=> This provides a very powerful although potentially dangerous mechanism to override or extend object behavior. To make it more secure, Object.prototype is the only object in the core JavaScript language that has immutable prototype — the prototype of Object.prototype is always null and not changeable.

*/

console.log(this);

// in browser this point to window object
// almost everything in js is a object

const object = {
  name: "jay",
  age: 20,
};

// for (k in object) {
//   console.log(`key is ${k} value is ${object[k]}`);
// }

// object is mutable ,we can change or append the object

const obj1 = {
  rocket: "PSLV",
  fuel: 2,
  config: {
    name: "mars",
  },
};
// console.log(obj1);
obj1.fuel = 200; //update the value
obj1["year"] = 2002;
// console.log(obj1);

// ----

const obj2 = new Object(); // constructor based syntax

obj2.name = "jay";
obj2.age = 20;
// console.log(obj2);

// ----

const powers = {
  fly: true,
  coordinate: Math.random() + 10,
};

const obj3 = Object.create(powers);
// console.log(obj3); //no property is visible
// console.log(obj3.fly);
// console.log(Object.getPrototypeOf(obj3));

// ----

const obj4 = Object.create({});

Object.defineProperty(obj4, "Book", {
  name: "Wings of fire",
  get: () => "*",
  //   enumerable: true,
});

// console.log(obj4);
// console.log(obj4.Book);
// console.log(Object.getPrototypeOf(obj4));
// for (k in obj4) {
//   console.log(k);
// } //turn enumerable true

// ----

const obj5 = {
  comics: "marvel",
  pen: "",
  printComic: function () {
    this.pen += "🖊️🗒️";
    console.log(this);
    return this;
  },
  printAComic: () => {
    console.log(this);
  },
};

console.log(obj5);
console.log(obj5.printComic());
// console.log(obj5.printAComic())

