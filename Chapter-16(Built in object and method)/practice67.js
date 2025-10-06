//1.
console.log(new Date());

//2.
const date = new Date(2035 , 6 , 15 , 14 , 45 , 30);
console.log(date);

//3.
console.log(new Date().getFullYear());


//4.
const date2 = new Date();
date2.setFullYear(2040);
console.log(date2);


//5.
const date3 = new Date('2029-02-16');
const day = date3.getDay();
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday',]
console.log(days);