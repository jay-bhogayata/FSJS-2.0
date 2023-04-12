const date = new Date();

const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();

const date1 = `${year}-${month}-${day} ${hour}:${minute}`;
const date2 = `${day}-${month}-${year} ${hour}:${minute}`;
const date3 = `${day}/${month}/${year} ${hour}:${minute}`;

console.log(date1);
console.log(date2);
console.log(date3);
