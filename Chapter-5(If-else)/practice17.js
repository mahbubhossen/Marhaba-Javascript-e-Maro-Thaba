//1.
const price = 4500;
if(price>6000){
    const discount = (price / 100) * 10;
    const pay = price - discount;
    console.log(pay);
}else if(price > 3000){
    const discount = (price / 100) * 5;
    const pay = price - discount;
    console.log(pay);
}else{
    console.log(price)
}


//2.
const age =40;
const bill = 1000;
if(age<12){
    const discount = (bill / 100) * 100;
    const payBill = bill - discount;
    console.log(payBill);
}else if(age > 60){
    const discount = (bill / 100) * 50;
    const payBill = bill - discount;
    console.log(payBill);
}else{
    console.log(bill);
}


//3.
const bankBalance = 6000;
if(bankBalance<1000){
    console.log("Deposit kor");
}else if(bankBalance<5000){
    console.log("Bindas Lyf Enjoy Kor");
}else if(bankBalance>5000){
    console.log("Tui dhoni , amk biye kor");
}


//4.
const mark = 90;
if(mark<50){
    console.log("Fail");
}else if(mark<80){
    console.log("Pass")
}else{
    console.log("A+")
}

//5.
const pages = 600;
if(pages<100){
    console.log("Small Book");
}else if(pages<=500){
    console.log("Mid-size-book")
}else{
    console.log("heart-attack-size-book");
}


//6.
const temperature = 18;
if(temperature<0){
    console.log("Ice");
}else if(temperature<=20){
    console.log("Cool Cool");
}else{
    console.log("Hot Hot");
}


//7.
const level = 8;
if(level<10){
    console.log("novice");
}else if(level<=50){
    console.log("Expert");
}else{
    console.log("Pro Gamer");
}