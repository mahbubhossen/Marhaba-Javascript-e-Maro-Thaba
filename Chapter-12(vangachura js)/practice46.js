//1.
const product = {
    name : 'Laptop',
    price : 50000,
    brand : 'Dell'
}
const brand = product.brand;
console.log(brand);

//2.
const item = {
    name : 'Mobile',
    price : 20000,
    phone : 'Samsung'
}
const {price,phone} = item;
console.log(price,phone)

//3.
const colors = ["red","blue", "green","yellow"];
const [first,second,third,fourth] = colors;
console.log(first,second);

//4.
const numbers = [10,20,30];
const [num1,num2,num3] = numbers;
const second2 = num2;
console.log(second2);

//5.
const digits = [2,4,6,8];
const [two,four,six,eight] = digits;
const two2 = two;
const eight2 = eight;
console.log(two2,eight2);

//6.
function multiply(a, b) {
    return [a*3,b*3];
}
const [prothom, ditiyo] = multiply(5, 10);
console.log(prothom, ditiyo);

//7.
const person = {
    name: "Rahim",
    city: "Dhaka"
}
const {name, city , phone2="N/A"} = person;
console.log(name, city, phone2);

//8.
const teacher = {
    name: "Maria",
    profession : "Teacher"
}
let {name2, profession2} = teacher;
name2 = "Alias";
profession2 = "Professor";
console.log(name2, profession2);

