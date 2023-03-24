          // USEFUL STRING METHODS

// 1. trim() --> spaces ko remove karta hai
// 2.toUpperCase()
// 3.toLowerCase()
// 4.slice

// 1. trim()
let firstName = "    shashank   ";
firstName.trim();
console.log( firstName.trim());
console.log( firstName.trim().length);

// 2. toUpperCase
let secName = "chaturvedi";
secName.toUpperCase();
console.log(secName.toUpperCase());

// 3. toLowerCase
let lastName = "GOLU";
lastName.toLowerCase();
console.log(lastName.toLowerCase());

// 4. slice
let sliceName = "Chaubey";
sliceName.slice(0,4); // NOTE--> 4 include nhi hai 
console.log(sliceName.slice(0,4));
console.log(sliceName.slice(2,6));
console.log(sliceName.slice(1));
console.log(sliceName.slice(6));