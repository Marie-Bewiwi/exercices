function recup (numpoisson) {
    let poisson = document.getElementById("poisson"+numpoisson);
    return poisson
}

function eliminer(poisson) {
    var textdep = poisson.innerHTML;
    var remp = textdep.replace("vivant", "mort");
    poisson.innerHTML = remp;
}

