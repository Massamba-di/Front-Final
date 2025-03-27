const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

moon.addEventListener("click", function() {
    document.body.classList.add("dark-theme"); 
    localStorage.setItem("theme", "dark"); 
    moon.style.display = "none";
    sun.style.display ="block"
   
    
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
    

  