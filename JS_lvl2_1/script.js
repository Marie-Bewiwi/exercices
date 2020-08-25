//Les variables
    //nombre
nombre = 42
    console.log(nombre);
    //tableau
tab = [2,5,6,7,9]
    console.log(tab);
    //chaine de caracteres
    chaine = "ceci est une chaîne de caractères"
    console.log(chaine);
//Conditions
if ( nombre>=50 ) {
    console.log ('super moit-moit')
}
else if (nombre<=40) {
    console.log('peut mieux faire')
}
else {
    console.log('la grande réponse')
}
    //if, else if ,else
let longueurtab = tab.length 
    switch(longueurtab) {
    
        case 10 :
            console.log('Il y a 10 éléments dans le tableau')
            break;
        
        case 5 : 
            console.log('Il y a 5 éléments dans le tableau')
            break;
        
        case 0 : 
            console.log("Il n'y a pas d'éléments dans le tableau")
        break;

        default : 
        console.log('Je ne connais pas le nombre d\'élements dans le tableau')

}

    //switch


//Boucles

let compteur = 0
while (compteur < 5 ) {
    console.log ('sire on en a gros')
    compteur++;
}


    //while

for (let i = 0 ; i < longueurtab; i++ ) {
    console.log (tab[i]);
}

    //for
