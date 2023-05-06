console.log("Exercice 7: Inverser une chaîne")

const prompt = process.argv

//on enlève les deux premiers résultats qui sont inutiles et on transforme le tableau en chaîne de caractère avec espace pour bien séparer chaque argument
const str = prompt.slice(2).join(" ")

//on vérifie que l'argument est bien une chaîne de caractère
if (typeof str !== "string") {
    console.log("Erreur: L'argument doit être une chaîne de caractère")
    process.exit(1)
} else {
    //on utilise la méthode split pour transformer la chaîne de caractère en tableau en ne mettant aucun espace entre les guillemets car sinon seul els mots serait inversé et non toute la phrase
    //on utilise la méthode reverse pour inverser le tableau car faut que ce soit un tableau
    //on utilise la méthode join pour transformer le tableau en chaîne de caractère car chaque item est une lettre
    // normalement ya pas besoin de tout ça mais vu qu'on a du vérifier que l'zrgument était bien une chaîne de caractère on est obligé
    console.log(str.split("").reverse().join(""))
}

