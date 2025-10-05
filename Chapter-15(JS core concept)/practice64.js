//1.
const taxRate = 15;
function calculateTax (income){
    const taxAmount = (income * taxRate) / 100;
    return taxAmount;
}
// console.log(calculateTax(50000));


//2.
function secrectFunciton(){
    // let insideSecret = "internal secret hiding place";
    // console.log("inside funtion : ", insideSecret);
}
secrectFunciton();

// console.log("outside function: ", insideSecret);


//3.
if(true){
    let temperature = 25;
}
// console.log(temperature);


//4.
function schoolDetails(){
    let schoolName = "ABC School";
    function displayFunctionName(){
        // console.log(schoolName);
    }
    displayFunctionName();
}
schoolDetails();

