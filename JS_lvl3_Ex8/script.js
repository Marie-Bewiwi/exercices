let mybirthday = new Date ("May 4, 2021 16:25:00")
let today = Date.now()
let jours= Math.floor((mybirthday - today)/1000/86400)

document.write ('<p>Mon anniversaire est le ' + mybirthday  + '</p> <p> Aujourd\'hui nous sommes le ' + today + '</p> <p> Il reste donc ' + jours + ' jours avant mon anniversaire ! ')

