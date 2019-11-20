/* ESERCIZIO COMPLETO
Creare un calendario dinamico con le festività. Partiamo dal gennaio 2018 dando la possibilità di cambiare mese, gestendo il caso in cui l’API non possa ritornare festività. Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull’API).

Ogni volta che cambio mese dovrò:
Controllare se il mese è valido (per ovviare al problema che l’API non carichi holiday non del 2018)
Controllare quanti giorni ha il mese scelto formando così una lista
Chiedere all’api quali sono le festività per il mese scelto
Evidenziare le festività nella lista

MILESTONE DA FARE OGGI:
stampare SOLO gennaio 2018 con caratterizzazione delle relative festività, recuperate interrogando l’API
 STEP:
Controllare quanti giorni ha il mese  formando così una lista;
Chiedere all’api quali sono le festività per il mese ;
Evidenziare le festività nella lista
*/

//funzione generale jquery
$( document ).ready(function() {

giorniDelMese();
festeDelMese()
 });

// funzione per generare i giorni del mese con moment e ciclo for
function giorniDelMese() {
 var date = moment('01/12/2018','DD/MMMM/YYYY').format('DD MMMM YYYY');
 console.log(date);

 var numeroDigiorni = moment ('01/12/2018','DD/MMMM/YYYY').daysInMonth();
 console.log("numero di giorni del mese : " + numeroDigiorni);

 for (var i = 0; i < numeroDigiorni; i++) {
  var currentDay = moment('2018-01-'+ i ).format('DD MMMM YYYY');
  $('.content').append('<div>' + currentDay + '</div>')
  console.log("lista giorni del mese di gennaio : " + currentDay);
 }
}

//richiesta api per trovare festività
function festeDelMese() {
  $.ajax({
 url : "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
 method : "GET",
 success : function (lista) {
  for (var i = 0; i < lista.response.length; i++) {
   console.log(lista.response[i]);
  }
 },

 error : function () {
  alert("E' avvenuto un errore. "+errore);
 }

 });
}
