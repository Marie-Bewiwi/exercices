let total = 0;
let ms = document.querySelector('.tim span:last-child')
let s = document.querySelector('.tim span:nth-child(3)')
let m = document.querySelector('.tim span:nth-child(2)')
let h = document.querySelector('.tim span:nth-child(1)')
let intervalle

function tick() {
    if (total === 24 * 10 * 60 * 60) {
        clearInterval(intervalle)
        return
    }
    total++
    ms.textContent = total % 100 + " ms";
    s.textContent = Math.floor(total / 10) % 60 + " s"
    m.textContent = Math.floor(total / 10 / 60) % 60 + " m"
    h.textContent = Math.floor(total / 10 / 60 / 60) + " h"

}
function start() {
    intervalle = setInterval(tick, 100)
}

function stop() {
    clearInterval(intervalle)
}

function reset() {
    clearInterval(intervalle)
    total = 0 ;
    ms.textContent = total + " ms";
    s.textContent = total + " s"
    m.textContent = total + " m"
    h.textContent = total + " h"
    
}