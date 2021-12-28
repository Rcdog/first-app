const pseaudo = "Rachid93";
const password = 'rchgf';
const minimumAge = 18;
const welcomeMessage = "Bon retour parmi nous";

let clientAge = 19;
let clientpseaudoWrote = "Rachid93";
let clientPasswordWrote = 'rchgF';

if (pseaudo==clientpseaudoWrote && password==clientPasswordWrote && minimumAge<=clientAge ){
    console.log(welcomeMessage)
} else {
    console.log("erreur intru")
};

const b = new Date(2003, 11, 26);
let a = b.toDateString();
var c ="en allant au resto le ";
var d ="j'ai vu une lamborghini ";

console.log(c+ " " +b+ " "+ d)

var modelLamborghini = {
    model :"galardo",
    color :"red",
    speedmax :"330",
    option :"full",
    year :"2011"
};
console.log(modelLamborghini)

 function assurance(a){
     let result;
     if (a>2011){
         result ="assurance";
     }else{
         result ="pas d'assurance loser"
     }
     return result
 }console.log(assurance(2012))
