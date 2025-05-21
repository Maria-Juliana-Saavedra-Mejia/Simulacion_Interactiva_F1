async function mostrarpilotos() {
    console.log("holaaaaaa")
    let piloto= document.getElementById("pilotosApi")
    const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
    console.log(response.data.pilotos)
    const data = response.data;
    console.log(data)
    for (let i = 0; i < data.pilotos.length; i++) {  
        console.log("funciona")
        let pilotos = data.pilotos[i];
        let nombre = pilotos.nombre;
        let img = pilotos.foto;
        let equipo = pilotos.equipo;
        piloto.innerHTML += `
            <div class="pilotosSeccion" id-Piloto="${pilotos.id}">
                <h1 class="Breaking">BREAKIG</h1>
                <div class="top-corner"></div>
                <img class="image" src="../../img/logoF1white.png"/>
                <img class="images" src="${img}"/>
                <h1 class="pilotosNames">${nombre}</h1>
                <h1 class="pilotosequipos">${equipo}</h1>
                <div class="down-corner"></div>
            </div>
        `;
    }
    const pilotosCards = document.querySelectorAll(".pilotosSeccion");
    pilotosCards.forEach(card => {
        card.addEventListener('click', function() {
            const pilotoId = this.getAttribute('id-Piloto');
            mostrarPilotoIndividual(pilotoId, data.pilotos);
        });
    });
}

async function mostrarPilotoIndividual(id, pilotos) {
    const pilotoIndividual = document.getElementById("pilotosindividual");
    const pilotoSeleccionado = pilotos.find(piloto => piloto.id === id);
    
    if (pilotoSeleccionado) {
        pilotoIndividual.innerHTML = `
            <div class="piloto-detalle">
                <img src="${pilotoSeleccionado.foto}" class="imagesVentana">
                <h2 class="nombre">${pilotoSeleccionado.nombre}</h2>
                <p class="equipo">Equipo: ${pilotoSeleccionado.equipo}</p>
                <p class="rol">Equipo: ${pilotoSeleccionado.rol}</p>
                <p class="fn">Equipo: ${pilotoSeleccionado.fechaNacimiento}</p>
                <p class="ln">Equipo: ${pilotoSeleccionado.lugarNacimiento}</p> 
                <button id="cerrarDetalle" class="btn-cerrar">Cerrar</button>
            </div>
        `;
        
        pilotoIndividual.style.display = "block";
        
        document.getElementById("cerrarDetalle").addEventListener('click', function() {
            pilotoIndividual.style.display = "none";
        });
    } else {
        console.error("Piloto no encontrado con ID:", id);
    }
}


mostrarpilotos();