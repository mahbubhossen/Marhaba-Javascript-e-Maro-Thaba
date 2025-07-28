//1.
const book = {
    name : "marhaba javascript e maro thaba",
    author : 'Jhankar Mahbub',
    price : 700
}
console.log(Object.keys(book));
console.log(Object.values(book));

//2.
const article = {
    title : 'Learning JS',
    category : "Programming"
}
console.log(Object.keys(article).includes('author'));

//3.
const laptop = {
    brand : 'Dell',
    model : 'Inspiron',
    price : 45000
}
for(key in laptop){
    const value = laptop[key];
    console.log(key,value);
}

//4.
const phone = {
    brand : 'Samsung',
    model : 'Galaxy S21',
    price : 85000
}
const keys = Object.keys(phone);
for(const key of keys){
    console.log(key,phone[key]);
}

//5.
const bike = {
    brand : 'Hero',
    price : 120000,
    model : 'Splendor'
}
console.log(Object.values(bike));


//6.
const books = {
    book1 : "Harry Potter",
    book2 : "Tha Hobbit",
    book3 : "Game of Thrones"
}
const values = Object.values(books);
for(const value of values){
    console.log(value);
}

//7.
const numbers = {
    a : 10,
    b : 20, 
    c : 30,
    d : 40
}
let sum = 0;
const values2 = Object.values(numbers);
for(const value of values2  ){
    sum = sum + value;
}
console.log(sum)

//8.
const player = {
    name : 'Messi',
    team : 'Argentina',
    goals : 91
}
console.log(Object.values(player));

//9.
const building = {
    floors : 10,
    address : {
        street : 'Main',
        city : 'Dhaka'
    },
    type : 'Commercial'
}
for(const key in building){
    const value = building[key];
    console.log(key,value)
}