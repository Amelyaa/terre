console.log("Exercice 13: 12 to 24")

//on récupère l'argument concerné car on s'en fout des premiers
const hre = process.argv[2]

//On transforme l'argument en tableau pour séparer les heures des minutes
const temps = hre.split(':')
const heure = parseInt(temps[0])
const minute = parseInt(temps[1])
const ampm = process.argv[3].toUpperCase()

//On vérifie que l'argument AM/PM est bien AM ou PM et défini
if(ampm !== 'AM' && ampm !== 'PM') {
    console.log("L'heure doit être au format HH:MM AM/PM.")
    process.exit(1)
}

if (heure < 1 || heure > 12 || minute < 0 || minute > 59) {
    console.log("L'heure doit être au format HH:MM AM/PM.")
    process.exit(1)
}

let heure24
//On utilise un switch pour afficher le résultat en fonction de l'heure et en gérant les cas particuliers
switch (ampm) {
    case 'AM':
        if (heure === 12) {
            heure24 = 0
            console.log(`Il est minuit (00:${addZero(minute)})`)
        } else {
            heure24 = heure
            console.log(`${addZero(heure24)}:${addZero(minute)}`)
        }
        break
    case 'PM':
        if (heure === 12) {
            heure24 = 12
            console.log(`Il est midi (12:${addZero(minute)})`)
        } else {
            heure24 = heure + 12
            console.log(`${heure24}:${addZero(minute)}`)
        }
        break
}

//Fonction pour ajouter un 0 devant les minutes si elles sont inférieures à 10
function addZero(nombre) {
    return nombre.toString().padStart(2, '0')
}
