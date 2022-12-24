// falsy values in js , all other values are treated as true value

// falsy values list
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(false));

// evaluated as true example:
console.log(Boolean({}));
console.log(Boolean("Jay"));
console.log(Boolean(Date()));
console.log(Boolean([1, 2, 3, 5, 6]));
function printNum(n) {
  console.log(n);
}
console.log(Boolean(printNum));
