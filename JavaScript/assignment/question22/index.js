const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

const sortedAges = ages.sort((a, b) => a - b);
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

const medianAge =
  sortedAges.length % 2 === 0
    ? (sortedAges[sortedAges.length / 2] +
        sortedAges[sortedAges.length / 2 - 1]) /
      2
    : sortedAges[Math.floor(sortedAges.length / 2)];

const averageAge = ages.reduce((a, b) => a + b) / ages.length;

const range = maxAge - minAge;

const minMinusAverage = Math.abs(minAge - averageAge);
const maxMinusAverage = Math.abs(maxAge - averageAge);

console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);
console.log(`Median age: ${medianAge}`);
console.log(`Average age: ${averageAge}`);
console.log(`Range: ${range}`);
console.log(`Min - average: ${minMinusAverage}`);
console.log(`Max - average: ${maxMinusAverage}`);
