                          // UNDEFINED

let name;
console.log(typeof name);

//NOTE--> CONSTANT ke sath aise nhi kar skte hume define karna hoga nhi to error throw karega


      //-----> console ke andar ek se jayada chz hum kar skte hai

let first = "GoluChaubey";
console.log(typeof first, first,first.slice(3,7));


                        //NULL
let myvar= null;
console.log(typeof myvar);    //iske output me "object" show hoga jo ki ek error hai js me jisse change nhi kiya ja rha because iski wajah se bahut sare likhe hue codes me problem ajayegi so isko aise hi chor diya gaya hai



       // BIGINT (ISKA BAHUT KAM USE KIYA JATA HAI)

let mynum = 1234;
// console.log(mynum);
console.log(Number.MAX_SAFE_INTEGER);  
 // IS LINE SE HUME PATA CHLEGA HUM NORMAL VARIABLE ME KITNA BDA INTEGER STORE KAR SKTE HAI  "AGAR APKO LAGATA HAI KI APKA NO. ISSE BHI JYADA BADA HOGA TAB APP BIGINT KA USE KARIYE"

//BIGINT KA USE(bigint ke last me n ajayega automatic)
let mynum1=BigInt(1234567890987654321234);
let mynum2= 1234n; // --> bigint ko define karne ka ye bhi tarika hai
console.log(mynum1);
