//1.
function mainFunction (callback){
    // console.log("This is the main function");
    callback();
}

function callbackFunction(){
    // console.log("This is the callback function");
}
mainFunction(callbackFunction);


//2.
function showObjectKeys (obj , callback){
    // console.log("this is the main function");
    callback(obj);
}

function displayKeys(obj){
    // console.log("object keys are : ");
    for(let key in obj){
        // console.log(key);
    }
}

const person = {
    name : "Mahbub",
    age : 22 ,
    city : "Dhaka"
}

showObjectKeys(person , displayKeys);


//3.
function numberProcessor(number , callback){
    // console.log("this is the main function");
    const result = number / 5;
    callback(result);
}

function displayResult (result){
    // console.log("result is : ", result);
}

numberProcessor(50, displayResult);



//4.
function greeting (name){
    console.log("this is the main function");
    greetingHandler(name);
}
function greetingHandler(name){
    console.log("Hello , "  + name + " welcome to the JS world");
}
greeting("Mahbub");