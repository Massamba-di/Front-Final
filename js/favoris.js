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
document.addEventListener("DOMContentLoaded", function () {

    const select = document.querySelector("#favoris");
    const affiche = document.querySelector("#container");

    // Récupère la recette stockée dans localStorage
    const recette = localStorage.getItem("savefavoris");

    // Vérifie si une recette est stockée
    if (recette) {
        select.addEventListener("change", function () {
            const selValue = select.value; // Valeur de l'option sélectionnée

            // Si l'utilisateur sélectionne "mes favoris", on affiche la recette
            if (selValue === "riz au poisson" && recette) {
                affiche.innerHTML = recette; // Afficher la recette dans le container
            } else {
                affiche.innerHTML = "<p>Aucune recette enregistrée pour ce plat.</p>";
            }
        });
    } else {
        alert("Aucune recette n'est enregistrée dans les favoris.");
    }
});

const button = document.querySelector(".delete");
button.addEventListener("click",function(){
    cons

  

})