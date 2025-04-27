function retourneScore(score,nombreQuestions){
    let message = "Votre score est de " + score + " sur " + nombreQuestions
    return message
}

function afficherResultat(score, nombreQuestions){
    let message = retourneScore(score, nombreQuestions)
    console.log(message)
}

function afficherResultatv2(score, nombreQuestions){
    let message = retourneScore(score, nombreQuestions)
    let spanscore = document.querySelectorAll(".zoneScore span")
    let affichageScore = `${score} / ${nombreQuestions}`
    spanscore.innetText = affichageScore
    console.log(message)
}

function choisirPhraseOuMot(){
    let choix = prompt("Choisissez phrases ou mots :")
    while(choix !== "phrases" && choix !== "mots"){
        console.log("Vous devez choisir entre phrases ou mots")
        choix = prompt("Choisissez phrases ou mots :")
    }
    return choix
}

function lancerBoucleDeJeu(choix){
    let liste
    let score = 0
    if(choix=='phrases'){liste=listePhrases}
    else if(choix=='mots'){liste=listeMots}
    for(let i=0; i<liste.length; i++){
        let motApplication = liste[i]
        let motUtilisateur = prompt("Entrez : "+motApplication)
        if (motUtilisateur === motApplication){
            console.log("Vous avez bien tapé")
            score++
        }
        else{
            console.log("Vous n'avez pas bien tapé")
        }
    }
    return score 
}

function lancerJeu(){
    let choix = choisirPhraseOuMot()
    let score = 0
    let nbmots = 0
    if (choix === "phrases"){
        nbmots = listePhrases.length
        liste = listePhrases
    }
    else if (choix === "mots"){
        nbmots = listeMots.length
        liste = listeMots
    }
    score = lancerBoucleDeJeu(choix)
    afficherResultatv2(score, liste.length)
    console.log("Merci d'avoir joué")
}

lancerJeu()
