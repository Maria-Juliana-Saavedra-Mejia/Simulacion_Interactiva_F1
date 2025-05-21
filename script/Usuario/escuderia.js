async function mostrarescuderia() {
    console.log("holaaaaaa")
    let escuderiasc= document.getElementById("escuderiasApi")
    const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
    console.log(response.data.escuderias)
    const data = response.data;
    console.log(data)
    for (let i = 0; i < data.escuderias.length; i++) {  
        console.log("funciona")
        let escuderia = data.escuderias[i];
        let nombre = escuderia.nombre;
        let img = escuderia.escudo;
        escuderiasc.innerHTML += `
            <div class="escuderiasSeccion" idescuderia="${escuderia.id}">
                <img class="images" src="${img}"/>
                <h1 class="escuderiaNames">${nombre}</h1>
            </div>
        `;
    }
    const botonesDetalles = document.querySelectorAll(".escuderiasSeccion");
    botonesDetalles.forEach(escuderiaDiv => {
        escuderiaDiv.addEventListener('click', function() {
            const escuderiaId = this.getAttribute('idescuderia');
            mostrarescuderiaIndividual(escuderiaId, data.escuderias);
        });
    });
}


async function mostrarescuderiaIndividual(escuderiaId, escuderias) {
    const escuderia = escuderias.find(e => e.id === escuderiaId);
    
    const escuderiaIndividual = document.getElementById("escuderiasIndividual");
    
    if (escuderiaIndividual) {
        escuderiaIndividual.innerHTML = `
            <div class="escuderia-detalle">
                <img src="${escuderia.escudo}" class="escuderia-logo">
                <h2 class="nombre">${escuderia.nombre}</h2>
                <p class="pais">País: ${escuderia.pais}</p>
                <p class="motor">Motor: ${escuderia.motor}</p>
                
                <h3>Pilotos</h3>
                <div id="pilotosEscuderia" class="pilotos-container"></div>
                
                <button id="cerrarDetalle" class="btn-cerrar">Volver a todas las escuderías</button>
            </div>
        `;
        
        escuderiaIndividual.style.display = "block";
        
        document.getElementById("cerrarDetalle").addEventListener('click', function() {
            escuderiaIndividual.style.display = "none";
        });
        
        await cargarPilotosEscuderia(escuderia);
    } 
}

async function cargarPilotosEscuderia(escuderia) {
    const pilotosContainer = document.getElementById("pilotosEscuderia");
    
    try {
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const todosLosPilotos = response.data.pilotos || [];
        
        const pilotosEscuderia = todosLosPilotos.filter(piloto => 
            escuderia.pilotos && escuderia.pilotos.includes(piloto.id)
        );
        
        if (pilotosEscuderia.length > 0) {
            pilotosContainer.innerHTML = '';
            
            pilotosEscuderia.forEach(piloto => {
                pilotosContainer.innerHTML += `
                    <div class="piloto-card">
                        <img class="piloto-foto" src="${piloto.foto}" alt="${piloto.nombre}"/>
                        <h3>${piloto.nombre}</h3>
                        <p>Rol: ${piloto.rol || "Piloto"}</p>
                        <p>Fecha de nacimiento: ${piloto.fechaNacimiento}</p>
                        <p>Lugar de nacimiento: ${piloto.lugarNacimiento}</p>
                    </div>
                `;
            });
        } else {
            pilotosContainer.innerHTML = "<p>No hay información disponible sobre los pilotos.</p>";
        }
    } catch (error) {
        console.error("Error al cargar los pilotos:", error);
        pilotosContainer.innerHTML = "<p>Error al cargar la información de los pilotos.</p>";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let pilotoIndividual = document.getElementById("escuderiasIndividual");
    if (pilotoIndividual) {
        pilotoIndividual.style.display = "none";
    }
    
    mostrarescuderia();
});