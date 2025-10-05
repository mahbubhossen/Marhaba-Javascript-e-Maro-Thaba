//1.
if(true == 1){
    console.log("same");
}else{
    console.log("different");
}

//2.
const obj1 = {};
const obj2 = {};
if(obj1===obj2){
    console.log("true");
}else{
    console.log("false");
}


//3.
const arr1 = [1,2,3];
const arr2 = arr1;
if(arr1 === arr2){
    console.log("true");
}else{
    console.log("false");
}


//4.
function checkEqual (num , bool){
    if(num == bool){
        console.log("true");
    }else{
        console.log("false");
    }
}
checkEqual(1,true);
checkEqual(0,false);
checkEqual(2,true);
checkEqual(0,true);


//5.
if(""==false){
    console.log("same");
}else{
    console.log("not same");
}

//6.
console.log(null === undefined);

//7.
console.log(1 == '1'); // first convert string to number then compare . 