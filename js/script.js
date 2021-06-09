var outputElement =document.getElementById("output");
function invertiParola(str){
    var strInversa = str.split('').reverse().join('');  
    return strInversa;
}
var parola = prompt("inserisci una parola");

var parolaInversa = invertiParola(parola);

if(parola == parolaInversa){
    outputElement.innerHTML='la parola è palindroma';
  } else {
    outputElement.innerHTML='la parola non è palindroma';
  }