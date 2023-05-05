console.log("Exercice 1: L'alphabet")

const alphabet = "abcdefghijklmnopqrstuvwxyz"

//Méthode 1
for (const letter in alphabet) {
    console.log(alphabet[letter])
}

//Méthode 2
/*for (let i = 0; i < alphabet.length; i++) {
    console.log(alphabet[i])
}*/
