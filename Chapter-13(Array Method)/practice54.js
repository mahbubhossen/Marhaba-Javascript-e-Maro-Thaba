//1.
const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
const slicedArray = fruits.slice(1,3);
console.log(slicedArray);

//2.
const cars = ['Tesla', 'BMW', 'Toyota', 'Ford'];
const slicedCars = cars.slice(1,3);
console.log(slicedCars);

//3.
const movieList = ['Inception', 'Titanic', 'Joker', 'Avatar', 'Interstellar'];
const splicedMovies = movieList.splice(2,2,'Batman', 'Superman');
console.log(splicedMovies);
console.log(movieList);

//4.
const players = ['Messi', 'Ronaldo', 'Neymar', 'Mbappe'];
const splicedPlayers = players.splice(2,1,'Halland');
console.log(splicedPlayers);
console.log(players);