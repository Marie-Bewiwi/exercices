let boutonremplir = document.getElementById("remplir")
let boutonvider = document.getElementById("vider")
let allforms = document.querySelectorAll("td")
let carres = document.querySelectorAll('.carre')
let ligne1 = document.querySelectorAll('#ligne1 td')
let ligne2 = document.querySelectorAll('#ligne2 td')
let ligne3 = document.querySelectorAll('#ligne3 td')
let ligne4 = document.querySelectorAll('#ligne4 td')
let ligne5 = document.querySelectorAll('#ligne5 td')
let lignes = document.querySelectorAll('#ligne1,#ligne2,#ligne4,#ligne5')
let colonne3 = document.querySelectorAll('.ligne td:nth-of-type(3)')
let losange = document.querySelector('.losange')

boutonremplir.addEventListener('click', fill)
boutonvider.addEventListener('click', empty)
carres.forEach(function (elem, index) {
    elem.addEventListener("click", function () {
        let colonnes = lignes[index].querySelectorAll('td');
        if (elem.classList.contains('plein')) {
            for (let k = 0; k < colonnes.length; k++) {
                colonnes[k].classList.remove('plein')
            }
        }
        else {
            for (let k = 0; k < colonnes.length; k++) {
                colonnes[k].classList.add('plein')
            }
        }

        });
});
losange.addEventListener('click', remplircroix)
function remplircroix() {
    if (losange.classList.contains('plein')) {
        for (let l = 0; l < colonne3.length; l++) {
            colonne3[l].classList.remove('plein')
        }
        for (let m = 0; m < ligne3.length; m++) {
            ligne3[m].classList.remove('plein')
        }
    }
    else {
        for (let l = 0; l < colonne3.length; l++) {
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