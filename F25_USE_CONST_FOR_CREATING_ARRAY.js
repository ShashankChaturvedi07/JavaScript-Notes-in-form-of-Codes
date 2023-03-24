            // use constant for creating array

        //******(ALWAYS USE CONST FOR CREATING ARRAY)******


const fruits = ["apple","mango"];

//fruits =["grapes"];  // yhan error milega bcoz hum constant ko change nhi kar skte 

fruits.push("banana");  //yhan error isiliye nhi araha bcoz hum array method ka use krke elemets ko remove add kar skte hai isse original array ke memory me koi change nhi ho rha kyuki hum usi array ke andar changes kar rhe hai so array methods ka use karke hum constant array me changes kar sktte hhai
console.log(fruits);            