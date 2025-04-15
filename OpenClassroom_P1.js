saut = "\n"

//Exercice Livres 
totalLivres = 500
totalLivres += 50
console.log("Nombre de livres après l'achat de 50 "+totalLivres+saut)

totalLivres -= 10
console.log("Nombre de livres après le débarras de 10 "+totalLivres+saut)

totalLivres += 5
console.log("Nombre de livres après le rachat de 5 "+totalLivres+saut)

//Exercice Cinéma
let ticket = {
    nomFilm: "L'Empire",
    prix: 9.50,
    numeroSalle: 4,
}

nom = "Omarjee"

console.log("Bonjour "+nom+','+' votre film '+ticket.nomFilm+' est en salle '+ticket.numeroSalle+saut)

//Exercice Tableaux 
let maCollexction = ["Le Fil", "Beetlejuice Beetlejuice", "Juliette au printemps", 
    "Border Line", "Aïcha", "Pauvres Créatures", "Notre Monde"]
maCollexction.push("Civil War")

console.log(maCollexction.length+saut)

let playlist = ["59 c'est le phalempin", "URSS anthem", "Super Idol"]
let totalMorceaux = playlist.length
playlist.push("Coco")
playlist.push("Anissa")
playlist.pop("Anissa")

console.log(playlist+saut+totalMorceaux+saut)
