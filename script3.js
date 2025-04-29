let baliseNom = document.getElementById("name")
let baliseEmail = document.getElementById("email")
let baliseMessage = document.getElementById("message")
let baliseFemme = document.getElementById("femme")

let nom = baliseNom.value
console.log(nom)

let femme = baliseFemme.checked
console.log(femme)

let listeMenstruations = document.querySelectorAll("input[type=radio]")
for (let i=0; i<listeMenstruations.length; i++){
    listeMenstruations[i].addEventListener("click", function(){
        console.log(listeMenstruations[i].value)
    })
}

form = document.getElementById("formulaire")
form.addEventListener("submit", (event)=>{
    event.preventDefault()
   
    let baliseFemme = document.getElementById("femme")
    let Femme = baliseFemme.valie
    let baliseEmail = document.getElementById("email")
    let email = baliseEmail.value
    let baliseNom = document.getElementById("name")
    let nom = baliseNom.value
    let baliseMessage = document.getElementById("message")
    let message = baliseMessage.value
})
