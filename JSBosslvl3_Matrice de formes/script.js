let boutonremplir = document.getElementById("remplir")
let boutonvider = document.getElementById("vider")
let allforms = document.querySelectorAll("td")
let carres = document.querySelectorAll('.carre')
let ligne1 = document.querySelectorAll('#ligne1 td')
let ligne2 = document.querySelectorAll('#ligne2 td')
let ligne3 = document.querySelectorAll('#ligne3 td')
let ligne4 = document.querySelectorAll('#ligne4 td')
let ligne5 = document.querySelectorAll('#ligne5 td')


boutonremplir.addEventListener('click', fill)
boutonvider.addEventListener('click', empty)
carres.forEach(function (elem,index) {
    elem.addEventListener("click", function () {
        for (let k = 0; k < ligne1.length; k++) {
            ligne1[k].classList.add('plein')
        }
    });
});

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