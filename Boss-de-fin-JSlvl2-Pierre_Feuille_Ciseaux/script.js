// Exo 1
let feuille = document.querySelector("#feuille");
let pierre = document.querySelector ('#pierre');
let ciseaux = document.querySelector("#ciseaux");
let resultat = document.querySelector("#result");
let parentbouton = document.querySelector('#pfc');


// Affichez dans le h2 à l'id result, l'id du bouton cliqué(ne servira pas à la fin, sert juste à la compréhension)
function changetext (event) { // paramètre de l'event listener
    let elementclick = event.target;
    resultat.textContent = " Vous avez cliqué sur " + elementclick.id + " ."
}
parentbouton.addEventListener('click', changetext)