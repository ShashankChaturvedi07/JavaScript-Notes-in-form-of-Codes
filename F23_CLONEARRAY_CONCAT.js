                    //how to clone array

let array1 = ["item1","item2","item3"];
     //METHOD-1 (THROUGH SLICING)

//let array2 = array1.slice(0);     // isse hum array dono array ko alag alag show kar skte hai so agar hum array1 me change karenge to array2 me wo change nhi hoga ~OR~ dusra method hai "SPREAD OPERATOR KA USE KARKE"

     //METHOD-2 (THROUGH SPREAD OPERATOR)

let array2=[...array1];      //(... in 3 dot ko hi spread operator bolte hai)

array1.push("item4"); //humne array1 me naya element add kiya hai but array2 me isse koi change nhi hoga

// console.log(array1===array2);  //isse pata chal rha hai ki dono array alag alag hai (AGAR VALUE FALSE AYI MEANS YE BATA RHA KI DONO ARRAY ALAG ALAG HAI)
console.log(array1);
console.log(array2);



                       //EXAMPLE - 1
                       
//Q-- ek aisa array bnao jiske dono array different ho but jo array1 ke element hai wo array2 me bhi ho aur array2 me kuch array element bhi add karo

let array3 =["item1","item2"];
// let array4 =array3.slice(0).concat(["item5","item6"]); 
let array4 = array3.concat(["a",'b'])  //~~ concat ~~ ka matlb hai array me new items add karana

console.log(array3===array4);
console.log(array3);
console.log(array4);