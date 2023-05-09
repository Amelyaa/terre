console.log("Exercice 15: Trié ou pas")

//on récupère les arguments concernés car on s'en fout des premiers
const args = process.argv.slice(2)

//On vérifie que la liste contient au moins deux entiers
if (args.length < 2) {
    console.log("Erreur : La liste doit contenir au moins deux entiers.")
    process.exit(1)
}

//on vérifie que les arguments sont bien des nombres
for (let i = 0; i < args.length; i++) {
    if (isNaN(parseInt(args[i]))) {
        console.log("Erreur : La liste doit contenir uniquement des entiers.")
        process.exit(1)
    }
}


let isSort = true

//Pour chaque élément de la liste, on vérifie que l'élément suivant est plus grand strictement que le précédent
for (let i = 1; i < args.length; i++) {
    if (parseInt(args[i]) < parseInt(args[i-1])) {
        isSort = false
        break
    }
}

let message

switch (true) {
    case isSort:
        message = "Triée !"
        break;
    case !isSort:
        message = "Pas triée !"
        break;
    default:
        message = "Erreur : La liste doit contenir uniquement des entiers."
        process.exit(1)
}

console.log(message)
