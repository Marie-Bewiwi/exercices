let total = 0; // j'initialise mon temps à 0centième de seconde
let tim = document.querySelector('.tim')
let ms = document.querySelector('.tim span:last-child')
let s = document.querySelector('.tim span:nth-child(3)')
let m = document.querySelector('.tim span:nth-child(2)')
let h = document.querySelector('.tim span:nth-child(1)')
let intervalle // je n'ai rien assigné pour l'instant , cf ligne 23
let tours = document.querySelector('.tours')

function tick() { //permet d'être appelée dans le set interval qui attend une fnct, qui elle même est dans une fonction start
    if (total === 24 * 10 * 60 * 60) { // si le temps = 24h, 
        clearInterval(intervalle) //on arrête le chrono 
        return // je sors donc de la fonction, je n'execute pas ce qui suit 
    }
    total++ // on incrémente le total toute les 100ms ( cf setinterval l.23 )
    ms.textContent = total % 100 + " ms"; // permet de définir le max de ms à 99
    s.textContent = Math.floor(total / 10) % 60 + " s" //permet de n'avoir que les s en int, max 59s 
    m.textContent = Math.floor(total / 10 / 60) % 60 + " m" // permet de n'avoir que les m en int, max 59m
    h.textContent = Math.floor(total / 10 / 60 / 60) + " h" // permet de n'avoir que les h en int

}
function start() {
    intervalle = setInterval(tick, 100) 
    // j'assigne l'identifiant de ce que renvoie set interval
    // à ma variable interval déclarée dans le scope global l.7, pour y avoir accès pour d'autres fnct
    // Quand je lance ma fonction start, intervalle l.7 prendra donc le set interval défini ci dessus
}

function stop() {
    clearInterval(intervalle) // je stoppe mon intervalle
}

function tour() {
    //quand je clique sur tour, affiche moi le temps exact dans la div "tours"
    let div = document.createElement('div') //je crée une div à chaque tour 
    div.textContent = tim.textContent // je veux que le content de cette nvl div soit remplacé par le content de tim
    tours.appendChild(div) // attache cette div nvlment crée dans la div classe tours 
}

function reset() {
    clearInterval(intervalle) // j'arrête mon chrono ( cf fonction stop)
    total = 0 ; //je réinitialise mon total à 0
    ms.textContent = total + " ms"; //j'affiche tout à 0
    s.textContent = total + " s"
    m.textContent = total + " m"
    h.textContent = total + " h"
    
}