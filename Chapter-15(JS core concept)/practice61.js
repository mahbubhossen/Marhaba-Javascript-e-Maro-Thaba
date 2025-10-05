//1.
const value = 'false';
if(!!value){
    console.log('truthy');
}else{
    console.log('falsy');
}

//2.
const obj = {};
if(obj){
    console.log('truthy');
}else{
    console.log('falsy');
}

//3.
const arr = [];
if(arr){
    console.log('truthy');
}else{
    console.log('falsy');
}

//4.
const array = [];
console.log(!!array);