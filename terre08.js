console.log("Exercice 9: Puissance d'un nombre")

//on récupère les deux arguments car on s'en fout des premiers
const num1 = process.argv[2]
const num2 = process.argv[3]

//on vérifie qu'il y a bien deux arguments ni plus ni moins
if (process.argv.length !== 4) {
    console.log("Erreur: Il faut deux arguments")
    process.exit(1)
} else {
    //on vérifie que les arguments sont bien des nombres
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Erreur: Les arguments doivent être des nombres")
        process.exit(1)
    }
}

const puissance = (num1, num2) => {
    //on vérifie que l'exposant est positif
    if (num2 < '0') {
        console.log('Erreur: L\'exposant doit être positif')
    } else {
        //on utilise Math.pow pour avoir le résultat de la puissance
        const result = Math.pow(num1, num2)
        console.log(result)
    }
}

puissance(num1, num2)
