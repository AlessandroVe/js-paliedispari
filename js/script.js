//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
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
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
//Sommiamo i due numeri.
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Infine, dichiariamo chi ha vinto.

var outputElement2 =document.getElementById("output2");

var max=5;
var min=1;
var numPc= Math.floor(Math.random()*(max-min+1))+min;
var numUser= parseInt(prompt("inserisci un numero tra "+min +" e "+ max));
var userChoose= prompt("inserisci pari o dispari");

while(userChoose !== "pari" || userChoose !== "dispari"){
    var userChoose= prompt("inserisci pari o dispari");
}
while(numUser<1 || numUser>5){
    var numUser= parseInt(prompt("inserisci un numero tra "+min +" e "+ max));
}


var sumNumber = numPc+numUser;

if(userChoose === "pari" && sumNumber%2===0){
    outputElement2.innerHTML= " hai vinto";
}else if(userChoose === "dispari" && sumNumber%2!==0){
    outputElement2.innerHTML= " hai vinto";
}else{
    outputElement2.innerHTML= " hai perso";
}
 


var outputElement3 =document.getElementById("output3");




