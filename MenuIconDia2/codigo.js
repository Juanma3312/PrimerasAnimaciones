const menu = document.querySelector(".subContainer");
const uno = document.querySelector(".uno");
const dos = document.querySelector(".dos");
const tres = document.querySelector(".tres");

menu.addEventListener("click", ()=>{
    let comprobacion = menu.classList.contains("accion");
    if(comprobacion){
        menu.classList.remove("accion");
        uno.classList.remove("unoo");
        dos.classList.remove("doss");
        tres.classList.remove("tress");
    } else {
        menu.classList.add("accion");
        uno.classList.add("unoo");
        dos.classList.add("doss");
        tres.classList.add("tress");
    }
});

