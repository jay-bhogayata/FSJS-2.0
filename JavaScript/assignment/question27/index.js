const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const primeNumbers = [];

for (let i = 0; i <= 100; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}

console.log(primeNumbers);
