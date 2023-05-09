console.log("Exercice 14: Trouver la Suisse")

const num1 = parseInt(process.argv[2])
const num2 = parseInt(process.argv[3])
const num3 = parseInt(process.argv[4])

//on vérifie que les arguments sont bien des nombres et qu'il y en a bien 3
if (process.argv.length !== 5) {
    console.log("Erreur : Le programme prend exactement trois arguments entiers.")
    process.exit(1)
}

let milieu

//on vérifie que les arguments ne sont pas identiques
if (num1 === num2 && num2 === num3) {
    console.log("Erreur : Les nombres sont tous égaux.")
    process.exit(1)
}

//on utilise un switch pour trouver le nombre du milieu en comparant les nombres deux à deux et on met à true pour faire fonctionner le switch et éviter plein de if else
switch (true) {
    //si le premier nombre est plus grand que le deuxième et le troisième, c'est le nombre du milieu
    //si le premier nombre est plus petit que le deuxième et le troisième, c'est le nombre du milieu
    //et ainsi de suite pour les autres cas
    case num1 <= num2 && num2 <= num3:
    case num3 <= num2 && num2 <= num1:
        milieu = num2
        break
    case num2 <= num1 && num1 <= num3:
    case num3 <= num1 && num1 <= num2:
        milieu = num1
        break
    case num1 <= num3 && num3 <= num2:
    case num2 <= num3 && num3 <= num1:
        milieu = num3
        break
    default:
        console.log("Erreur : Ce ne sont pas des chiffres.")
        process.exit(1)
}

console.log(milieu)
