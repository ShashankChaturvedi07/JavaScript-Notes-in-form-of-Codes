               //how to iterate objects

const person = {
    name : "golu",
    age : 19,
    "person hobbies" : ["cricket","video games"]
}  
console.log(person.age) ;

                 //1 st method for in loop

for(let key in person){
    //console.log(person.key); 
      // undefined de dega isislye bracket notation ka use karenge hum

    //console.log(person[key]);  //bracket notation 
    //agar hume key value pair dono sath me print karwane hai to we use this method
    console.log(key,":",person[key]);
}       

                //2 nd method Object.keys

console.log(Object.keys(person)); //sbhi key print ho jayengi

//ye check karne ke liye hai ki ye array hai ya nhi 
const val =Array.isArray(Object.keys(person)); 
console.log(val);  