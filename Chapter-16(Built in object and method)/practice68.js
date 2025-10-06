//1
const sentence = "I bought an orange";
const newSentence = sentence.replace(/orange/g, "grape");
console.log(newSentence);

//2.
const sentence2 = "I like to have apple and banana";
const pattern = /ana/;
console.log(pattern.test(sentence2));

//3.
const sentence3 = "I am eating apple . apple is good . apple helps me a lot";
const newSentence3 = sentence3.replace(/apple/g, "JavaScript");
console.log(newSentence3);