async function mostrarVehiculos() {
    console.log("holaaaaaa")
    let vehiculo= document.getElementById("vehiculosApi")
    const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
    console.log(response.data.vehiculos)
    const data = response.data;
    console.log(data)
    for (let i = 0; i < data.vehiculos.length; i++) {  
        console.log("funciona")
        let vehiculos = data.vehiculos[i];
        let img = vehiculos.imagen;
        let modelo= vehiculos.modelo;
        vehiculo.innerHTML += `
            <div class="vehiculosSeccion" idCarro="${vehiculos.id}">
                <div class="imagess">
                    <img class="pencil" src="../../img/pencil.png" onclick="editarVehiculo('${vehiculos.id}')"/>
                    <img class="trash" src="../../img/trash.png" onclick="eliminarVehiculo('${vehiculos.id}')"/>
                </div>
                <h1 class="modelo">Modelo: ${modelo}</h1>
                <img class="images" src="${img}"/>
            </div>
        `;
    }
    const vehiculosCards = document.querySelectorAll(".vehiculosSeccion");
    vehiculosCards.forEach(card => {
        card.addEventListener('click', function(event) {
            if (event.target.classList.contains('pencil') || event.target.classList.contains('trash')) {
                return;
            }
            const vehiculoId = this.getAttribute('idCarro');
        });
    });
}

async function  eliminarVehiculo(id) {
    if (confirm("¿Estás seguro de que deseas eliminar este vehiculo?")) {
        try {
            const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
            const data = response.data;
            
            const vehiculosActualizados = data.vehiculos.filter(vehiculo => vehiculo.id !== id);
            
            await axios.put(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`, {
                ...data,
                vehiculos: vehiculosActualizados
            });
            
            const elemento = document.querySelector(`[idCarro="${id}"]`);
            if (elemento) {
                elemento.remove();
            }
            
        } catch (error) {
            console.log("Error al eliminar vehiculo:", error);
        }
    }
}



async function mostrarVehiculoIndividual(id, vehiculos, vehiculos) {
    const vehiculoIndividual = document.getElementById("vehiculosindividual");
    const vehiculoSeleccionado = vehiculos.find(vehiculo => vehiculo.id === id);
    
    if (vehiculoSeleccionado) {
        vehiculoIndividual.innerHTML = `
            <div class="vehiculo-detalle">
                <img src="${vehiculoSeleccionado.imagen}" class="imagesVentana">
                <p class="modelos">Modelo: ${vehiculoSeleccionado.modelo}</p>
                <p class="equipo">Equipo: ${vehiculoSeleccionado.equipo}</p>
                <p class="motor">Motor: ${vehiculoSeleccionado.motor}</p>
                <p class="vmax">Velocidad Maxima: ${vehiculoSeleccionado.velocidad_maxima_kmh}K/h</p>
                <p class="aceleracion">Aceleración de 0-100: ${vehiculoSeleccionado.aceleracion_0_100}</p>
                
                <p class="vehiculos-titulo">vehiculos: </p>
                <div id="vehiculosVehiculo" class="vehiculos-container"></div>
                
                <p class="Rendimiento">Rendimiento</p>
                <div class="Normal">
                    <p class="Conduccion">Conducción Normal:</p>
                    <p>Velocidad Promedio: ${vehiculoSeleccionado.rendimiento.conduccion_normal.velocidad_promedio_kmh} </p>
                    <p class="Consumo">Consumo Combustible:</p>
                    <p>Seco: ${vehiculoSeleccionado.rendimiento.conduccion_normal.consumo_combustible.seco} </p>
                    <p>Lluvioso: ${vehiculoSeleccionado.rendimiento.conduccion_normal.consumo_combustible.lluvioso} </p>
                    <p>Extremo: ${vehiculoSeleccionado.rendimiento.conduccion_normal.consumo_combustible.extremo} </p>
                    <p class="Desgaste">Desgaste Neumáticos:</p>
                    <p>Seco: ${vehiculoSeleccionado.rendimiento.conduccion_normal.desgaste_neumaticos.seco} </p>
                    <p>Lluvioso: ${vehiculoSeleccionado.rendimiento.conduccion_normal.desgaste_neumaticos.lluvioso} </p>
                    <p>Extremo: ${vehiculoSeleccionado.rendimiento.conduccion_normal.desgaste_neumaticos.extremo} </p>
                </div>
                <div class="Agresiva">
                    <p class="Conduccion">Conducción Agresiva:</p>
                    <p>Velocidad Promedio: ${vehiculoSeleccionado.rendimiento.conduccion_agresiva.velocidad_promedio_kmh} </p>
                    <p class="Consumo">Consumo Combustible:</p>
                    <p>Seco: ${vehiculoSeleccionado.rendimiento.conduccion_agresiva.consumo_combustible.seco} </p>
                    <p>Lluvioso: ${vehiculoSeleccionado.rendimiento.conduccion_agresiva.consumo_combustible.lluvioso} </p>
                    <p>Extremo: ${vehiculoSeleccionado.rendimiento.conduccion_agresiva.consumo_combustible.extremo} </p>
                    <p class="Desgaste">Desgaste Neumáticos:</p>
                    <p>Seco: ${vehiculoSeleccionado.rendimiento.conduccion_agresiva.desgaste_neumaticos.seco} </p>
                    <p>Lluvioso: ${vehiculoSeleccionado.rendimiento.conduccion_agresiva.desgaste_neumaticos.lluvioso} </p>
                    <p>Extremo: ${vehiculoSeleccionado.rendimiento.conduccion_agresiva.desgaste_neumaticos.extremo} </p>
                </div>

                <div class="Ahorro">
                    <p class="Conduccion">Ahorro Combustible:</p>
                    <p>Velocidad Promedio: ${vehiculoSeleccionado.rendimiento.ahorro_combustible?.velocidad_promedio_kmh || 'N/A'} </p>
                    <p class="Consumo">Consumo Combustible:</p>
                    <p>Seco: ${vehiculoSeleccionado.rendimiento.ahorro_combustible?.consumo_combustible?.seco || 'N/A'} </p>
                    <p>Lluvioso: ${vehiculoSeleccionado.rendimiento.ahorro_combustible?.consumo_combustible?.lluvioso || 'N/A'} </p>
                    <p>Extremo: ${vehiculoSeleccionado.rendimiento.ahorro_combustible?.consumo_combustible?.extremo || 'N/A'} </p>
                    <p>Desgaste Neumáticos:</p>
                    <p>Seco: ${vehiculoSeleccionado.rendimiento.ahorro_combustible?.desgaste_neumaticos?.seco || 'N/A'} </p>
                    <p>Lluvioso: ${vehiculoSeleccionado.rendimiento.ahorro_combustible?.desgaste_neumaticos?.lluvioso || 'N/A'} </p>
                    <p>Extremo: ${vehiculoSeleccionado.rendimiento.ahorro_combustible?.desgaste_neumaticos?.extremo || 'N/A'} </p>
                </div>
                </div>
                <button id="cerrarDetalle" class="btn-cerrar">Volver</button>
                </div>
            </div>
        `;
        
        vehiculoIndividual.style.display = "block";
        
        document.getElementById("cerrarDetalle").addEventListener('click', function() {
            vehiculoIndividual.style.display = "none";
        });
        
        await cargarvehiculosVehiculo(vehiculoSeleccionado, vehiculos);
    } else {
        console.error("Vehículo no encontrado con ID:", id);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let pilotoIndividual = document.getElementById("vehiculosindividual");
    if (pilotoIndividual) {
        pilotoIndividual.style.display = "none";
    }
        
    mostrarVehiculos();
});
