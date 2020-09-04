





let bouton1 = document.getElementById('test_a-d')
let bouton2 = document.getElementById('test_1_@')
let bouton3 = document.getElementById('test_chiffre')
let bouton4 = document.getElementById('remplace_chiffre')

bouton1.addEventListener('click', a_d)
bouton2.addEventListener('click', testarobase)
bouton3.addEventListener('click', testchiffre)
bouton4.addEventListener('click',replacenumber)

function a_d() {
    let str1 = document.getElementById('test1').textContent;
    switch (str1[0]) {
        case "a":
        case "A":
        case "b":
        case "B":
        case "c":
        case "C":
        case "d":
        case "D":
            alert("cette chaîne est valide")
            break;
        default:
            alert('cette chaîne n\'est pas valide')
            break;
    }
}

function testarobase() {
    let str2 = document.getElementById('test2').textContent;
    let compteur = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === "@") {
            compteur++;
        }
    }
    if (compteur > 1 || compteur === 0) {
        alert('cette chaîne est invalide');
    }
    else {
        alert('cette chaîne est valide')
    }
}

function testchiffre() {
    //j'ai utilisé une regex parce que isNaN me freinait plus qu'autre chose (enlever espaces etc)
    let str3 = document.getElementById('test3').textContent;
    let regex = /[0-9]/
    if (str3.match(regex)) {
        alert ('cette chaîne est valide')
    }
    else {
        alert ('cette chaîne est invalide')
    }
}

function replacenumber () {
    let test4 = document.getElementById('test4')
    let str4 = test4.textContent;
    let regex2 = /[0-9]/g
    let nouveautext = str4.replaceAll (regex2, '*')
    test4.textContent = nouveautext
}
/* une autre solution, plus efficace, made in David xD

let letters = ['a', 'A', 'b', 'B', 'c', 'C', 'd', 'D']

/**
 * Est-ce que "lettre" est égale à la 1ère lettre de str1 ?
 */
//function isLetterValid(lettre) {
//    return lettre===str1[0]
//}

/**
 * Est-ce que "str1" commence par 1 des lettres de "letters" ?
 */
//function isValid() {
  //  alert(letters.some(isLetterValid) ? "cette chaîne est valide" : 'cette chaîne n\'est pas valide')
//}
//some attend en paramètre une fonction qui renvoie "true" ou "false"
//some applique cette fonction pour chaque élément du tableau
//Si un de ces éléments renvoie "true" après être passé par la fonction,  some renvoie "true"
