let bouton1 = document.getElementById('btn1');
let bouton2 = document.getElementById('btn2');

bouton1.addEventListener('click', helloworld)
bouton2.addEventListener('click', demandenom)

function helloworld (){
    alert('Hello World')
}
function demandenom () {
     var nom = prompt('Quel est votre nom ?')
    confirm ('votre nom est bien ' + nom)
    alert ('Bonjour, comment ça va ' + nom + ' ?')
}