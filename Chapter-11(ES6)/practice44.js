//1.
const a=100;
const b = 20;
const sub = `The difference between ${a} and ${b} is ${a-b}`;
console.log(sub);

//2.
const employee = {
    name: 'karim',
    age : 35,
    salary : 40000
}
const result = `Name: ${employee.name} Age: ${employee.age} Salary: ${employee.salary}`;
console.log(result);

//3.
const fruits = ['aam','jaaam','kola','lichu','kathal'];
const fvrtFruit = `Favorite Fruit ${fruits[3]}`;
console.log(fvrtFruit);

//4.
const A =50;
const B = 10;
const result2 = `The division of ${A} and ${B} is ${A/B}`
console.log(result2);

//5.
const person = {
    firstName : 'Amit',
    lastName : 'Kumar'
};
const fullName = `FullName : ${person.firstName} ${person.lastName}`;
console.log(fullName);

//6.
const animals =['Cat','Dog','Elephant'];
const allAnimals = `My favorite animals are ${animals.join(", ")}`
console.log(allAnimals)

//7.
const student ={
    name : 'Mahbub',
    age : 22,
    results : [90,89,95]
}
let sum = 0;
for(const number of student.results){
    sum = sum + number;
}
const avgMark = ` Name : ${student.name}  AvgMark: ${(sum/3).toFixed(2)}`
console.log(avgMark)