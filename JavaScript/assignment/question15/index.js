const scores = 85;

if (scores >= 80 && scores <= 100) {
  console.log("A");
} else if (scores >= 70 && scores <= 89) {
  console.log("B");
} else if (scores >= 60 && scores <= 69) {
  console.log("C");
} else if (scores >= 50 && scores <= 59) {
  console.log("D");
} else if (scores >= 0 && scores <= 49) {
  console.log("F");
} else {
  console.log("Invalid score");
}
