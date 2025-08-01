//1.
function evenAverage(numbers){
    const even = [];
    let sum = 0;
    for(const number of numbers){
        if(number%2==0){
            even.push(number);
        }
    }
    if(even.length===0) return 0;
    for(const eve of even ){
        sum = sum + eve;
    }
    const avg = sum / even.length;
    return avg;
}
console.log(evenAverage([1,2,3,4,5,6]));
console.log(evenAverage([2,3,4,5,5,10]));
console.log(evenAverage([1,3,5,7,9]));


//2.
function getNewArray(array){
    const newArray = [];
    for(const arr of array){
        if(arr % 2 ===1){
            newArray.push(arr*2);
        }
    }
    return newArray;
}
console.log(getNewArray([3,5,8,1,4]));

//3.
function getOdd(numbers){
    for(const number of numbers){
        if(number % 2 === 1) {
            return "Odd numbers found";
        }
    }
    return "No odd numbers found";
}
console.log(getOdd([2,4,6,]));

//4.
function getAverage(numbers){
    const odds = [];
    let sum = 0;
    for(const number of numbers ){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    for(const odd of odds){
        sum = sum + odd;
    }
    const avg = sum / odds.length;
    return avg.toFixed(2);
}
console.log(getAverage([3,5,6,7,8,1,3]));

//5.
function newOddArray(numbers){
    const odds = [];
    for(const number of numbers){
        if(number%2===1){
            odds.push(number-1);
        }
    }
    return odds;
}
console.log(newOddArray([3,5,7,8,10]));



