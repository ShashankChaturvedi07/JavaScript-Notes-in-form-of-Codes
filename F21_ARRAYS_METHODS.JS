              //Array methods

    //1. push --> (original array ke last me kuch add krne ke liye)

    //2. --> pop (original array me se kuch remove karne ke liye use hota hai but hmesha remove last se karega aur jo remove krega usko return bhi krega to hume uss remove hue element ko variable me store karwana hoga)
     
    //3. unshift --> (original wale array ke starting me agar kuch add karna ho to) 

    //4. shift --> (starting se element ko remove karega aur remove hua element ko return bhi karega jise hum variableme store kar skte hai)
let fruit = ["apple","mango","grapes","orange"];

                //push
console.log(fruit);
fruit.push("papaya");
console.log(fruit);

                //pop
 
fruit.pop();
let poppedFruit = fruit.pop();
console.log(fruit);
console.log("popped fruit is", poppedFruit); 

                //unshift

fruit.unshift("watermelon");
fruit.unshift("guavava");
console.log(fruit);

                //shift

fruit.shift();
let removedFruit = fruit.shift();
console.log(fruit);
console.log("removed fruit is ", removedFruit);

