//1.
const items = [30,45,20,60,10];
const itemPrice = items.map(item => item + 13);
console.log(itemPrice);

//2.
const names = ["Messi", "Maradona", "Pele", "Zidane", "Ronaldo"];
const bigName = names.filter(name => name.length > 5);
console.log(bigName);

//3.
const numbers2 = [10,15,20,25,30];
const bigFrom20 = numbers2.find(num => num>20);
console.log(bigFrom20); 

//4.
const hights = [65,70,68,72,68,73];
const bigHights = hights.filter(height => height > 69);
console.log(bigHights);

//5.
const numbers3 = [7,10,15,20,30];
const dividedBy3 = numbers3.map(num => num /3);
for(const num of dividedBy3){
    console.log(num);
}

//6.
const friends = ["Leonardo", "Brad Pitt", "Kate Winslet", "Audrey Hepburn", "Johnny Depp"];
const thirdLetter = friends.map(friend => friend[2]);
console.log(thirdLetter);

//7.
const names2 = ["Tom", "Harry", "Sam", "jack"];
const firstLetterH = names2.find(name => name[0] === 'H');
console.log(firstLetterH);

//8.
const numbers4 = [1,2,3,4,5];
const number = numbers4.forEach(num => console.log(num));

//9.
const names3 = ["cow", "goat", "sheep", "horse"];
const everyName = names3.forEach(name => console.log(name));

