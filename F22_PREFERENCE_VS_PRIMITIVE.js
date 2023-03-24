                //primitive vs reference data type

// PRIMITIVE --> (ye jayada memory nhi lete hai so basically primitive ko store karne ke liye ek "stack" nam ka keyword hota hai jsime primtive data type ko store kiya jata hai example jo humne niche kiya hai so isme num1 aur num2 ke liye alag alag memory bnegi so agar hum 'num1' me change karenge to 'num2' me change nhi hoga kyuki uska memory alag bna hai.)

let num1=6;
let num2 =num1;
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

num1++;

console.log("after incrementing value of num1");
console.log("value of num1 is",num1);
console.log("value of num2 is",num2);

//REFERENCE --> ()
    //arrays

let array1=["item1","item2"];
let array2=array1;
console.log("array1",array1);
console.log("array2",array2); 

array1.push("item3");

console.log("after pushing item3 in array 1");
console.log("array1",array1);
console.log("array2",array2);
