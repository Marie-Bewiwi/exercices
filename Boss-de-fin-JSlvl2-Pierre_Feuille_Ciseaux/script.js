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

function jeu(joueurclick) {
    let choixaleatoire = tableaubouton[Math.floor(Math.random() * tableaubouton.length)];
    let choix_joueur = joueurclick.target.id;
    let resultat = document.querySelector("#result");
    partie.textContent = "L'ordi a joué " + choixaleatoire.id + ", vous avez joué " + choix_joueur
    switch (choix_joueur) {
        case "pierre":
            switch (choixaleatoire.id) {
                case "feuille":
                    resultat.textContent = "Perdu";
                    break;

                case "ciseaux":
                    resultat.textContent = "Gagné";
                    break;
                case "pierre":
                    resultat.textContent = "Egalité"
                    break;
            }
            break;

        case "feuille":
            switch (choixaleatoire.id) {
                case "feuille":
                    resultat.textContent = "Egalité";
                    break;

                case "ciseaux":
                    resultat.textContent = "Perdu";
                    break;
                case "pierre":
                    resultat.textContent = "Gagné"
                    break;
            }
            break;

        case "ciseaux":
            switch (choixaleatoire.id) {
                case "feuille":
                    resultat.textContent = "Gagné";
                    break;

                case "ciseaux":
                    resultat.textContent = "Egalité";
                    break;
                case "pierre":
                    resultat.textContent = "Perdu"
                    break;
            }
            break;
        
            default:
            resultat.textContent = 'Oups, petit bug ! '
    }
}

feuille.addEventListener('click', jeu)
pierre.addEventListener('click', jeu)
ciseaux.addEventListener('click', jeu)






