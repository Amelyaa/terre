console.log("Exercice 3: Afficheur d'arguments")

const prompt = process.argv

//on enlève les deux premiers résultats qui sont inutiles
prompt.slice(2).forEach((argmt) => {
    console.log(argmt)
})
