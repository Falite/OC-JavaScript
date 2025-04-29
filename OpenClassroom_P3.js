/*Selection avec GetElementById */
let mot = document.getElementById("inputEcriture")
console.log(mot)
let bouton = document.getElementById("btnValiderMot")
console.log(bouton)

/*Selection avec QuerySelector*/
let zoneScore = document.querySelector("#zoneScore")
console.log(zoneScore)

/*Selection avec QuerySelectorAll*/
let listeInputRadio = document.querySelectorAll(".zoneChoix input")
console.log(listeInputRadio)

/*Modifier un élément du DOM*/

let baliseImage = document.getElementById("randomImage")
baliseImage.setAttribute("alt", "image vraiment très random")
baliseImage.classList.add("imageRandom")

baliseImage.alt = "image tellement random"

/*Ajouter un bloc html entier*/
let Titreh2 = "impressionner les belles femmes";
let contenuparagraphe = "Impressionnez les belles femmes en jouant et en ayant un haut score";

let div = `
    <div>
        <h2>${Titreh2}</h2>
        <p>${contenuparagraphe}</p>
    </div>
`;

body.innerHTML += div;

/*Récupérer le bouton et ajouter un écouteur d'événement*/
let bouton2 = document.getElementById("Bouton_recommencer");
    bouton2.addEventListener("click", function(){
        console.log("Vous avez cliqué sur le bouton recommencer");
    });
