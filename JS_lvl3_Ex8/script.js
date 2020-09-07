let mybirthday = new Date ("May 4, 2021 16:25:00")
let today = Date.now()
let datetoday = Date()
let jours= Math.floor((mybirthday - today)/1000/86400)

document.write ('<p>Mon anniversaire est le ' + mybirthday  + '</p> <p> Aujourd\'hui nous sommes le ' + datetoday + '</p> <p> Il reste donc ' + jours + ' jours avant mon anniversaire ! ')

