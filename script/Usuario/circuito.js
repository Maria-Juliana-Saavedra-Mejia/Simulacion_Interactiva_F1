async function mostrarCircuitos() {
    console.log("holaaaaaa")
    let circuitos= document.getElementById("circuitosApi")
    const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
    console.log(response.data.circuitos)
    const data = response.data;
    for (let i = 0; i < data.circuitos.length; i++) {
        let circuito = data.circuitos[i];
        let nombre = circuito.nombre;
        let img = circuito.imagen;
        
        circuitos.innerHTML += `
        <div class="cosita" idcircuito="${circuito.id}">
            <img class="images" src="${img}"/>
            <h1 class="circuitNames">${nombre}</h1>
        </div>

`
    }
    const botonesDetalles = document.querySelectorAll(".cosita");
    botonesDetalles.forEach(circuitoDiv => {
        circuitoDiv.addEventListener('click', function() {
            const circuitoId = this.getAttribute('idcircuito');
            mostrarcircuitoIndividual(circuitoId, data.circuitos);
        });
    });
}


async function mostrarcircuitoIndividual(circuitoId, circuitos) {
    const circuito = circuitos.find(c => c.id === circuitoId);
    const circuitoIndividual = document.getElementById("circuitoIndividual");
    
    if (circuitoIndividual) {
        circuitoIndividual.innerHTML = `
            <div class="circuito-detalle">
                <h2 class="nombre">${circuito.nombre}</h2>
                <img src="${circuito.imagen}" class="circuito-imagen">
                <p class="pais">País: ${circuito.pais}</p>
                <p class="longitud">Longitud: ${circuito.longitud_km} km</p>
                <p class="vueltas">Vueltas: ${circuito.vueltas}</p>
                <p class="descripcion">Descripción: ${circuito.descripcion}</p>
                
                <p class="vuelta-rapida">Vuelta más rápida: ${circuito.vuelta_rapida || 'No disponible'}</p>
                <p class="piloto-vuelta-rapida">Piloto: ${circuito.piloto_vuelta_rapida || 'No disponible'}</p>
                
                <h3 class="ganadoress">Ganadores por año</h3>
                <div id="ganadoresCircuito" class="ganadores-container"></div>
                
                <button id="cerrarDetalle" class="btn-cerrar">Volver</button>
            </div>
        `;
        
        circuitoIndividual.style.display = "block";
        
        document.getElementById("cerrarDetalle").addEventListener('click', function() {
            circuitoIndividual.style.display = "none";
        });
        
        await cargarGanadoresCircuito(circuito);
    }
}

async function mostrarcircuitoIndividual(circuitoId, circuitos) {
    const circuito = circuitos.find(c => c.id === circuitoId);
    const circuitoIndividual = document.getElementById("circuitoIndividual");
    
    if (circuitoIndividual) {
        circuitoIndividual.innerHTML = `
            <div class="circuito-detalle">
                <img src="${circuito.imagen}" class="circuito-imagen">
                <h2 class="nombre">${circuito.nombre}</h2>
                <p class="pais">País: ${circuito.pais}</p>
                <p class="longitud">Longitud: ${circuito.longitud_km} km</p>
                <p class="vueltas">Vueltas: ${circuito.vueltas}</p>
                <p class="descripcion">Descripción: ${circuito.descripcion}</p>
                
                <div id="vueltaRapidaInfo" class="vuelta-rapida-container">

                </div>
                
                <h3 class="ganadoress">Ganadores por año</h3>
                <h3 class="ganadorrrr">Ganadores</h3>
                <div id="ganadoresCircuito" class="ganadores-container"></div>
                
                <button id="cerrarDetalle" class="btn-cerrar">Volver</button>
            </div>
        `;
        
        circuitoIndividual.style.display = "block";
        
        document.getElementById("cerrarDetalle").addEventListener('click', function() {
            circuitoIndividual.style.display = "none";
        });
        
        await cargarGanadoresCircuito(circuito);
        await cargarVueltaRapida(circuito);
    }
}


async function cargarVueltaRapida(circuito) {
    const vueltaRapidaContainer = document.getElementById("vueltaRapidaInfo");
    
    try {
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const todosLosPilotos = response.data.pilotos || [];
        
        if (circuito.record_vuelta) {
            const pilotoId = circuito.record_vuelta.piloto;
            const pilotoRecord = todosLosPilotos.find(piloto => piloto.id === pilotoId);
            const nombrePiloto = pilotoRecord ? pilotoRecord.nombre : 'Desconocido';
            
            vueltaRapidaContainer.innerHTML = `
                <h3 class="rapida">Vuelta más rápida</h3>
                <p class="vuelta-rapida">Tiempo: ${circuito.record_vuelta.tiempo}</p>
                <p class="piloto-vuelta-rapida">Piloto: ${nombrePiloto}</p>
                <p class="anio-vuelta-rapida">Año: ${circuito.record_vuelta.año}</p>
            `;
        } else {
            vueltaRapidaContainer.innerHTML = "<p>No hay información disponible sobre la vuelta más rápida.</p>";
        }
    } catch (error) {
        console.error("Error al cargar la información de vuelta más rápida:", error);
        vueltaRapidaContainer.innerHTML = "<p>Error al cargar la información de vuelta más rápida.</p>";
    }
}

async function cargarGanadoresCircuito(circuito) {
    const ganadoresContainer = document.getElementById("ganadoresCircuito");
    
    try {
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const todosLosPilotos = response.data.pilotos || [];
        
        if (circuito.ganadores && circuito.ganadores.length > 0) {
            ganadoresContainer.innerHTML = '';
            
            circuito.ganadores.forEach(ganador => {
                const pilotoGanador = todosLosPilotos.find(piloto => 
                    piloto.id === ganador.piloto
                );
                
                ganadoresContainer.innerHTML += `
                    <div class="ganador-card">
                        <h3>${pilotoGanador ? pilotoGanador.nombre : 'Desconocido'}</h3>
                        <p>Año: ${ganador.temporada}</p>
                    </div>
                `;
            });
        } else {
            ganadoresContainer.innerHTML = "<p>No hay información disponible sobre los ganadores.</p>";
        }
    } catch (error) {
        console.error("Error al cargar los ganadores:", error);
        ganadoresContainer.innerHTML = "<p>Error al cargar la información de los ganadores.</p>";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let circuitoIndividual = document.getElementById("circuitoIndividual");
    if (circuitoIndividual) {
        circuitoIndividual.style.display = "none";
    }
    
    mostrarCircuitos();
});