//1.
const numbers = [1,2,2,3,4,4,5];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);

//2.
const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(30);
console.log(mySet);

//3.
const mySet2 = new Set([10,20,30]);
mySet2.delete(10);
console.log(mySet2);

//4.
const numbers2 = [1,2,3,4,2,1,5,5];
const uniqueNumbers2 = [...new Set(numbers2)];
console.log(uniqueNumbers2);