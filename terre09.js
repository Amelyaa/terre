console.log("Exercice 9: Racine carré d'un nombre")

//on récupère l'argument concerné car on s'en fout des premiers
const num = process.argv[2]

//on vérifie que les arguments sont bien des nombres
if (isNaN(num)) {
    console.log("Erreur: L'argument doit être un nombre")
    process.exit(1)
}

const racine = (num) => {
    //on vérifie que le nombre est positif
    if (num < '0') {
        console.log('Erreur: Le nombre doit être positif')
    } else {
        //on utilise Math.sqrt pour avoir le résultat de la racine carrée
        const result = Math.sqrt(num)
        console.log(result)
    }
}

racine(num)
