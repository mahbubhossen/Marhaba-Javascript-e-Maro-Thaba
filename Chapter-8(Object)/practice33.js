//1.
const headphone = {
    brand : "Sony",
    price : 3000,
    color : "red"
}
Object.freeze(headphone);
headphone.location = "dhaka";
console.log(headphone);

//2.
const player = {
    name : 'Messi',
    goals : 800,
    club : 'Inter Miami'
};
Object.freeze(player);
player.age = 35;
console.log(player)

//3.
const book = {
    title : 'Harry Potter',
    author : "JK Rowling",
    pages : 500
}
Object.seal(book);
book.author = "Mahbub";
console.log(book);

//4.
const gadget = {
    name : 'iPhone',
    price : 120000,
    color : 'Black'
}
delete gadget.price;
console.log(gadget)

//5.
const animal = {
    name : 'Tiger' ,
    location : 'Sundarban',
}
Object.freeze(animal);
animal.location = "Dhaka";
console.log(animal);


//6.
const food = {
    name : 'Pizza',
    price : 500,
    size : 'Large'
}
Object.seal(food);
food.location = 'Dhaka';
food.price = 600;
console.log(food)