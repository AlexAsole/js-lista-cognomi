var lista = document.getElementById('lista');
var listaCognomi = ['Rossi', 'Bianchi', 'Vieri', 'Pazzi', 'Zona', 'Innocenti', 'Flesso', 'Capatonda']

listaCognomi.sort(); //Sorta in ordine alfabetico

//Ciclo con for
for (var i = 0; i < listaCognomi.length; i++) {
  lista.innerHTML += '<li>' + listaCognomi[i] + '</li>';
}

//Ciclo con while
// var i = 0;
// while (i < listaCognomi.length) {
//   lista.innerHTML += '<li>' + listaCognomi[i] + '</li>';
//   i++;
// }

//Ciclo con while do
// do {
//   lista.innerHTML += '<li>' + listaCognomi[i] + '</li>';
//    i++;
// } while (i < listaCognomi.length);
