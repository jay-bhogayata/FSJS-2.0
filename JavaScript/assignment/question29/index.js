// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const fs = require("fs");

const filename = process.argv[2];

const extension = filename.split(".").pop();
// node index.js main.c => return c
console.log(extension);
