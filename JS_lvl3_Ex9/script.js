// code for v1 : as requested in readme doc
let sum = document.getElementById('summary');
let btnlireplus = document.getElementById('showmore');
let fulltext = document.getElementById('full')

btnlireplus.addEventListener('click', showmore)


function showmore() {
    sum.style.display = "none";
    btnlireplus.style.display = "none";
    fulltext.style.display = 'block';
}

// code for v2 : updated 

if (fulltext.textContent.length > 100) {
    sum.style.display = "block";
    fulltext.style.display = "none"
    btnlireplus.style.display = "block"
}

