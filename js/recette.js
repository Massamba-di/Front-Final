// Sélection des éléments des icônes de la lune et du soleil
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

// Ajoute un événement au clic sur l'icône de la lune
moon.addEventListener("click", function() {
    // Applique la classe 'dark-theme' au body pour activer le thème sombre
    document.body.classList.add("dark-theme"); 

    // Sauvegarde le thème sombre dans le localStorage afin qu'il soit persistant
    localStorage.setItem("theme", "dark"); 

    // Cache l'icône de la lune après son clic
    moon.style.display = "none";

    // Affiche l'icône du soleil après le clic sur la lune
    sun.style.display ="block";
});



// sun.addEventListener("click", function() {
//     document.body.classList.remove("dark-theme"); 
//     localStorage.setItem("theme", "light");
  
//         sun.style.display ="none";
//         moon.style.display="block";

   
        
    

// });











const btnFav = document.querySelector(".btn");

btnFav.addEventListener("click", function () {
    const recette = document.querySelector(".plat");

    if (recette) {
     localStorage.setItem ("savefavoris", recette.outerHTML);
    
        alert("Recette ajoutée aux favoris !");
    } else {
        alert("Erreur : aucune recette trouvée !");
    }
});
    

  