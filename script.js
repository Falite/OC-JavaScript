console.log('Vive les beaux pieds mais surtout les très beaux pieds')

const listeMots = ["pieds","orteils","ongles","plantes","talons"]
let score=0
const listePhrases=["Les pieds sont la partie du corps la plus sensuelle",
    "La belle manucure est un bijoux",
    "La plante de pied rosée est un délice"]

const phrases="phrases"
const mots="mots"

let choix = prompt("Choisissez phrases ou mots :")
while(choix !== phrases && choix !== mots){
    console.log("Vous devez choisir entre phrases ou mots")
    choix = prompt("Choisissez phrases ou mots :")
}
if(choix === phrases){
    console.log("Vous avez choisi phrases")
    for(let i=0; i<listePhrases.length; i++){
        let phraseApplication = listePhrases[i]
        let phraseUtilisateur = prompt("Entrez une phrase : "+phraseApplication)
        if (phraseUtilisateur === phraseApplication){
            console.log("Vous avez bien tapé la phrase")
            score++
        }
        else{
            console.log("Vous n'avez pas tapé la phrase")
        }
    }
    console.log("Votre score est de "+score+" sur 3")
    console.log("Merci d'avoir joué")
}
else if(choix === mots){
    console.log("Vous avez choisi mots")
    for(let i=0; i<listeMots.length; i++){
        let motApplication = listeMots[i]
        let motUtilisateur = prompt("Entrez un mot : "+motApplication)
        if (motUtilisateur === motApplication){
            console.log("Vous avez bien tapé le mot")
            score++
        }
        else{
            console.log("Vous n'avez pas tapé le mot")
        }
    }
    console.log("Votre score est de "+score+" sur 5")
    console.log("Merci d'avoir joué")
}
    
