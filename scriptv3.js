

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

function afficherProposition(proposition){
    let ZoneProposition = document.querySelector(".zoneProposition")
    ZoneProposition.innerHTML = proposition
}

function lancerJeu(){
    let score = 0
    let nbmots = 0
    let listeProp = listeMots

    let boutonValidation = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    let i = 0
    afficherProposition(listeProp[i])
    boutonValidation.addEventListener("click",()=>{
        i++
        inputEcriture.value = ""
        if(listeProp[i] === undefined){
            afficherProposition("Fin du jeu")
            boutonValidation.disabled = true
        }else{
            afficherProposition(listeProp[i])}
        if (inputEcriture.value === listeProp[i]){
            console.log("Vous avez bien tapé")
            score++
        }
        else{
            console.log("Vous n'avez pas bien tapé")
        }
        console.log(i)
        console.log("Vous avez cliqué sur le bouton valider")
        console.log("Vous avez écrit : " + inputEcriture.value)
    })

    let listeChoix = document.querySelectorAll(".zoneChoix input")
    for (let index=0; index < listeChoix.length; index++){
        listeChoix[index].addEventListener("change", (event)=>{
            console.log(event.target.value)
            if(event.target.value === "1"){
                nbmots = listeMots.length
                listeProp = listeMots
        }
            else if(event.target.value === "2"){
                nbmots = listePhrases.length
                listeProp = listePhrases
            }
            afficherProposition(listeProp[i])
        })
    }
    
    afficherResultatv2(score, nbmots)

    gérerFormulaire()
   
}



lancerJeu()
