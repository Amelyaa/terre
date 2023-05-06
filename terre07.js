console.log("Exercice 8: Taille d'une chaîne")

const prompt = process.argv

//on enlève les deux premiers résultats qui sont inutiles et on transforme le tableau en chaîne de caractère avec espace pour bien séparer chaque argument
const str = prompt.slice(2).join(" ")

//on vérifie que l'argument est bien une chaîne de caractère et qu'il n'y a qu"un seul argument entre les guillemets et qu'il n'est pas un nombre
if (typeof str !== "string" || prompt.length !== 3 || !isNaN(str)) {
    console.log("Erreur: L'argument doit être une chaîne de caractère et il ne doit y avoir qu'un seul argument, utilisez les guillemets (\"\")")
    process.exit(1)
} else {
    //on utilise la méthode length pour avoir la taille de la chaîne de caractère
    console.log(str.length)
}


