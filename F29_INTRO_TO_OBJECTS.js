      //OBJECTS

// arrays are good but not sufficient for real world data 
// objects store key value pairs
// objects don't have index

        //HOW TO CREATE OBJECTS

//const person ={name:"golu",age:19};
                  //OR
const person = {
    name : "golu",
    age : 19,
    hobbies : ["cricket","video games"]
}                  
console.log(person);        
console.log(typeof person);

            //how to accessdata from objects

console.log(person.name);
console.log(person.age);
console.log(person.hobbies);


      //how to add key value pairs

person.favSubj = "coding";
person.email = "shashankknchaubey@gmail.com";
console.log(person);    


                 //  DOT VS BRACKET NOTATION

const key ="email";
const people = {
      name : "golu",
      age : 18,
      // people_hobbies : ["cricket","video games"]
                       //or
      "people hobbies" : ["cricket","video games","reading books"]
      }  

      //console.log(people.person hobbies);

      //agr hume people hobbies add krni hai to spacke ki wajah se error throw krega so hume bracket notation ka use karna hoga
      console.log(people["person hobbies"]);

      //people.key="abc123@gmail.com";
       // isse karne se email ke jagah key hi likha milega but hume key ke place pe output me hume email likha hona chahiye

      people[key]="abc123@gmail.com";
       //isse hume email nhi likhna hoga wo hume jo upar  const key = "email" likha hai wha se automatic email le lega aur key jagah email insert krdega  
      console.log(people);




         

