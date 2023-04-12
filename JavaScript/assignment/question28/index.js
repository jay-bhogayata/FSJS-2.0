for (let i = 1; i <= 3; i++) {
  console.log("*".repeat(i));
}

console.log("----------------------");

for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += "*";
  }
  console.log(row);
}

console.log("----------------------");

let n = 3;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
