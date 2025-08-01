//1.
function noDuplicate(numbers){
    const unique = [];
    for(const number of numbers){
        if(unique.includes(number)===false){
            unique.push(number);
        }
    }
    return unique;
}
console.log(noDuplicate([1,5,61,5,87,7,5,81,61]));