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
}
