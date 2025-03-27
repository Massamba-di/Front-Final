// Sélection des éléments pour les icônes de lune et de soleil
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

// Ajoute un événement au clic sur l'icône de la lune
moon.addEventListener("click", function() {
    // Ajoute la classe 'dark-theme' au body pour appliquer le thème sombre
    document.body.classList.add("dark-theme");

    // Sauvegarde le thème sombre dans le localStorage pour persistance
    localStorage.setItem("theme", "dark");

    // Cache l'icône de la lune et affiche l'icône du soleil
    moon.style.display = "none";
    sun.style.display = "block";
});

// Ajoute un événement au chargement complet du DOM
document.addEventListener("DOMContentLoaded", function () {

    const select = document.querySelector("#favoris");
    const affiche = document.querySelector("#container");

    // Récupère la recette stockée dans le localStorage sous "savefavoris"
    const recette = localStorage.getItem("savefavoris");

    // Vérifie si une recette a été stockée
    if (recette) {
        // Ajoute un événement au changement de sélection dans le menu déroulant
        select.addEventListener("change", function () {
            const selValue = select.value; // Récupère la valeur de l'option sélectionnée

            // Si l'utilisateur sélectionne "riz au poisson" et que la recette est stockée
            if (selValue === "riz au poisson" && recette) {
                // Affiche la recette dans le container
                affiche.innerHTML = recette;
            } else {
                // Si aucune recette n'est sélectionnée, affiche un message
                affiche.innerHTML = "<p>Aucune recette enregistrée pour ce plat.</p>";
            }
        });
    } else {
        // Si aucune recette n'est enregistrée, affiche une alerte
        alert("Aucune recette n'est enregistrée dans les favoris.");
    }
});

// Sélection du bouton de suppression
const button = document.querySelector(".delete");
button.addEventListener("click", function() {
    // Le code pour supprimer la recette n'est pas encore complet
    // Vous pouvez ajouter ici la logique pour supprimer la recette enregistrée
    cons  // Cette ligne semble incomplète, il manque la logique de suppression
});
