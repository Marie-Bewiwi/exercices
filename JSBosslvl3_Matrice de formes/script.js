let boutonremplir = document.getElementById("remplir")
let boutonvider = document.getElementById("vider")
let allforms = document.querySelectorAll("td")
let carres = document.querySelectorAll('.carre')
let ligne3 = document.querySelectorAll('#ligne3 td')
let lignes = document.querySelectorAll('#ligne1,#ligne2,#ligne4,#ligne5')
let colonne3 = document.querySelectorAll('.ligne td:nth-of-type(3)')
let losange = document.querySelector('.losange')

boutonremplir.addEventListener('click', fill)
boutonvider.addEventListener('click', empty)

carres.forEach(function (elem, index) { // elem =  élément sur lequel elle itère, index = tour de boucle
    elem.addEventListener("click", function () { //ajoute un listener sur chaque carré
        let colonnes = lignes[index].querySelectorAll('td'); // je stocke les td qu'il y a dans la ligne[index]
        if (elem.classList.contains('plein')) { //si ce carré contient la classe plein
            for (let k = 0; k < colonnes.length; k++) { // k = l'index d'un élément de la ligne
                colonnes[k].classList.remove('plein') // j'enlève cette classe pour chaque élément de la ligne (colonnes[k])
            }
        }
        else {
            for (let k = 0; k < colonnes.length; k++) {
                colonnes[k].classList.add('plein') //pareil, mais pour remplir
            }
        }

        });
});
losange.addEventListener('click', remplircroix)
function remplircroix() {
    if (losange.classList.contains('plein')) { // si l'élément losange a la classe plein
        for (let l = 0; l < colonne3.length; l++) { // l = indice des éléments de la colonne 3 
            colonne3[l].classList.remove('plein') // on l'enlève
        }
        for (let m = 0; m < ligne3.length; m++) { //m = indice des éléments de la ligne3
            ligne3[m].classList.remove('plein') //on l'enlève
        }
    }
    else {
        for (let l = 0; l < colonne3.length; l++) { // pareil pour remettre la classe
            colonne3[l].classList.add('plein')
        }
        for (let m = 0; m < ligne3.length; m++) {
            ligne3[m].classList.add('plein')
        }

    }
}

function fill() {
    for (let i = 0; i < allforms.length; i++) {
        allforms[i].classList.add('plein')
    }
}

function empty() {
    for (let j = 0; j < allforms.length; j++) {
        allforms[j].classList.remove('plein')
    }

}