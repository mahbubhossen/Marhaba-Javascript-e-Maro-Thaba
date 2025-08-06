//1.
const technologies = ["Condition", "array", "loop"];
const newTechnologies = ["variable",...technologies];
console.log(newTechnologies);

//2.
const fruits = ["Apple","Banana", "Mango"];
const myFruits = [...fruits, "papaya", "orange"];
console.log(myFruits);

//3.
const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const database = ["MongoDb"];
const fullStack = [...frontEnd, ...backEnd, ...database];
console.log(fullStack);

//4.
const website = {
    name : "MySite",
    type : "e-commerce",
    status : "active"
}
const webSiteDetails = {...website ,theme : "dark" };
console.log(webSiteDetails);

//5.
const young = {name: "Arif", age : 30, country : "B Baria"};
let copyYoung= {...young};
const new2 = {country , ...copyYoung} = young;
console.log(copyYoung);

//6.
const car = {make : "Toyota", model : "Corolla", year : 2020};
const copyCar = {...car};
copyCar.year = 2032;
console.log(copyCar);