console.log("Exercice 6: Divisions")

//on récupère les deux arguments car on s'en fout des premiers
const num1 = process.argv[2]
const num2 = process.argv[3]

//on vérifie qu'il y a bien deux arguments ni plus ni moins
if (process.argv.length !== 4) {
    console.log("Erreur: Il faut deux arguments")
    process.exit(1)
} else{
    //on vérifie que les arguments sont bien des nombres
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Erreur: Les arguments doivent être des nombres")
        process.exit(1)
    }
}

const divide = (num1, num2) => {
    //on vérifie que les ce ne soit pas un 0 en string car le prompt renvoie toujours des string
    if (num2 === '0') {
        console.log('Erreur: Division par zéro impossible')
    } else {
        //on utilise Math.floor pour avoir un résultat entier
        const result = Math.floor(num1 / num2)
        const reste = num1 % num2

        if (result === 0) {
            console.log(`Erreur: ${num1} n'est pas divisible par ${num2}`)
        } else {
            console.log(`résultat: ${result}`)
            console.log(`reste: ${reste}`)
        }
    }
}

divide(num1, num2)
