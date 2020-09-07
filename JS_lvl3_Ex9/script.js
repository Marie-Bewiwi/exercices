let sum = document.getElementById('summary');
let btnlireplus = document.getElementById('showmore');
let fulltext = document.getElementById('full')

btnlireplus.addEventListener('click',showmore)

function showmore () {
sum.style.display = "none";
btnlireplus.style.display = "none";
fulltext.style.display = 'block';
}