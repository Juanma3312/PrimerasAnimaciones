const items = document.querySelectorAll(".item");
const cortinaTop = document.querySelector(".top");
const cortinaBottom = document.querySelector(".bottom");
const salir = document.querySelector(".salir");
const burbuja = document.querySelector(".burbuja");

items.forEach((item) =>{
    item.addEventListener("click",()=>{
            cortinaTop.classList.toggle("abajo");
            cortinaBottom.classList.toggle("arriba")
            burbuja.classList.toggle("mover");
    })
});

salir.addEventListener("click", ()=>{
    cortinaTop.classList.remove("abajo");
    cortinaBottom.classList.remove("arriba");
    burbuja.classList.remove("mover");
})

console.log(burbuja)