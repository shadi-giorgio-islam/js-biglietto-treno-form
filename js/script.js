var genera = document.getElementById("genera");
genera.addEventListener('click',
function() {
  var nome = document.getElementById('nome').value;
  var distanza = document.getElementById('km').value;
  var eta = document.getElementById('eta').value;
  console.log(eta);
  var prezzo = 0.21 * distanza;
  var offerta = 'Tariffa standard';


  if (eta == 'minorenne'){
    prezzo -= prezzo * 0.2;
    offerta = 'Tariffa minorenne';
  }
  else if (eta == 'over'){
    prezzo -= prezzo * 0.4;
    offerta = 'Tariffa over 65';
  }

  document.getElementById("biglietto").className = "show";
  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('sconto').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*9) + 1;
  document.getElementById('cp').innerHTML = Math.floor(Math.random()*9999) + 90000;
  document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + ' €';
}
);

var annulla = document.getElementById("annulla");
annulla.addEventListener('click',
function() {
  document.getElementById('nome').value = '';
  document.getElementById('km').value = '';
  document.getElementById('eta').value = '';
  document.getElementById("biglietto").className = "hidden";
}
);
