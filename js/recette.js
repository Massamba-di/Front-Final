const btnFav = document.querySelector(".btn");

btnFav.addEventListener("click", function () {
    const recette = document.querySelector(".plat");

    if (recette) {
        localStorage.setItem("savefavoris", recette.outerHTML);
        alert("Recette ajoutée aux favoris !");
    } else {
        alert("Erreur : aucune recette trouvée !");
    }
});
    

  