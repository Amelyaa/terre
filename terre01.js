console.log("Exercice 2: Nom du programme")
//On récupère le nom du fichier le problème c'est qu'il y a le chemin complet et donc il faut trouver un moyen de le supprimer
//Du coup on récupère uniquement le répertoire et on conte sa taille pour garder que le nom du fichier et + 1 pour le \
console.log(__filename.substring(__dirname.length + 1))

//Méthode 2 beaucoup que j'ai trouver en cherchant pour l'exercice 3 (oui j'ai fait trop compliqué x))
const path = require('path')
console.log(path.basename(__filename))
