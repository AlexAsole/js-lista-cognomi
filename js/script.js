var userCognome = prompt('Salve, scriva il suo cognome(prima lettera maiuscola)');
var lista = document.getElementById('lista');
var posizione = document.getElementById('posizione');
var listaCognomi = ['Rossi', 'Bianchi', 'Vieri', 'Pazzi', 'Zona', 'Innocenti', 'Flesso', 'Capatonda']
listaCognomi.push(userCognome); //inserimento cognome utente tramite prompt
var realPosition = listaCognomi.indexOf(userCognome) + 1; //posizione in lista non sortata
listaCognomi.sort(); //Sorta in ordine alfabetico
var position = listaCognomi.indexOf(userCognome) + 1; //posizione in lista sortata

//Ciclo con for
for (var i = 0; i < listaCognomi.length; i++) {
  lista.innerHTML += '<li>' + listaCognomi[i] + '</li>';
}

//Ciclo con while
var i = 0;
// while (i < listaCognomi.length) {
//   lista.innerHTML += '<li>' + listaCognomi[i] + '</li>';
//   i++;
// }

//Ciclo con while do
// do {
//   lista.innerHTML += '<li>' + listaCognomi[i] + '</li>';
//    i++;
// } while (i < listaCognomi.length);

posizione.innerHTML = 'La tua posizione nella lista è: ' + position + '!'; //conteggio in pagina, ordine alfabetico
console.log('La tua vera posizione, senza sort per ordine alfabetico è: ' + realPosition + '!' );
//conteggio in console, ordine di inserimento
