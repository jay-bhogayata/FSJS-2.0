//  array prototype
// object prototype

let myHeros = ["thor", "spiderman"];
let dcHeros = ["batman", "black adam", "superman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.jay = function () {
  console.log(`jay is present in all objects`);
};

Array.prototype.heyJay = function () {
  console.log(`jay says hello`);
};

myHeros.jay();

//inheritance

const User = {
  name: "top name",
  email: "topuser@gmail.com",
};

const Teacher = {
  makeVideos: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TSAssistant = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

//get true length of string

let yourName = "john";

String.prototype.truelength = function () {
  console.log(`${this.name}`);
  console.log(`true length is: ${this.trim().length}`);
};

let myName = "jay   ";

myName.truelength();
yourName.truelength();
