//1.
for(let i=20; i<=50; i++){
    if(i%7==0){
        console.log(i);
    }
}

//2.
for(let i=40; i<=80; i++){
    if(i%5==0 && i%7==0){
        console.log(i);
    }
}

//3.
let sum = 0;
for(let i=1; i<=50; i++){
    if(i%13==0){
        sum = sum + i;
    }
}
console.log(sum);

//4.
for(let i=1; i<=50; i=i+4){
    console.log(i)
}

//5.
for(let i=0; i<=100; i++){
    if(i%9==0 && i%6==0){
        console.log(i);
    }
}

//6.
let sum2 = 0;
for(let i=1; i<=50; i++){
    if(i%3==0 && i%4==0){
        sum2 = sum2 + i;
    }
}
console.log(sum2);