// Exo 1 -- Mes variables
let feuille = document.querySelector("#feuille");
let pierre = document.querySelector('#pierre');
let ciseaux = document.querySelector("#ciseaux");
let resultat = document.querySelector("#result");
let parentbouton = document.querySelector('#pfc');
let partie = document.querySelector("#partie")
let tableaubouton = [feuille, pierre, ciseaux];



// Affichez dans le h2 à l'id result, l'id du bouton cliqué(ne servira pas à la fin, sert juste à la compréhension)
//function changetext (event) { // paramètre de l'event listener
// let elementclick = event.target;
// resultat.textContent = " Vous avez cliqué sur " + elementclick.id + " ."
//}
//parentbouton.addEventListener('click', changetext)

//Exo 2 
//resultat.textContent = tableaubouton[0].id

//Exo 3 


feuille.addEventListener('click', jeu)
pierre.addEventListener('click', jeu)
ciseaux.addEventListener('click', jeu)



function jeu(joueurclick) {
    let choixaleatoire = tableaubouton[Math.floor(Math.random() * tableaubouton.length)].id;
    let choix_joueur = joueurclick.target.id;
    let resultat = document.querySelector("#result");
    partie.textContent = "L'ordi a joué " + choixaleatoire + ", vous avez joué " + choix_joueur

    switch (true) { // hack pour tester les conditions directement les cases 
        case choix_joueur === 'pierre' && choixaleatoire === 'feuille':
        case choix_joueur === 'feuille' && choixaleatoire === 'ciseaux':
        case choix_joueur === 'ciseaux' && choixaleatoire === 'pierre':
            resultat.textContent = "Perdu"
            break;

        case choix_joueur === 'pierre' && choixaleatoire === 'pierre':
        case choix_joueur === 'feuille' && choixaleatoire === 'feuille':
        case choix_joueur === 'ciseaux' && choixaleatoire === 'ciseaux':
            resultat.textContent = "Egalité"
            break;

        case choix_joueur === 'pierre' && choixaleatoire === 'ciseaux':
        case choix_joueur === 'feuille' && choixaleatoire === 'pierre':
        case choix_joueur === 'ciseaux' && choixaleatoire === 'feuille':
            resultat.textContent = "Gagné"
            break;

        default:
            resultat.textContent = 'Oups, petit bug ! '
    }
}




