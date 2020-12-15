var genera = document.getElementById("genera");
genera.addEventListener('click',
function() {
  var nome = document.getElementById('nome').value;
  var distanza = document.getElementById('km').value;
  var eta = document.getElementById('eta').value;
  console.log('eta');
  var prezzo = 0.21 * distanza;
  var offerta = 'Tariffa standard';

  document.getElementById('nome-passeggero').innerHTML = nome;
  document.getElementById('sconto').innerHTML = offerta;
  document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*9) + 1;
  document.getElementById('cp').innerHTML = Math.floor(Math.random()*9999) + 90000;
  document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + ' €';

  if (eta == 'minorenne'){
    prezzo -= prezzo * 0.2;
    offerta = 'Tariffa minorenne';
  }
  else if (eta == 'over'){
    prezzo -= prezzo * 0.4;
    offerta = 'Tariffa over 65';
  }
}
);
