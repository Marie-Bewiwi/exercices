let bolsdesoupe = document.querySelectorAll(".soupe p") // je récupère ma collection de bols
let boutonboire = document.querySelector("#boire") // je récupère le bouton boire


function boire(bolaboire) { //c'est une fonction que je veux appliquer sur mon bol à boire
    bolaboire.innerHTML = bolaboire.innerHTML.replace("plein", "vide") //ici je définis une fonction pour remplacer le texte plein par vide
}

function onclick () { // ici je définis ma fonction qui sera appelée quand je clique
    for(let i = 0; i < bolsdesoupe.length; i++) { // ici j'initialise ma boucle qui va s'appliquer à tout mes éléments
        let bol = bolsdesoupe[i]; // la variable bol contient un bol d'indice i parmi la collection bolsdesoupe
        if (bol.innerHTML.match("plein")) { // match = https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match 
            boire(bol) // j'appelle ma fonction avec comme argument ma variable "bol" définie ligne 11
            break // on veut sortir de la boucle dès qu'un bol a été bu, pour ne pas vider tous les bols en 1 clic.
        }
    }
}

boutonboire.addEventListener("click", onclick); //on ajoute un écouteur au bouton boire récupéré l2 au clic qui execute la fonction "onclick"


// fauteuil 


let fauteuils = document.querySelectorAll(".fauteuil p")
let boutonreposer = document.querySelector("#reposer")


function sereposer(fauteuil) {
    fauteuil.innerHTML = fauteuil.innerHTML.replace("neuf", "usagé")
}

function onclick2 () {
    for(let i = 0; i < fauteuils.length; i++) {
        let fauteuil = fauteuils[i];
        if (fauteuil.innerHTML.match("neuf")) { 
            sereposer(fauteuil)
            break
        }
    }
}
boutonreposer.addEventListener("click", onclick2);

//lits

let lits = document.querySelectorAll(".lit p")
let boutondormir = document.querySelector("#dormir")


function dormir(lit) {
    lit.innerHTML = lit.innerHTML.replace("fait", "en bordel")
}

function onclick3 () {
    for(let i = 0; i < lits.length; i++) {
        let lit = lits[i];
        if (lit.innerHTML.match("fait")) { 
            dormir(lit)
            break
        }
    }
}
boutondormir.addEventListener("click", onclick3);
