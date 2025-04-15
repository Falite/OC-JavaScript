//structures conditionelles 
let mot = "beaux pieds "

if(mot==="beaux pieds"){
    console.log("Vous avez de beaux pieds")
}
else{
    console.log("Vous n'avez pas de beaux pieds")
}

//structure switch case

switch(mot){
    case "beaux pieds":
        console.log("Vous avez de beaux pieds")
        break;
    case "pieds normaux":
        console.log("Vous avez des pieds normaux, bof")
        break;
    case "pieds moches":
        console.log("Vous avez de très moches pieds")
        break;
    default:
        console.log("Vous n'avez pas de pieds")
        break;
}

//prompt 
const motApplication = 'pieds'
let motUtilisateur = prompt("Entrez un mot :"+motApplication)
if (motUtilisateur === motApplication){
    console.log("Vous avez bien tapé le mot")
}
else{
    console.log("Vous n'avez pas tapé le mot")
}

//Exercice jeu de mots 
console.log('Vive les beaux pieds mais surtout les très beaux pieds')

const listeMots = ["pieds","orteils","ongles","plantes","talons"]
let score=0

motApplication2 = listeMots[0]

let motUtilisateur2 = prompt("Entrez un mot :"+motApplication2)
if (motUtilisateur2 === motApplication2){
    console.log("Vous avez bien tapé le mot")
    score++
}
else{
    console.log("Vous n'avez pas tapé le mot")
}
motApplication = listeMots[1]
motUtilisateur2 = prompt("Entrez un mot :"+motApplication2)  
if (motUtilisateur2 === motApplication2){
    console.log("Vous avez bien tapé le mot")
    score++
}
else{
    console.log("Vous n'avez pas tapé le mot")
}
motApplication2 = listeMots[2]
motUtilisateur2 = prompt("Entrez un mot :"+motApplication2)
if (motUtilisateur2 === motApplication2){
    console.log("Vous avez bien tapé le mot")
    score++
}
else{
    console.log("Vous n'avez pas tapé le mot")
}
motApplication2 = listeMots[3]
motUtilisateur2 = prompt("Entrez un mot :"+motApplication2)
if (motUtilisateur2 === motApplication2){
    console.log("Vous avez bien tapé le mot")
    score++
}
else{
    console.log("Vous n'avez pas tapé le mot")
}
motApplication2 = listeMots[4]
motUtilisateur2 = prompt("Entrez un mot :"+motApplication2)
if (motUtilisateur === motApplication){
    console.log("Vous avez bien tapé le mot")
    score++
}
else{
    console.log("Vous n'avez pas tapé le mot")
}
console.log("Votre score est de "+score+" sur 5")
console.log("Merci d'avoir joué")
//Fin du script

//Structure for
console.log('Vive les beaux pieds mais surtout les très beaux pieds')

/*const listeMots = ["pieds","orteils","ongles","plantes","talons"]*/
/*let*/ score=0

for (let i = 0; i < listeMots.length; i++){
    let motApplication3 = listeMots[i]
    let motUtilisateur3 = prompt("Entrez un mot : "+motApplication3)
    if (motUtilisateur3 === motApplication3){
        console.log("Vous avez bien tapé le mot")
        score++
    }
    else{
        console.log("Vous n'avez pas tapé le mot")
    }
}
console.log("Votre score est de "+score+" sur 5")
console.log("Merci d'avoir joué")