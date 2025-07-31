//1.
function evenOrOdd(numbers){
    const len = numbers.length;
    if(len%2 === 0) return true;
    return false;
}
const isEven = evenOrOdd([10,32,12,4,56,32]);
console.log(isEven);

//2.
function firstLetter(names){
    return names.charAt(0); 
}
console.log(firstLetter("Raju"));

//3.
function checked(number){
    if(number>10){
        const result = number / 10;
        return result;
    }else{
        const result = number * 10;
        return result;
    }
    
}
console.log(checked(9));

//4.
function getSumOfArray(arr){
    const sum = arr[0] + arr[1];
    return sum;
}
console.log(getSumOfArray([10,20,30,40]));

//5.
function getn(n){
    if(n>0) return n*2;
    else if(n<0) return n*3; 
}
console.log(getn(20))

//6.
function checkedLength(first,second){
    if(first.length > second.length) return true;
    return false;
}
console.log(checkedLength("Mah","Bappy"));

//7.
function getmultiply(a,b){
    if(a*b > 100) return a*b/2;
    return a*b;
}
console.log(getmultiply(10,20));