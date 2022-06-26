
function greet(name){
    let letter=prompt("Enter a letter")
for (let user of users){
    let name= user.name
    console.log(name.includes(letter))
    if (name.includes(letter)){
    const myTimeout = setTimeout(function(){
        console.log("Hello "+ user.name)
    }, 2000)
}
} 
}
console.log(greet())

function id(){
let id= Number(prompt("Give me your id"))
for(let todo of todos){


