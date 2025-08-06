//1.
const product = {
    name : 'Laptop',
    price : 50000,
    brand : 'Dell'
};
const {name , ...details} = product;
console.log(name,details);

//2.
const project = {
    id : 101,
    title : 'Web App',
    budget : 3000,
    client : "Tech Corp"
};
const {title , ...rest} = project;
console.log(title, rest);

//3.
const programmer = {
    name : "Sophia",
    language : "JavaScript",
    experience : 5,
    specialty : "Frontend",
    tools : "React"
};
const {language,specialty, ...otherDetails} = programmer;
console.log(language, specialty, otherDetails);

//4.
const numbers = [10,20,3, 30,300,3000];
const [first, second, ...restNumbers] = numbers;
console.log(first, second, restNumbers);

//5.
 
function sum (par1, par2, ...rest){
    let sum = 0;
    for(const num of rest){
        sum += num;
    }
    return sum;
}
console.log(sum(1,2,3,4,5,6));

//6.
function calculateAverage(...avg){
    let total = 0;
    for(const num of avg){
        total +=num;
    }
    return total/avg.length;
}
console.log(calculateAverage(10,20,30,40,50));