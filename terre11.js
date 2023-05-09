console.log("Exercice 12: 24 to 12")

//on récupère l'argument concerné car on s'en fout des premiers
const hre = process.argv[2]

//On transforme l'argument en tableau pour séparer les heures des minutes
const temps = hre.split(':')
const heure = parseInt(temps[0])
const minute = parseInt(temps[1])

if (heure < 0 || heure > 23 || minute < 0 || minute > 59) {
    console.log("Erreur: L'argument doit être un nombre entre 0:00 et 23:59 (Heure invalide)")
    process.exit(1)
}

//On utilise un switch pour afficher le résultat en fonction de l'heure et en gérant les cas particuliers
switch (heure) {
    case '0':
        console.log(`Il est minuit (12:${addZero(minute)} AM)`)
        break
    case '12':
        console.log(`Il est midi (12:${addZero(minute)} PM)`)
        break
    default:
        if (heure < 12) {
            console.log(`${addZero(heure)}:${addZero(minute)} AM`)
        } else {
            console.log(`${heure - 12}:${addZero(minute)} PM`)
        }
}

//Fonction pour ajouter un 0 devant les minutes si elles sont inférieures à 10
function addZero(nombre) {
    return nombre.toString().padStart(2, '0')
}
