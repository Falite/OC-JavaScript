//Récupérer un élément d'un formulaire


let baliseNom = document.getElementById("name")
let baliseEmail = document.getElementById("email")
let baliseMessage = document.getElementById("message")
let baliseFemme = document.getElementById("femme")

let nom = baliseNom.value
console.log(nom)

//Récupérer un élément d'un "radio button"

let femme = baliseFemme.checked
console.log(femme)

//Récupérer un élément d'un formulaire quand il est submit 

form = document.getElementById("formulaire")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
   
    let baliseFemme = document.getElementById("femme")
    let Femme = baliseFemme.value
    let baliseEmail = document.getElementById("email")
    let email = baliseEmail.value
    let baliseNom = document.getElementById("name")
    let nom = baliseNom.value
    let baliseMessage = document.getElementById("message")
    let message = baliseMessage.value
})

//Vérifier le format d'un formulaire 

function verifierEmail(baliseEmail){
    let email = baliseEmail.value
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(email)){
        return true
    }
    else{
        return false
    }
}

function verifiertétés(baliseTété){
    let tété = baliseTété.value
    let regextété = new RegExp("^(100|[1-9][0-9]?)[A-F]$")
    if (regextété.test(tété)){
        return true
    }
    else{
        return false
    }
}

//Gérer les erreurs et les exceptions 

form.addEventListener("submit", (event)=>{
    baliseNom = document.getElementById("name")
    baliseEmail = document.getElementById("email")
    baliseMessage = document.getElementById("message")
    baliseTété = document.getElementById("taille_tétés")
    try{
    TargetNom=event.target.elements[0].value
    verifierchamp(targetNom)
    TargetEmail=event.target.elements[1].value
    verifierchamp(targetEmail)
    TargetMessage=event.target.elements[2].value
    verifierchamp(targetMessage)
    }catch (error){
        console.log(error.message)
    }
    
    if (verifierEmail(baliseEmail) == false){
        console.log("L'adresse email n'est pas valide")
    }
    else{
        console.log("L'adresse email est valide")
    }
    if (verifiertétés(baliseTété) == false){
        console.log("La taille des tétés n'est pas valide")
    }
    else{
        console.log("Le tété est valide")
    }

})

function vérifierChamp(champ){
    if (champ.value == ""){
        throw new Error("Veuillez remplir tous les champs")}
}