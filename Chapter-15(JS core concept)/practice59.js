//1.
let num = 15; 
let copy = num;
copy = 25;
console.log(num);
console.log(copy);


//2.
let arr = [1,2,3];
let copyArr = arr;
copyArr.push(88);
console.log(arr,copyArr);

//3.
let language = {
    name : "JS",
    age : 30
}
let newVersion = language;
newVersion.location = "Browser";
console.log(language);
console.log(newVersion);