console.log("holiiiiiiiiiiii")

let usuario = document.getElementById("user").value;
let contraseña = document.getElementById("password").value;
const nextPage = document.getElementById("boton");

nextPage.addEventListener("click", function() {
    // Get current values when the button is clicked
    usuario = document.getElementById("user").value;
    contraseña = document.getElementById("password").value;
    
    // String comparison requires quotes around string literals
    // And logical AND is && not &
    if (usuario === "Usuario" && contraseña === "campus2023") {
        // Redirect to user page
        window.location.href = "../html/Usuario/paginaPrincipal.html"; // Replace with your user page URL
    }
    else if(usuario === "Administrador" && contraseña === "campus2023") {
        // Redirect to admin page
        window.location.href = "../html/admin/paginaPrincipal.html"; // Replace with your admin page URL
    } 
    else {
        let mensaje = document.getElementById("mesaje");
        mensaje.innerHTML = `
        <p class="mensajito">Clave o Usuario incorrecto</p>
        `;
    }
});
