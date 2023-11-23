const icon = document.querySelector(".icon");
const barraBusqueda = document.querySelector(".barraBusqueda");
const menuIcon = document.querySelector(".menuIcon");
const menuDesplega = document.querySelector(".menuDesplega");
const subContainer = document.querySelector(".subContainer");


menuIcon.addEventListener("click" ,()=>{
    menuDesplega.classList.toggle("desplegado");
    subContainer.classList.toggle("replegado");

})

icon.addEventListener("click", ()=>{
    barraBusqueda.classList.toggle("active");
});