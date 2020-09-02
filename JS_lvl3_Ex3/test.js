let str1 = document.getElementById('test1').textContent;
let str2 = document.getElementById('test2').textContent;
let str3 = document.getElementById('test3').textContent;
let str4 = document.getElementById('test4').textContent;
console.log(str1, str2, str3, str4)

let bouton1 = document.getElementById('test_a-d')
let bouton2 = document.getElementById('test_1_@')
let bouton3 = document.getElementById('test_chiffre')
let bouton4 = document.getElementById('remplace_chiffre')

bouton1.addEventListener('click', a_d)
bouton2.addEventListener('click',)
bouton3.addEventListener('click',)
bouton4.addEventListener('click',)

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