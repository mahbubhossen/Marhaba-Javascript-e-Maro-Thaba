//1.
const numbers = [10,20,40,110,80,120,160];
const graterThan100 = numbers.some(num => num>100);
console.log(graterThan100);

//2.
const numbers1 = [5,10,15,20,25];
const dividedBy5 = numbers1.every(num => num % 5 === 0);
console.log(dividedBy5);

//3.
const words = ["apple", "banana", "cherry", "date","Hello"];
const hasHello = words.some(word => word === "Hello");
console.log(hasHello);

//4.
const ages = [22, 25, 28, 20, 25];
const allAbove18 = ages.every(age => age > 18);
console.log(allAbove18);
