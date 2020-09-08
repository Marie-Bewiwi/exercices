let bouton = document.getElementById('bouton1');


bouton.addEventListener('click', changebutton);

function changebutton() {
    if (bouton.value === "Cliquez moi!") {
        bouton.value = "j'ai été cliqué"
    }
    else {
        bouton.value = "Cliquez moi!"
    }
}