               // ARRAYS

// ARRAY IS MUTABLE(CHANGE KAR SKTE HAI)
// STRINGS ARE IMMUTABLE

let fruit = ["apple","mango","grapes","oranges"];
let num =[1,2,34,3];
console.log(fruit);
console.log(fruit[2]);
console.log(num[3]);

// array is mutable (means change kar skte hai isme but strings me aisa nhi hota usme hum change nhi kar skte)

fruit[3] ="banana";
console.log(fruit);
console.log(typeof fruit); // array is a object but javascript me bahut sare object hote hai "" so hume kaise pata chlega ki ye object array hai ki nhi""

console.log(Array.isArray(fruit));  // ye check krne ke liye ki ye array hi hai
