//1.
const numbers = [5, 10, 15, 20, 25];
const sum = numbers.reduce((sum, num) => sum + num, 0);
console.log(sum);

//2.
const products = [
    {name : 'shampoo', price : 100},
    {name : 'soap', price: 50},
    {name : 'toothpaste ', price: 75}
]
const totalPrice = products.reduce((total,product) => total + product.price,0);
console.log(totalPrice);

//3.
const productList = [
    {name : 'Pen', price : 5},
    {name : 'Book', price: 50},
    {name : 'Bag', price: 100}
]
const totalCost = productList.reduce((total,product) => total + product.price, 0);
console.log(totalCost);

//4.
const numbers2 = [1, 2, 3, 4, 5];
const productOfNumbers = numbers2.reduce((product,num) => product*num, 1);
console.log(productOfNumbers);

//5.
const items = [10, 20, 30, 40, 50];
const maxItem = items.reduce((max, item) => item > max ? item : max, items[0]);
console.log(maxItem);

//6.
const numbers3 = [100,200,300,400];
const totals = numbers3.reduce((total, num) => total + num, 50); 
console.log(totals)