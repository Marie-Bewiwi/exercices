let tab = document.getElementById('tableau')
let bouton_ajoute = document.getElementById('add');
let bouton_tirage = document.getElementById('pick');
let nom;
let newrow;
let newCell;
let newText;
bouton_ajoute.addEventListener('click', ajoute);
bouton_tirage.addEventListener('click', pick);



function ajoute() {
    nom = prompt('Nom?');
    newrow = tab.insertRow(-1)
    newCell = newrow.insertCell(0)
    newText = document.createTextNode(nom);
    newCell.appendChild(newText);
}

function pick() {
    let random = Math.floor(Math.random() * (tab.rows.length - 1) + 1); // pour exclure le titre qui est aussi une row!
    alert('Le gagnant est ' + tab.rows[random].textContent)
}
