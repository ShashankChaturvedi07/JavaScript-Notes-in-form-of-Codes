        //array destructuring

const myarray =["value1","value2"];
// let myvar1 =myarray[0];     
// let myvar2 =myarray[1];  
// console.log("value of myvar1",myvar1);
// console.log("value of myvar2",myvar2);


        // HUM JO ALAG ALAG INDEXING KARKE EK EK VALUE PRINT KAR RHE THE AB HUMNE USKO EK HI LINE ME KAR DIYA JISE HUM DESTRUCTURING BHI BOLTE HAI

let [myvar1, myvar2]= myarray;

console.log("value of myvar1",myvar1);
console.log("value of myvar2",myvar2);



                 // Another example

const myfav =["js","c","python","c++","java"];

// let [top1,top2,top3,top4,top5] = myfav;

// console.log(`My fav programming language is ${top1}`);
// console.log("My fav programming language is" +" "+ top4);
// console.log("My fav programming language is", top2);
//  YE 3 TYPES HAI HUM PRINT KARWANE KE HUMARE PAS ISME SE KOI  EK USE KRSKTE HAI

           //agar hume sirf first and last wala item chahiye to hume baki items ko skip karna hoga so hum , KA USE KENEGE EX -- LET [top1,,,,top4] isse baki beech wale sbhi skip ho hojayenege

 let [top1,,,,top4]= myfav;
 console.log(top1 ,top4);
 