/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let numb1 = 50;
let numb2 = 25;

if (numb1 > numb2) {
  console.log('50 è più grande di 25')
} else {
  console.log("sono uguali o 25 è maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let mun = 7

if (mun !== 5) {
  console.log("not equal");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/
let modulo = 20

if (modulo % 5 === 0) {
  console.log("divisibile per 5");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let firstNumber = 3;
let secondNumber = 5;

if (firstNumber === 8 || secondNumber === 8 || firstNumber + secondNumber === 8 || Math.abs(firstNumber - secondNumber) === 8) {
  console.log("Uno dei numeri è 8 oppure la loro somma/differenza è 8");
} else {
  console.log("Nessuna delle condizioni è soddisfatta");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 50
let risultato
if (totalShoppingCart <= 50) {
  risultato = totalShoppingCart + 10
  console.log( 'la spesa non supera i 50' , risultato)
  risultato = totalShoppingCart
  console.log('la spedizione gratuita ammonta' , risultato)
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let sconto = totalShoppingCart * 0.8
let totalSconto = totalShoppingCart - sconto

if (totalSconto < 50) {
  result = totalSconto + 10
  console.log("totale " , result)
} else {
  console.log("hai diritto alla spedizione gratuita")
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let num1 = 10
let num2 = 20
let num3 = 30
if (num1 <= num2 && num1 <= num3) {
  if (num2 <= num3) {
    console.log(num3, num2, num1)
  }
} 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let valore = 88

if (typeof valore === 'number' && !isNaN(valore)) {
  console.log("Il valore fornito è un numero");
} else {
  console.log("Il valore fornito non è un numero");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let forno = 8

if (forno % 2 === 0) {
  console.log(forno + " è pari");
} else {
  console.log(forno + " è dispari");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
// let val = 7
// if (val < 10) {
//  console.log("Meno di 10");
// } else if (val < 5) {
//  console.log("Meno di 5");
// } else {
//  console.log("Uguale a 10 o maggiore");
// } 

    let val = 7
    if (val < 5) {
        console.log("Meno di 5");
      } else if (val < 10) {
        console.log("Meno di 10");
      } else {
        console.log("Uguale a 10 o maggiore");
      }
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  }
  
  me.city = 'Toronto';
  console.log(me.city)
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
    delete me.lastName;
    console.log(me)
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
    me.skills.pop();
    console.log(me);
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  // array inizialmente vuoto
    let numbersArray = [];
    console.log(numbersArray)

    numbersArray.push(1)
    numbersArray.push(2)
    numbersArray.push(3)
    numbersArray.push(4)
    numbersArray.push(5)
    numbersArray.push(6)
    numbersArray.push(7)
    numbersArray.push(8)
    numbersArray.push(9)
    numbersArray.push(10)
    console.log(numbersArray)
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
    numbersArray[numbersArray.length - 1] = 100;
    console.log(numbersArray)
  /* SCRIVI QUI LA TUA RISPOSTA */