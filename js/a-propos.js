const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

moon.addEventListener("click", function() {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
    moon.style.display = "none";
    sun.style.display ="block"


});



const formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const inputs = document.querySelectorAll("input, textarea");
    let valid = true; 

    
    for (let input of inputs) {
        if (input.value.trim() === "") { 
            valid = false; 
            break; 
        }
    }

    
    if (valid) {
        alert("Formulaire envoyé !");
    } else {
        alert("Un champ est vide !");
    }
});

    


