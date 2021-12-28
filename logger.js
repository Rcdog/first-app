// let url = 'http://myLogger.io/log';

// function log(message) {
//     // Send an HTTP request
//     console.log(message);
// }

// module.exports = log;

let a = 8;
let b = 10;
let c = a-b;
console.log(c);

let x = 0.2;
let v = 100;
let t = x*v;
console.log(t);

function annee(b){
    let result;
    if (b < 2003) {
        result = "prime exceptionel";
      } else {
          result = "nadda nyet";
      }
      return result;
  }console.log(annee(2004));

  const d = new Date();
  console.log (d);
  function age(b) {
     let r;
     if (b > 18) {
       r = "cool";
     } else {
       r = "gamin";
     }
     return r;
  }
  console.log(age(17))
  
  
  const f = new Date();
  console.log (d);
  function age(b) {
     let r;
     if (b > 18) {
       r = "cool";
     } else {
       r = "gamin";
     }
     return r;
  }
  console.log(age(28))
    
  const today = new Date();
  const anniv = new Date(2000, 6, 27);
  var anneetoday = today.getFullYear();
  var anneeanniv = anniv.getFullYear();
  
  var res = anneetoday - anneeanniv;
  
  function calcul(res) {
    if (res < 18) {
      return console.log("mineur");
    }
    else {
      return console.log("majeur");
    }
  }
  
  console.log(anneetoday)
  console.log(anneeanniv)
  console.log(res +" ans ")
  console.log(calcul(res));
  
  
  
  function getAge(date) {
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
   }
    var resultat = (getAge(new Date(2010, 2, 6)))
  
    if ( resultat < 18 )
    {
      return console.log("kiddo")
    }
    else
    {
      return console.log("un adulte un vrai")
    }
  
