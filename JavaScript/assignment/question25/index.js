function calculateBMI(weight, height) {
  const bmi = weight / Math.pow(height, 2);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

const ans = calculateBMI(80, 1.8);
console.log(ans);
