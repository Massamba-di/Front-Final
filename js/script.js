const button = document.querySelector(".section1 button"); 
const input = document.querySelector(".section1 input");   

button.addEventListener("click", function() { 
    const recettes = document.querySelectorAll("figure"); 

    for (let recette of recettes) {
        const categorie = recette.getAttribute("data-categorie").toLowerCase(); 
        if (input.value.toLowerCase() === categorie) { 
            recette.style.display = "block"; 
        } else {
            recette.style.display = "none"; 
        }
    }
});

const iconHearts = document.querySelectorAll("figure svg");
for(let iconHeart of iconHearts){
    iconHeart.addEventListener("click",function(){

  
    if(iconHeart === "red") {
        iconHeart.style.fill ="";
    }else{
        iconHeart.style.fill ="red";
    }
    
})
};

const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

moon.addEventListener("click", function() {
    document.body.classList.add("dark-theme"); 
    localStorage.setItem("theme", "dark"); 
    moon.style.display = "none";
    sun.style.display ="block"
   
    
});


sun.addEventListener("click", function() {
    document.body.classList.remove("dark-theme"); 
    localStorage.setItem("theme", "light");
  
        sun.style.display ="none";
        moon.style.display="block";

   
        
    

});

