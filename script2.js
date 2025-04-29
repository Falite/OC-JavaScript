

/*Définition des variables contenant le texte du titre et du paragaphe*/
let titre = "Jeu de mots";
let ContenuParagraphe = "Le but du jeu est de trouver le mot ou la phrase en fonction de l'indice donné. Vous pouvez choisir entre les mots et les phrases. Amusez-vous bien !";

/*Création d'un div avec ceateElement*/
/*On va créer un titre h1 et un paragraphe p*/
let NouvelleDiv = document.createElement("div");
let NouveauTitre = document.createElement("h1");
let NouveauParagraphe = document.createElement("p");

/*On ajoute du texte dans le titre et le paragraphe*/
NouveauTitre.textContent = titre;
NouveauParagraphe.textContent = ContenuParagraphe;

/*On ajoute le titre et le paragraphe dans la div*/
NouvelleDiv.appendChild(NouveauTitre);
NouvelleDiv.appendChild(NouveauParagraphe);

/*On ajoute la div dans le body*/
let body = document.querySelector("body");
body.appendChild(NouvelleDiv);


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
let bouton = document.getElementById("Bouton_recommencer");
    bouton.addEventListener("click", function(){
        console.log("Vous avez cliqué sur le bouton recommencer");
    });
