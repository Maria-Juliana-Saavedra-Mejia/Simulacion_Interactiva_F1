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
                <img class="pencil" src="../../img/pencil.png" onclick="editarEscuderias'${escuderia.id}')"/>
                <img class="trash" src="../../img/trash.png" onclick="eliminarEscuderias'${escuderia.id}')"/>
            </div>
        `;
    }

    const escuderiasCards = document.querySelectorAll(".escuderiasSeccion");
    escuderiasCards.forEach(card => {
        card.addEventListener('click', function(event) {
            if (event.target.classList.contains('pencil') || event.target.classList.contains('trash')) {
                return;
            }
            
            const escuderiaId = this.getAttribute('idescuderia');
        });
    });
}

async function  eliminarEscuderias(id) {
    if (confirm("¿Estás seguro de que deseas eliminar esta escuderia?")) {
        try {
            const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
            const data = response.data;
            
            const escuderiasActualizadas = data.escuderias.filter(escuderia => escuderia.id !== id);
            
            await axios.put(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`, {
                ...data,
                escuderias: escuderiasActualizadas
            });
            
            const elemento = document.querySelector(`[idescuderia="${id}"]`);
            if (elemento) {
                elemento.remove();
            }
            
        } catch (error) {
            console.log("Error al eliminar escuderia:", error);
        }
    }
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
                
                <h3 class="escuderiass">escuderias</h3>
                <div id="escuderiasEscuderia" class="escuderias-container"></div>
                
                <button id="cerrarDetalle" class="btn-cerrar">Volver</button>
            </div>
        `;
        
        escuderiaIndividual.style.display = "block";
        
        document.getElementById("cerrarDetalle").addEventListener('click', function() {
            escuderiaIndividual.style.display = "none";
        });
        
        await cargarescuderiasEscuderia(escuderia);
    } 
}

async function cargarescuderiasEscuderia(escuderia) {
    const escuderiasContainer = document.getElementById("escuderiasEscuderia");
    
    try {
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const todosLosescuderias = response.data.escuderias || [];
        
        const escuderiasEscuderia = todosLosescuderias.filter(piloto => 
            escuderia.escuderias && escuderia.escuderias.includes(piloto.id)
        );
        
        if (escuderiasEscuderia.length > 0) {
            escuderiasContainer.innerHTML = '';
            
            escuderiasEscuderia.forEach(piloto => {
                escuderiasContainer.innerHTML += `
                    <div class="piloto-card">
                        <img class="piloto-foto" src="${piloto.foto}" alt="${piloto.nombre}"/>
                        <h3>${piloto.nombre}</h3>
                        <p>Rol: ${piloto.rol || "Piloto"}</p>

                    </div>
                `;
            });
        } else {
            escuderiasContainer.innerHTML = "<p>No hay información disponible sobre los escuderias.</p>";
        }
    } catch (error) {
        console.error("Error al cargar los escuderias:", error);
        escuderiasContainer.innerHTML = "<p>Error al cargar la información de los escuderias.</p>";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let pilotoIndividual = document.getElementById("escuderiasIndividual");
    if (pilotoIndividual) {
        pilotoIndividual.style.display = "none";
    }
    
    mostrarescuderia();
});
