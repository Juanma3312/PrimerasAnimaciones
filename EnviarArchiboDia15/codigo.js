const file = document.querySelector(".file");
const fileContainer = document.querySelector(".fileContainer");
const boton = document.querySelector(".botom");
const barraCarga = document.querySelector(".barraCarga");
const carga = document.querySelector(".carga");
const error = document.querySelector(".error");

 let cambio;
file.addEventListener("change", (event)=> {
    let name = event.target.files[0].name;
    fileContainer.textContent = name;
    cambio = true;
    error.textContent = "";
});

boton.addEventListener("click", (event)=>{
    if(cambio) {
        fileContainer.classList.add("active");
        fileContainer.innerHTML = 
        `
            <ion-icon class="icon progres " name="sync"></ion-icon>
        `;
        boton.textContent = " Uploading..."
        barraCarga.classList.add("active");
        carga.classList.add("active");
        setTimeout(()=>{
            fileContainer.innerHTML = 
            `
                <ion-icon class="icon check" name="checkmark-sharp"></ion-icon>
            `;
            boton.textContent = "Upload Complete";
            error.textContent = "Archivo enviado"

        }, 2000);
        boton.classList.add("disabled");
        cambio = false;
    }else {
    }
})