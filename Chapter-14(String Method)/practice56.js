//1.
const email = 'User@example.com';
console.log(email.toLowerCase());

//2.
const greeting = 'hELlo WoRLd';
console.log(greeting.toLowerCase());
console.log(greeting.toUpperCase());

//3.
const language = 'JavaScript';
const hasScript = language.toLowerCase().includes('script');
console.log(hasScript);

//4.
const text = 'NodeJs';
if(text[0] === text[0].toUpperCase()){
    console.log("first letter is uppercase");
}else{
    console.log("first letter is lowercase");
}