let baliseZoneProposition = document.getElementById("zoneProposition")
console.log(baliseZoneProposition)

//let listeInputRadio = document.querySelectorAll(".zoneChoix input")
//console.log(listeInputRadio)

/*for (let i = 0; i < listeInputRadio.length; i++){
    listeInputRadio[i].addEventListener("click", function(){
        console.log(listeInputRadio[i].value)
        baliseZoneProposition.innerHTML = listeInputRadio[i].value
        if (listeInputRadio[i].value === "phrases"){
            baliseZoneProposition.innerHTML = listePhrases.join(", ")
        }
        else if (listeInputRadio[i].value === "mots"){
            baliseZoneProposition.innerHTML = listeMots.join(", ")
        }
    })
}*/

/*Séléectionner des éléments du DOM*/

// Selection avec GetElementById
let mot = document.getElementById("inputEcriture")
console.log(mot)
let boutonValider = document.getElementById("btnValiderMot")
console.log(boutonValider)

// Selection avec QuerySelector
let zoneScore = document.querySelector("#zoneScore")
console.log(zoneScore)

// Selection avec QuerySelectorAll
let listeInputRadio = document.querySelectorAll(".zoneChoix input")
console.log(listeInputRadio)

/*Modifier un élément du DOM*/

let baliseImage = document.getElementById("randomImage")
baliseImage.setAttribute("alt", "image vraiment très random")
baliseImage.classList.add("imageRandom")

baliseImage.alt = "image tellement random"