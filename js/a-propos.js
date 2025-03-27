const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

moon.addEventListener("click", function() {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
    moon.style.display = "none";
    sun.style.display ="block"


});



// Sélection du formulaire
const formulaire = document.querySelector("form");

// Ajout d'un écouteur d'événement pour le soumission du formulaire
formulaire.addEventListener("submit", function(event) {
    // Empêche le comportement par défaut du formulaire (rechargement de la page lors de la soumission)
    event.preventDefault(); 

    // Sélectionne tous les éléments input et textarea dans le formulaire
    const inputs = document.querySelectorAll("input, textarea");

    // Variable pour vérifier si tous les champs sont remplis
    let valid = true; 

    // Parcours de tous les champs de saisie (input et textarea)
    for (let input of inputs) {
        // Si un champ est vide (après avoir retiré les espaces inutiles), la variable valid devient false
        if (input.value.trim() === "") { 
            valid = false; 
            break; // Arrête la boucle dès qu'un champ vide est trouvé
        }
    }

    // Si tous les champs sont remplis (valid est vrai), affiche une alerte de succès
    if (valid) {
        alert("Formulaire envoyé !");
    } else {
        // Sinon, affiche une alerte indiquant qu'un champ est vide
        alert("Un champ est vide !");
    }
});


    


