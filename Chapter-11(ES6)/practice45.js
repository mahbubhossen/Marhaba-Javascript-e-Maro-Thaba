//1.
const indexOne = (numbers) => numbers[0];
console.log(indexOne([1,2,3,4,5]));

//2.
const multi = (a,b,c) => a*b*c;
console.log(multi(1,2,3));

//3.
const noParameter = () => "unknown";
console.log(noParameter());

//4.
const details = {
    name: 'Mahbub',
    money : 500
}
const returnDiv = (details) => details.money/5;
console.log(returnDiv(details)); 

//5.
const sum = (arrays) =>{
    const firstIndex = arrays[0];
    const lastIndex = arrays[arrays.length-1];
    return firstIndex+lastIndex;
} 
console.log(sum([1,2,3,4,5]));

//6.
const summ = (a=10,b=5) => {
    return a+b;
}
console.log(summ());