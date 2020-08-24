let containerbouton = document.getElementById("corpstext");
let boutons = document.getElementsByClassName('btn');

for(var i = 0 ; i < boutons.length; i++) {
    boutons[i].addEventListener('click', function () {
        for (var j = 0; j < boutons.length; j++) {
        boutons[j].classList.remove('active');
        }
        this.classList.add('active');

    });
}

let description = document.getElementsByClassName('desc');
for (var k=0 ; k < description.length; k++ ) {
    boutons[k].addEventListener('click' , function() {

    }
    
    
    
    )
}
