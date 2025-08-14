//1.
const numbers = [50,12,25,8,15];
const sortedNumbers = numbers.sort((a,b) => a-b);
console.log(sortedNumbers);

//2.
const numbers2 = [13,2,45,9,6];
const sortedNumbers2 = numbers2.sort((a,b) => b-a);
console.log(sortedNumbers2);

//3.
const friends = [
    {name: 'Ali', age: 29},
    {name: 'Sara', age: 22},
    {name: 'Tariq', age: 35}
];
const sortedFriends = friends.sort((a,b) => a.age - b.age);
console.log(sortedFriends);

//4.
const names = ['nabil', 'zubayer', 'sarwar','delwar'];
const sortedNames = names.sort();
console.log(sortedNames);

