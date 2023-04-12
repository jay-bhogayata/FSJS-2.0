const date = new Date();

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());

const seconds_since_1970 = Date.now() / 1000;
console.log(seconds_since_1970);
