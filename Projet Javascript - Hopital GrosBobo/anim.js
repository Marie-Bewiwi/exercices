let containerbouton = document.getElementById("corpstext");
let boutons = document.getElementsByClassName('btn');
let descriptions = document.getElementsByClassName('desc');

for(let i = 0 ; i < boutons.length; i++) {
    boutons[i].addEventListener('click', function () {
        for (let j = 0; j < boutons.length; j++) {
        boutons[j].classList.remove('active');
        }
        this.classList.add('active');
        //la même, pour les descriptions.
        for (let k=0 ; k < descriptions.length; k++){
            descriptions[k].classList.remove('shown')
        }
        this.nextElementSibling.classList.add('shown'); // on cible le "frère" des boutons, qui sont les descrip.
    });
}


    
    // QUAND click , display = bloc pour l'actif
    // clic = change la classe dans le css pour afficher et désafficher les autres
    
