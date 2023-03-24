           //FOR LOOP IN ARRAY

let fruits =["Apple","Mango","Grapes","Banana"];
// console.log(fruits.length);        
// console.log(fruits[fruits.length-1]);

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);

}

let fruits2 =[];
for(let i=0; i<fruits.length; i++){
    
    fruits2.push(fruits[i].toUpperCase()); // .push se sbhi element isime fruits2 var me store ho jayenge
}
console.log(fruits2);