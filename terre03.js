console.log("Exercice 4: L'alphabet à partir de")

const prompt = process.argv
const alphabet = "abcdefghijklmnopqrstuvwxyz"

//on enlève les deux premiers résultats qui sont inutiles et on vérifie que l'argument est bien une lettre de l'alphabet
//ensuite on vérifie qi l'argument est bien une lettre de l'alphabet et on affiche les lettres de l'alphabet à partir de cette lettre en utilisant la méthode slice pour démarrer à un index précis
//vu que c'est une chaine de caractère on utilise split pour la transformer en tableau et on boucle dessus pour afficher chaque lettre

prompt.slice(2).forEach((argmt) => {
    if(alphabet.includes(argmt)) {
        alphabet.slice(alphabet.indexOf(argmt)).split("").forEach((letter) => {
            console.log(letter)
        })
    }
    else {
        console.log("L'argument n'est pas une lettre de l'alphabet")
    }
})

if(prompt.length <= 2) {
    console.log("Aucun argument renseigné")
}
