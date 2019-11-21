/* ESERCIZIO COMPLETO
Creare un calendario dinamico con le festività. Partiamo dal gennaio 2018 dando la possibilità di cambiare mese, gestendo il caso in cui l’API non possa ritornare festività. Il calendario partirà da gennaio 2018 e si concluderà a dicembre 2018 (unici dati disponibili sull’API).

Ogni volta che cambio mese dovrò:
Controllare se il mese è valido (per ovviare al problema che l’API non carichi holiday non del 2018)
Controllare quanti giorni ha il mese scelto formando così una lista
Chiedere all’api quali sono le festività per il mese scelto
Evidenziare le festività nella lista
*/

// funzione per generare i giorni del mese con moment e ciclo for
function giorniDelMese(mese) {

 var numeroDigiorni = moment ('2018/'+mese+'/01','YYYY/MM/DD').daysInMonth();

 for (var i = 1; i < numeroDigiorni; i++) {
  var data = '2019-05-10-'
  var currentDate = moment('2018-'+mese+'-'+i, 'YYYY-MM-D').format('YYYY-MM-DD');
  var currentDay = moment(currentDate).format('DD dddd Y');
  $('.main').append('<div data-date="'+currentDate+'">'+currentDay+'</div>')
  $("#mese-now").text(moment(mese, "M").format("MMMM"));
 }
}

//richiesta api per trovare festività
function festeDelMese(mese) {
 var meseAjax = mese - 1;
  $.ajax({
 url : "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=" + meseAjax,
 method : "GET",
 success : function (lista) {
  for (var i = 0; i < lista.response.length; i++) {
   var giorniFestivi = lista.response[i].date;
   var giorniColorati = lista.response[i].name;
   console.log(giorniFestivi);
   $('.main div[ data-date = "' + giorniFestivi + '"] ').css('color', 'red').append('' + giorniColorati);
  }
 },

 error : function () {
  alert("Errore");
 }

 });
}


//funzione per far andare avanti e indietro i bottoni togliendo le festività




//funzione generale jquery
$( document ).ready(function() {
 var mese = 1;
 festeDelMese(mese);
 giorniDelMese(mese);

 $("#btn-ind").click(function () {
  if (mese == 1){
   mese = 12;
   $('div[ data-date] ').remove();
   giorniDelMese(mese);
  }else{
   mese--;
   $('div[ data-date] ').remove();
   giorniDelMese(mese);
  }
 })

 $("#btn-ava").click (function () {
  if (mese == 12){
   mese = 1;
   $('div[ data-date] ').remove();
   giorniDelMese(mese);
  }else{
   mese ++;
   $('div[ data-date] ').remove();
   giorniDelMese(mese);
  }
 })

 });
