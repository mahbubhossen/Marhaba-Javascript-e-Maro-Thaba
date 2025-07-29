//1.
function oddNumberSum(numbers){
    let sum=0;
    for(const number of numbers){
        if(number%2===1){
            sum = sum + number;
        }
    }
    return sum;
}
console.log(oddNumberSum([5,15,8,7]));

//2.
function littleArray(arr){
    if(arr[0]<arr[1]) return arr[0];
    return arr[1];
}
console.log(littleArray([20,45,78]));

//3.
function showAge(age){
    if(age<18) return 18;
    else if(age>45) return 45;
    return age;
}
console.log(showAge(20));

//4.
function dividedByFour(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number%4 === 0){
            sum = sum + number;
        }
    }
    return sum;
}
console.log(dividedByFour([2,4,5,7,8,32,45]));

//5.
function getDevide(num){
    if(num<20) return num*2;
    return num/20;
}
console.log(getDevide(22));

//6.
function sumOfNegative(numbers){
    let sum =0;
    for(const number of numbers){
        if(number<0){
            sum = sum + number;
        }
    }
    return sum;
}
console.log(sumOfNegative([10,-10,20,-20]));


//7.
function sumOfDividedByThree(numbers){
    let result = 1;
    for(const number of numbers){
        if(number%3 === 0){
            result = result * number;
        }
    }
    return result;
}
console.log(sumOfDividedByThree([12,6,10,40,15]));