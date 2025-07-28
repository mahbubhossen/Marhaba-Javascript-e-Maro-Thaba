//1.
const player = {
    name : 'Shakib Al Hasan',
    age : 36,
    sports : 'Cricket',
    team : 'Bangladesh',
}
console.log(player.team);

//2.
const laptop = {
    brand : 'lenovo',
    price : 30000,
    hardDisc : 500,
    ram : 4,
    screenSize : 14
}
console.log(laptop.screenSize);

//3.
const favPlace = {
    name : "Cox's Bazar",
    distance : "400km",
    popularity : "high"
}
console.log(favPlace['popularity']);


//4.
const phone = {
    brand : 'nokia',
    color : 'black',
    price : 5000
}
console.log(phone['price']);

//5.
const library = {
    name : 'public library ',
    location : 'Dhaka',
    books : 5000
}
console.log(library.location);

//6.
const movie = {
    title : 'Inception',
    director : 'Nolan',
    rating : 9
}
console.log(movie['rating']);

//7.
const college = {
    name : 'ndc',
    established : 1949,
    groups : ['science','Arts','Commerce']
}
console.log(college.groups[1])

//8.
const family = {
    father : {
        name : 'Nuruddin',
        age : 50,
        profession : 'Police'
    },
    mother : {
        name : 'Yeasmin',
        age : 45,
        profession: 'HouseWife'
    }
}
const motherAge = family.mother.age;
const fatherAge = family.father.age;
console.log(motherAge);
console.log(fatherAge);
console.log(motherAge + fatherAge);
