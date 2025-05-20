console.log("holiiiiiiiiiiii")

const nextPage = document.getElementById("boton");
nextPage.addEventListener("click", function() {
    usuario = document.getElementById("user").value;
    contraseña = document.getElementById("password").value;
    if (usuario === "Usuario" && contraseña === "campus2023") {
        window.location.href = "../html/Usuario/paginaPrincipal.html"; 
    }
    else if(usuario === "Administrador" && contraseña === "campus2023") {
        window.location.href = "../html/admin/paginaPrincipal.html"; 
    } 
    else {
        let mensaje = document.getElementById("mesaje");
        mensaje.innerHTML = `
        <p class="mensajito">Clave o Usuario incorrecto</p>
        `;
    }
});
