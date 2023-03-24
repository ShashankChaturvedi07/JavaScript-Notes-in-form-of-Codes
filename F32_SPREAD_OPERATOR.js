            // SPREAD OPERATOR

const array1 = [1,2,3];
const array2 = [4,5,6];

//const newArray = [...array1,array2];  // ... na lagane se array2 ke elements ek array ban ke hi new array me add ho jayenge means array2 spread hi nhi hoga
const newArray = [...array1, ...array2];
console.log(newArray);

const spreading =[..."SHASHANK"]; // ... ye dot lagane se output me teeno element alag alag show honge 
console.log(spreading);

           // SPREAD OPERATOR IN OBJECT
 
            // "NOTE :- " OBJECT IS NOT ITERABLE means obj ko spread operator me use karne ke liye hume big bracket[] ke place pe middle braces{} ka use karna hoga
        
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = {
    key3 : "value3",
    key4 : "value4"
}
const newObject ={...obj1,...obj2};
console.log(newObject);

// new kwy add karna hai newObject me to
//const newObject ={...obj1,...obj2,key7 : "value18"};

const newObject1 ={..."abcdefghijklmnopqrstuvwxyz"}; 
console.log(newObject1);
