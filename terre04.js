console.log("Exercice 5: Pair ou impair")

const prompt = process.argv

//on enlève les deux premiers résultats qui sont inutiles et on vérifie que l'argument est bien un nombre
prompt.slice(2).forEach((argmt) => {
    //si ce n'est pas un nombre on affiche un message d'erreur
    if (isNaN(argmt)) {
        console.log("Tu ne me la mettra pas à l'envers")
        process.exit(1)
    }
    else {
        if (argmt % 2 === 0) {
            console.log(argmt + " est pair")
        } else {
            console.log(argmt + " est impair")
        }
    }
})

if (prompt.length <= 2) {
    console.log("Tu ne me la mettra pas à l'envers")
    process.exit(1)
}
