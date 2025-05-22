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

async function editarVehiculo(id) {
    try {
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const data = response.data;
        const vehiculo = data.vehiculos.find(v => String(v.id) === String(id));
        
        if (!vehiculo) {
            alert("Vehículo no encontrado");
            return;
        }
        
        const vehiculoIndividual = document.getElementById('vehiculosindividual');
        vehiculoIndividual.style.display = 'block';
        
        vehiculoIndividual.innerHTML = `
            <div class="modal-content">
                <button class="close-btn" onclick="cerrarVehiculoIndividual()">×</button>
                <h2 class="editar">Editar Vehículo</h2>
                
                <div class="form-group">
                    <label>Equipo:</label>
                    <input type="text" id="editEquipoVehiculo" value="${vehiculo.equipo}">
                </div>
                
                <div class="form-group">
                    <label>Modelo:</label>
                    <input type="text" id="editModelo" value="${vehiculo.modelo}">
                </div>
                
                <div class="form-group">
                    <label>Motor:</label>
                    <input type="text" id="editMotorVehiculo" value="${vehiculo.motor}">
                </div>
                
                <div class="form-group">
                    <label>Velocidad Máxima (km/h):</label>
                    <input type="number" id="editVelocidadMaxima" value="${vehiculo.velocidad_maxima_kmh}">
                </div>
                
                <div class="form-group">
                    <label>Aceleración 0-100 (s):</label>
                    <input type="number" step="0.1" id="editAceleracion" value="${vehiculo.aceleracion_0_100}">
                </div>
                
                <div class="form-group">
                    <label>Pilotos (separados por coma):</label>
                    <input type="text" id="editPilotosVehiculo" value="${vehiculo.pilotos.join(', ')}">
                </div>
                
                <div class="form-group">
                    <label>URL de la imagen:</label>
                    <input type="url" id="editImagenVehiculo" value="${vehiculo.imagen}">
                </div>
                
                <h3>Rendimiento - Conducción Normal</h3>
                <div class="form-group">
                    <label>Velocidad Promedio (km/h):</label>
                    <input type="number" id="editVelPromNormal" value="${vehiculo.rendimiento.conduccion_normal.velocidad_promedio_kmh}">
                </div>
                <div class="form-group">
                    <label>Consumo Combustible Seco:</label>
                    <input type="number" step="0.1" id="editCombSecoNormal" value="${vehiculo.rendimiento.conduccion_normal.consumo_combustible.seco}">
                </div>
                <div class="form-group">
                    <label>Consumo Combustible Lluvioso:</label>
                    <input type="number" step="0.1" id="editCombLluvNormal" value="${vehiculo.rendimiento.conduccion_normal.consumo_combustible.lluvioso}">
                </div>
                <div class="form-group">
                    <label>Consumo Combustible Extremo:</label>
                    <input type="number" step="0.1" id="editCombExtNormal" value="${vehiculo.rendimiento.conduccion_normal.consumo_combustible.extremo}">
                </div>
                <div class="form-group">
                    <label>Desgaste Neumáticos Seco:</label>
                    <input type="number" step="0.1" id="editNeumSecoNormal" value="${vehiculo.rendimiento.conduccion_normal.desgaste_neumaticos.seco}">
                </div>
                <div class="form-group">
                    <label>Desgaste Neumáticos Lluvioso:</label>
                    <input type="number" step="0.1" id="editNeumLluvNormal" value="${vehiculo.rendimiento.conduccion_normal.desgaste_neumaticos.lluvioso}">
                </div>
                <div class="form-group">
                    <label>Desgaste Neumáticos Extremo:</label>
                    <input type="number" step="0.1" id="editNeumExtNormal" value="${vehiculo.rendimiento.conduccion_normal.desgaste_neumaticos.extremo}">
                </div>
                
                <h3>Rendimiento - Conducción Agresiva</h3>
                <div class="form-group">
                    <label>Velocidad Promedio (km/h):</label>
                    <input type="number" id="editVelPromAgresiva" value="${vehiculo.rendimiento.conduccion_agresiva.velocidad_promedio_kmh}">
                </div>
                <div class="form-group">
                    <label>Consumo Combustible Seco:</label>
                    <input type="number" step="0.1" id="editCombSecoAgresiva" value="${vehiculo.rendimiento.conduccion_agresiva.consumo_combustible.seco}">
                </div>
                <div class="form-group">
                    <label>Consumo Combustible Lluvioso:</label>
                    <input type="number" step="0.1" id="editCombLluvAgresiva" value="${vehiculo.rendimiento.conduccion_agresiva.consumo_combustible.lluvioso}">
                </div>
                <div class="form-group">
                    <label>Consumo Combustible Extremo:</label>
                    <input type="number" step="0.1" id="editCombExtAgresiva" value="${vehiculo.rendimiento.conduccion_agresiva.consumo_combustible.extremo}">
                </div>
                <div class="form-group">
                    <label>Desgaste Neumáticos Seco:</label>
                    <input type="number" step="0.1" id="editNeumSecoAgresiva" value="${vehiculo.rendimiento.conduccion_agresiva.desgaste_neumaticos.seco}">
                </div>
                <div class="form-group">
                    <label>Desgaste Neumáticos Lluvioso:</label>
                    <input type="number" step="0.1" id="editNeumLluvAgresiva" value="${vehiculo.rendimiento.conduccion_agresiva.desgaste_neumaticos.lluvioso}">
                </div>
                <div class="form-group">
                    <label>Desgaste Neumáticos Extremo:</label>
                    <input type="number" step="0.1" id="editNeumExtAgresiva" value="${vehiculo.rendimiento.conduccion_agresiva.desgaste_neumaticos.extremo}">
                </div>
                
                <h3>Rendimiento - Ahorro Combustible</h3>
                <div class="form-group">
                    <label>Velocidad Promedio (km/h):</label>
                    <input type="number" id="editVelPromAhorro" value="${vehiculo.rendimiento.ahorro_combustible.velocidad_promedio_kmh}">
                </div>
                <div class="form-group">
                    <label>Consumo Combustible Seco:</label>
                    <input type="number" step="0.1" id="editCombSecoAhorro" value="${vehiculo.rendimiento.ahorro_combustible.consumo_combustible.seco}">
                </div>
                <div class="form-group">
                    <label>Consumo Combustible Lluvioso:</label>
                    <input type="number" step="0.1" id="editCombLluvAhorro" value="${vehiculo.rendimiento.ahorro_combustible.consumo_combustible.lluvioso}">
                </div>
                <div class="form-group">
                    <label>Consumo Combustible Extremo:</label>
                    <input type="number" step="0.1" id="editCombExtAhorro" value="${vehiculo.rendimiento.ahorro_combustible.consumo_combustible.extremo}">
                </div>
                <div class="form-group">
                    <label>Desgaste Neumáticos Seco:</label>
                    <input type="number" step="0.1" id="editNeumSecoAhorro" value="${vehiculo.rendimiento.ahorro_combustible.desgaste_neumaticos.seco}">
                </div>
                <div class="form-group">
                    <label>Desgaste Neumáticos Lluvioso:</label>
                    <input type="number" step="0.1" id="editNeumLluvAhorro" value="${vehiculo.rendimiento.ahorro_combustible.desgaste_neumaticos.lluvioso}">
                </div>
                <div class="form-group">
                    <label>Desgaste Neumáticos Extremo:</label>
                    <input type="number" step="0.1" id="editNeumExtAhorro" value="${vehiculo.rendimiento.ahorro_combustible.desgaste_neumaticos.extremo}">
                </div>
                
                <div class="button-group">
                    <button class="btn-cancel" onclick="cerrarVehiculoIndividual()">Cancelar</button>
                    <button class="btn-save" onclick="guardarVehiculo('${id}')">Guardar</button>
                </div>
            </div>
        `;
        
        window.cerrarVehiculoIndividual = function() {
            const vehiculoIndividual = document.getElementById('vehiculosindividual');
            vehiculoIndividual.style.display = 'none';
            vehiculoIndividual.innerHTML = '';
        };
        
    } catch (error) {
        console.error("Error al cargar datos del vehículo:", error);
        alert("Error al cargar los datos del vehículo");
    }
}

async function guardarVehiculo(id) {
    try {
        const equipo = document.getElementById('editEquipoVehiculo').value;
        const modelo = document.getElementById('editModelo').value;
        const motor = document.getElementById('editMotorVehiculo').value;
        const velocidadMaxima = parseInt(document.getElementById('editVelocidadMaxima').value);
        const aceleracion = parseFloat(document.getElementById('editAceleracion').value);
        const pilotosInput = document.getElementById('editPilotosVehiculo').value;
        const imagen = document.getElementById('editImagenVehiculo').value;
        
        if (!equipo || !modelo || !motor || !velocidadMaxima || !aceleracion || !pilotosInput) {
            alert("Por favor completa todos los campos obligatorios");
            return;
        }
    
        const pilotos = pilotosInput.split(',').map(piloto => piloto.trim()).filter(piloto => piloto !== '');
        
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const data = response.data;
        
        const vehiculoIndex = data.vehiculos.findIndex(v => String(v.id) === String(id));
        if (vehiculoIndex === -1) {
            alert("Vehículo no encontrado");
            return;
        }
        
        data.vehiculos[vehiculoIndex] = {
            ...data.vehiculos[vehiculoIndex],
            equipo: equipo,
            modelo: modelo,
            motor: motor,
            velocidad_maxima_kmh: velocidadMaxima,
            aceleracion_0_100: aceleracion,
            pilotos: pilotos,
            imagen: imagen,
            rendimiento: {
                conduccion_normal: {
                    velocidad_promedio_kmh: parseInt(document.getElementById('editVelPromNormal').value),
                    consumo_combustible: {
                        seco: parseFloat(document.getElementById('editCombSecoNormal').value),
                        lluvioso: parseFloat(document.getElementById('editCombLluvNormal').value),
                        extremo: parseFloat(document.getElementById('editCombExtNormal').value)
                    },
                    desgaste_neumaticos: {
                        seco: parseFloat(document.getElementById('editNeumSecoNormal').value),
                        lluvioso: parseFloat(document.getElementById('editNeumLluvNormal').value),
                        extremo: parseFloat(document.getElementById('editNeumExtNormal').value)
                    }
                },
                conduccion_agresiva: {
                    velocidad_promedio_kmh: parseInt(document.getElementById('editVelPromAgresiva').value),
                    consumo_combustible: {
                        seco: parseFloat(document.getElementById('editCombSecoAgresiva').value),
                        lluvioso: parseFloat(document.getElementById('editCombLluvAgresiva').value),
                        extremo: parseFloat(document.getElementById('editCombExtAgresiva').value)
                    },
                    desgaste_neumaticos: {
                        seco: parseFloat(document.getElementById('editNeumSecoAgresiva').value),
                        lluvioso: parseFloat(document.getElementById('editNeumLluvAgresiva').value),
                        extremo: parseFloat(document.getElementById('editNeumExtAgresiva').value)
                    }
                },
                ahorro_combustible: {
                    velocidad_promedio_kmh: parseInt(document.getElementById('editVelPromAhorro').value),
                    consumo_combustible: {
                        seco: parseFloat(document.getElementById('editCombSecoAhorro').value),
                        lluvioso: parseFloat(document.getElementById('editCombLluvAhorro').value),
                        extremo: parseFloat(document.getElementById('editCombExtAhorro').value)
                    },
                    desgaste_neumaticos: {
                        seco: parseFloat(document.getElementById('editNeumSecoAhorro').value),
                        lluvioso: parseFloat(document.getElementById('editNeumLluvAhorro').value),
                        extremo: parseFloat(document.getElementById('editNeumExtAhorro').value)
                    }
                }
            }
        };
        
        await axios.put(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`, data);
        
        alert("Vehículo actualizado correctamente");
        cerrarVehiculoIndividual();
        document.getElementById("vehiculosApi").innerHTML = '';
        mostrarVehiculos();
        
    } catch (error) {
        console.error("Error al guardar vehículo:", error);
        alert("Error al guardar los cambios");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let vehiculoIndividual = document.getElementById("vehiculosindividual");
    if (vehiculoIndividual) {
        vehiculoIndividual.style.display = "none";
    }
    mostrarVehiculos();
});