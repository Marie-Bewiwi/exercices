let bolsdesoupe = document.querySelectorAll(".soupe p")
let boutonboire = document.querySelector("#boire")


function boire(bol) {
    bol.innerHTML = bol.innerHTML.replace("plein", "vide")
}

function onclick () {
    for(let i = 0; i < bolsdesoupe.length; i++) {
        let bol = bolsdesoupe[i];
        if (bol.innerHTML.match("plein")) { // match = https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match 
            boire(bol)
            break
        }
    }
}
boutonboire.addEventListener("click", onclick);

