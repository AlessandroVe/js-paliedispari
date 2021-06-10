 /*//var outputElement3 =document.getElementById("output3");



 var parolaUtente= prompt("inserisci una parola");
 var parolaInversa = "";
 for( i = parolaUtente.length -1 ; i >= 0; i--) {
     parolaInversa += parolaUtente[i];
    }
if (parolaUtente === parolaInversa){
    outputElement3.innerHTML="la parola e' palindroma";
}else{
    outputElement3.innerHTML="la parola  non e' palindroma";

}
*/



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
 
/* chiediamo "pari o dispari "  all'utente*/

var userChoose= prompt("inserisci pari o dispari").toLowerCase();

while(userChoose !== "pari" && userChoose !== "dispari"){
     userChoose= prompt("inserisci pari o dispari").toLowerCase();
}  

/* generiamo un numero random */
 
var max=5;
var min=1;
var numPc= Math.floor(Math.random()*(max-min+1))+min;

/* prendiamo il numero dell'utente */
var numUser= parseInt(prompt("inserisci un numero tra "+min +" e "+ max));

while( isNaN(numUser) ||numUser<1 || numUser>5){
    var numUser= parseInt(prompt("inserisci un numero tra "+min +" e "+ max));
}

//Sommiamo i due numeri.
var sumNumber = numPc+numUser;
console.log("il totale e' "+sumNumber);


//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function isPari(num){
    if(num%2===0){
        return true;
    }else{
        return false;
    }    
}

var number = isPari(sumNumber);

  


if(isPari(sumNumber)===true && userChoose === "pari"){
    outputElement2.innerHTML= " hai vinto";

}else if(isPari(sumNumber)===false && userChoose === "dispari"){
    outputElement2.innerHTML= " hai vinto";

}else{
    outputElement2.innerHTML= " hai perso / ha vinto in pc";
}



/*  */
