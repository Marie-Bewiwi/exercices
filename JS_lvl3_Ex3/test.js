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
            alert("cette chaîne est valide")
            break;
        case "A":
            alert("cette chaîne est valide")
            break;
        case "b":
            alert("cette chaîne est valide")
            break;
        case "B":
            alert("cette chaîne est valide")
            break;
        case "c":
            alert("cette chaîne est valide")
            break;
        case "C":
            alert("cette chaîne est valide")
            break;
        case "d":
            alert("cette chaîne est valide")
            break;
        case "D":
            alert("cette chaîne est valide")
            break;
        default:
            alert('cette chaîne n\'est pas valide')
            break;
    }

}