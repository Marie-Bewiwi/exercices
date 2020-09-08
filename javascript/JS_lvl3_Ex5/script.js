do {
    age = Number(prompt("Age ?"))
    if (isNaN(age)) {
        alert("Veuillez entrer un entier")}
        else if (age<0) {
            alert("Veuillez entrer un entier")
        }
    }
while (isNaN(age)||age<0);

if (age < 18) {
    alert("vous n'avez pas le droit de venir sur ce site")
}
else if (age >= 18 && age <= 50) {
    alert("Vous êtes majeur mais pas encore senior, la vie est belle")
}
else if (age > 50 && age <= 60) {
    alert("Vous êtes senior mais pas encore retraité")
}
else if (age > 60) {
    alert("Vous êtes retraité, profitez de votre temps libre !")
}





