let multiplieur = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//rajouter la boucle pour le prompt ( condition isNaN )
//rajouter les autres tables jusqu'au chiffre concerné 

var chiffre = askUser()

function askUser() {
    entree = Number(prompt("Rentrez votre nombre, vous aurez votre table !"))
    if (isNaN(entree)) {
        alert("Veuillez entrer un entier")
        askUser()
    }
    return entree
}
function multiplication (param) {
    for (let j = 1; j<= param ; j++) {
        document.write ('<h3> La table de ' + j + ' : </h3>' )
        for ( let i = 1 ; i <= 10 ; i++) {
            resultat = i*j 
        document.write('<br/>' + j + " fois " + i + " = " + resultat)
        }

    }
    //let tb = document.createElement('table')
}
   multiplication(chiffre)
   
   //let td = document.createElement("td")
