console.log(Date()); // = new Date().toString()
console.log(typeof Date()); // type string
let now = new Date();
console.log(now); // type object

console.log(now.getDate());
console.log(now.getDay()); //0-sunday,1-monday etc...
console.log(now.getFullYear());
console.log(now.getMonth()); // it start from 0 0->jan 11->dec

console.log(now.getTime());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(now.toISOString());
console.log(now.toDateString());
console.log(now.toLocaleTimeString());

console.log(now.setFullYear(2021));
console.log(now.getFullYear()); // it will give 2021

/*
-> https://maggiepint.com/2017/04/09/fixing-javascript-date-getting-started/
-> https://tc39.es/proposal-temporal/docs/index.html
*/
