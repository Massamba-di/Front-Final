const select = document.querySelector("#avoris");
select.addEventListener("change",function(){

   const selectvalue = select.value;

const recette=localStorage.getItem("savefavoris");
if(selectvalue !== recette){
   
    alert("veuilliz faire un choix");

    }else{

        alert("vous avez un choix");

    }
})