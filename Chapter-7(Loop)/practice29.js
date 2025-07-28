//1.
for(let i=1; i<=30; i++){
    if(i>15){
        break;
    }
    console.log(i);
}

//2.
for(let i=1; i<=40; i++){
    if(i%7==0) continue;
    console.log(i);
}

//3.
for(let i=1; i<=15; i++){
    if(i==9) continue;
    console.log(i);
}

//4.
for(let i=1; i<=20; i++){
    if(i==12) continue;
    console.log(i)
}

//5.
for(let i=1; i<=25; i++){
    if(i%3==0) continue;
    console.log(i);
}

//6.
for(let i=91; i<=120; i++){
    console.log(i)
    if(i%10==0) break;
}