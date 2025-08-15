//1.
const friends = "Raju,Rana,Hasan,Kabir,Mahi";
const friendsArray = friends.split(",");
console.log(friendsArray);

//2.
const newFriends = [ 'Raju', 'Rana', 'Hasan', 'Kabir', 'Mahi' ];
const newFriendsString = newFriends.join(",");
console.log(newFriendsString);

//3.
const keyword = "function if else while";
const keywordArray = keyword.split(" ");
console.log(keywordArray);

//4.
const languages = ["JavaScript", "Python", "Java"];
const languagesString = languages.join(";");
console.log(languagesString);

//5.
const loops = "for,while,for-in,for-of,do-while,";
const loopsArray = loops.split(",");
console.log(loopsArray);

//6.
const newString = " console log debug ";
const noSpace = newString.trim();
console.log(noSpace);

//7.
const str1 = "push";
const str2 = "pop";
const str3 = "shift";
const str4 = "unshift";

const str5 = str1.concat(" ", str2, " ", str3, " ", str4);
console.log(str5)

//8.
const newString2 = "Hello JavaScript Developers";
const separate = newString2.slice(6,16);
console.log(separate);

//9.
const anotherString = "Code more learn more";
const separateLearn = anotherString.substring(10, 15);
console.log(separateLearn);