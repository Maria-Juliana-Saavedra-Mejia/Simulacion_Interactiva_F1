console.log("holiiiiiiiiiiii")

let usuario = document.getElementById("user").value;
let contraseña = document.getElementById("password").value;
const nextPage = document.getElementById("boton");
nextPage.addEventListener("click", function() {
    usuario = document.getElementById("user").value;
    contraseña = document.getElementById("password").value;
    if (usuario === "Usuario" && contraseña === "campus2023") {
        window.locationhref = "../html/Usuario/paginaPrincipal.html"; 
    }
    else if(usuario === "Administrador" && contraseña === "campus2023") {
        window.locationhref = "../html/admin/paginaPrincipal.html"; 
    } 
    else {
        let mensaje = document.getElementById("mesaje");
        mensaje.innerHTML = `
        <p class="mensajito">Clave o Usuario incorrecto</p>
        `;
    }
});
