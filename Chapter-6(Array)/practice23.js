//1.
const fruits = ['apel','kola','aam','lichu'];
if(fruits.includes('aam')){
    console.log("aam ache");
}else{
    console.log("aam nei, gache uth");
};

//2.
const person = ['babul','alif','choton'];
console.log(person.indexOf('babul'));

//3.
const friends = ['rimon','rifat','rajib'];
console.log(friends.indexOf('rifat'));

//4.
const city = ['Dhaka', 'Chittagong', 'Sylhet'];
city.push('rajshahi');
console.log(city.includes("Rajshahi"));

//5.
const array = ['dighi', 'megh','bristi','borsha'];
if(array.includes('bristi')){
    console.log("I need umbrella");
}else{
    console.log("No rain no pain");
};


//6.
const sports = ['football', 'cricket', 'voliball'];
console.log(sports.includes('badminton'));