// Sélection du bouton de recherche et de l'input pour la recherche de recette
const button = document.querySelector(".section1 button"); 
const input = document.querySelector(".section1 input");   

// Ajout d'un écouteur d'événements pour lorsque le bouton est cliqué
button.addEventListener("click", function() { 
    // Sélectionne toutes les figures qui représentent des recettes
    const recettes = document.querySelectorAll("figure"); 

    // Boucle sur chaque recette pour vérifier si sa catégorie correspond à l'input
    for (let recette of recettes) {
        // Récupère la catégorie de chaque recette et la convertit en minuscules
        const categorie = recette.getAttribute("data-categorie").toLowerCase(); 
        
        // Compare la valeur de l'input avec la catégorie de la recette
        if (input.value.toLowerCase() === categorie) { 
            // Affiche la recette si elle correspond à la recherche
            recette.style.display = "block"; 
        } else {
            // Cache la recette si elle ne correspond pas à la recherche
            recette.style.display = "none"; 
        }
    }
});

// Sélectionne toutes les icônes de cœur pour les ajouter aux événements
const iconHearts = document.querySelectorAll("figure svg");
for(let iconHeart of iconHearts){
    // Ajoute un événement au clic sur chaque icône de cœur
    iconHeart.addEventListener("click", function(){
  
    // Vérifie si l'icône est rouge et la réinitialise ou la colore en rouge
    if(iconHeart === "red") {
        iconHeart.style.fill ="";
    }else{
        iconHeart.style.fill ="red";
    }
    })
};

// Sélectionne les icônes pour changer de thème
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

// Ajoute un événement pour le changement au thème sombre
moon.addEventListener("click", function() {
    document.body.classList.add("dark-theme"); // Applique le thème sombre
    localStorage.setItem("theme", "dark"); // Sauvegarde le thème dans le localStorage
    moon.style.display = "none"; // Cache l'icône de la lune
    sun.style.display ="block" // Affiche l'icône du soleil
});

// Ajoute un événement pour revenir au thème clair
sun.addEventListener("click", function() {
    document.body.classList.remove("dark-theme"); // Retire le thème sombre
    localStorage.setItem("theme", "light"); // Sauvegarde le thème dans le localStorage
  
    sun.style.display ="none"; // Cache l'icône du soleil
    moon.style.display="block"; // Affiche l'icône de la lune
});
