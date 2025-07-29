//1.
function grettarThen(number){
    if(number>10) return true;
    return false;
}
console.log(grettarThen(20))

//2.
function isDevideby13 (number){
    if(number % 13 == 0) return true;
    return false;
}
console.log(isDevideby13(26));

//3.
function bill(rice,curry,drinks){
    const totalBill = rice + curry + drinks;
    return totalBill;
}
console.log(bill(30,80,20));

//4.
function validAge(age){
    if(age>18) return "Eligible for voting";
    return "Not eligible";
}
console.log((validAge(10)));

//5.
function length(num){
    const length = num.length;
    return length;
}
console.log(length("amarnammahbub"));

//6.
function avg(a,b,c){
    return avg = (a+b+c)/3;  
}
console.log(avg(5,5,5));

//7.
function check(num){
    if(num<0){
        const result = num * -1;
        return result;
    }
}
console.log(check(-5));