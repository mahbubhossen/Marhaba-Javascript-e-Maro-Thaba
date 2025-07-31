//1.
function taxCount(amount){
    if(amount<=50000){
        return 10;
    }else if(50001<amount && amount<=100000){
        return 20;
    }else if(100001<amount && amount<=200000){
        return 30;
    }else if(amount>200000){
        return 40;
    }
}
console.log(taxCount(40000));
console.log(taxCount(70000));
console.log(taxCount(140000));
console.log(taxCount(400000));

//2.
function package(weight){
    if(weight<10) return 100;
    else if(weight<20) return 300;
    else if(weight < 50) return 1000;
    else return weight*100;
}
console.log(package(8));
console.log(package(18));
console.log(package(28));
console.log(package(88));

//3.
function result(number){
    if(number>80) return 'A';
    else if(number>70 && number<=79) return 'B';
    else if(number>60 && number<=69) return 'C';
    else if(number>50 && number<=59) return 'D';
    else return 'F';
}
console.log(result(90));
console.log(result(75));
console.log(result(66));
console.log(result(54));
console.log(result(40));