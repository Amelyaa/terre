console.log("Exercice 11: Nombre premier")

//on récupère l'argument concerné car on s'en fout des premiers
const nombre = process.argv[2]

//on vérifie que l'agument est inférieur à 2 car 2 est le premier nombre premier
if (nombre < 2) {
    console.log(`Non, ${nombre} n'est pas un nombre premier.`)
} else {
    //On vérifie que le nombre est premier en testant s'il est divisible par un nombre inférieur à sa racine carrée
    let isFirst = true
    for (let diviseur = 2; diviseur <= Math.sqrt(nombre); diviseur++) {
        if (nombre % diviseur === 0) {
            isFirst = false
            //si le nombre est divisible par un nombre inférieur à sa racine carrée, on arrête la boucle
            break
        }
    }
    if (isFirst) {
        console.log(`Oui, ${nombre} est un nombre premier.`)
    } else {
        console.log(`Non, ${nombre} n'est pas un nombre premier.`)
    }
}
