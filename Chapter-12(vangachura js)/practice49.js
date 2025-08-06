//1.
/*
JavaScript এ export ও import এর পার্থক্যঃ

export দিয়ে একটা ফাইল থেকে ফাংশন, ভ্যারিয়েবল বা ক্লাস বাইরে পাঠানো হয়।
import দিয়ে অন্য ফাইলে সেই export করা জিনিস গুলো আনা হয়।
এইভাবে একাধিক ফাইলে কোড ভাগ করে রাখা যায়।
উদাহরণ:
*/
// math.js
export const add = (a, b) => a + b;
// main.js
import { add } from './math.js';


//2.
/*Default export মানে হলো এক ফাইলে একটাই main জিনিস export করা।
এতে import করার সময় নাম ইচ্ছামতো রাখা যায়।
সুবিধা হলো সহজে rename করে ব্যবহার করা যায় এবং কোড পরিষ্কার থাকে।
*/

// greet.js
export default function greet() {
  console.log("Hello!");
}
// main.js
import myGreet from './greet.js';


//3.
/*as keyword দিয়ে import বা export করার সময় নাম বদলানো যায়।
এটা মূলত conflict এড়াতে বা নিজে বুঝতে সুবিধার জন্য ব্যবহার হয়।
*/

// utils.js
export const add = (a, b) => a + b;

// main.js
import { add as sum } from './utils.js';

sum(2, 3); 


//4.
/*Named export এ এক ফাইলে একাধিক জিনিস export করা যায়, আর import করার সময় নাম মেলাতে হয়।
Default export এ একটাই main জিনিস export হয়, আর import করার সময় যেকোনো নাম দেওয়া যায়।
Named export করতে { } ব্যবহার হয়, default export এ লাগে না।
*/

// named
export const add = () => {};  
import { add } from './file.js';

// default
export default add;  
import myAdd from './file.js';


//5.
/*
না, একটি ফাইলে একাধিক default export সম্ভব নয়।
একটা ফাইলে শুধু একটাই জিনিস default হিসেবে export করা যায়।

যদি একাধিক জিনিস export করতে চাও, তাহলে named export ব্যবহার করতে হবে।
*/

