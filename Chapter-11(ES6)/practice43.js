//1.
function sum(a=0,b=0,c=0){
     const sum1 = a+b+c;
     return sum1;
}
console.log(sum());

//2.
function addMoney(a=50){
    return a;
}
console.log(addMoney());

function details(name="anonymous", income=0){
    console.log(name,income)
}
details()

//4.
function square(a=1){
    console.log(a*a);
}
square(5)

//5.
function product(name='Unknown product', price=1){
    return [name, price];
    
}
console.log(product())

//6.
function fvrtBook(books=["JS book"]){
    return books;
}
console.log(fvrtBook());

//7.
function defaultObject(object1={price:10,quantity:1}){
    return object1.price * object1.quantity;
}
console.log(defaultObject({price:200,quantity:20}));

//8.
function getDoubleArray(numbers = [5,10,15]){
    const newArray = [];
    for(const number of numbers){
        newArray.push(number*2);
    }
    return newArray;
}
console.log(getDoubleArray());

//9.
function getInterest(object2={principal:1000, rate:5}){
    const interest = object2.principal*object2.rate/100;
    return interest;
}
console.log(getInterest())

//10.
function getTax(object={salary:50000,tax:10}){
    const tax = (object.tax*object.salary)/100;
    const result = object.salary - tax;
    return result;
}
console.log(getTax());