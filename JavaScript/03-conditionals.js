// simple if-else
let age = 19;
if (age > 18) {
  console.log("you can vote.");
} else {
  console.log("You can not vote.");
}

//else if
let time = new Date().getHours();
let uname = "jay";
if (time >= 5 && time < 12) {
  console.log(`Good Morning ${uname}`);
} else if (time >= 12 && time < 17) {
  console.log(`Good Afternoon ${uname}`);
} else if (time >= 17 && time < 21) {
  console.log(`Good Evening ${uname}`);
} else {
  console.log(`Good Night ${uname}`);
}

// Nested if-else
let num = 7;
if (num < 10) {
  if (num < 5) {
    console.log("Number is less then 5");
  } else {
    console.log("Number is greater then 5 but less then 10");
  }
}

// switch
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "subadmin":
    console.log("only create course and test can't publish");
    break;
  case "student":
    console.log("can watch course and take test");
    break;
  default:
    console.log("You are visitor you have limited access");
}

// -> fallthrough statement (without break)

// ternary operators
// condition ? if true : if false
let number = 12;

number % 2 == 0 ? console.log("Number is even") : console.log("Number is odd");
