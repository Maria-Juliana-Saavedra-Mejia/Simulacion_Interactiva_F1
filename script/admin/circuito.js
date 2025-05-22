
async function mostrarCircuitos() {
    console.log("holaaaaaa")
    let circuitos = document.getElementById("circuitosApi")    
    try {
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        console.log(response.data.circuitos)
        const data = response.data;
        
        for (let i = 0; i < data.circuitos.length; i++) {
            let circuito = data.circuitos[i];
            let nombre = circuito.nombre;
            let img = circuito.imagen;
            
            circuitos.innerHTML += `
            <div class="cosita" idcircuito="${circuito.id}">
                <img class="pencil" src="../../img/pencil.png" onclick="editarCircuito('${circuito.id}')"/>
                <img class="trash" src="../../img/trash.png" onclick="eliminarCircuito('${circuito.id}')"/>
                <img class="images" src="${img}"/>
                <h1 class="circuitNames">${nombre}</h1>
            </div>
            `
        }
    } catch (error) {
        console.error("Error al cargar circuitos:", error);
    }
}


async function eliminarCircuito(id) {
    if (confirm("¿Estás seguro de que deseas eliminar este circuito?")) {
        try {

            const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
            const data = response.data;
            
            const circuitosActualizados = data.circuitos.filter(circuito => circuito.id !== id);
            
            await axios.put(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`, {
                ...data,
                circuitos: circuitosActualizados
            });
            
            const elemento = document.querySelector(`[idcircuito="${id}"]`);
            if (elemento) {
                elemento.remove();
            }
            
        } catch (error) {
            console.log("Error al eliminar circuito:", error);

        }
    }
}

async function editarCircuito(id) {
    try {
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const data = response.data;
        const circuito = data.circuitos.find(c => c.id === id);
        
        if (!circuito) {
            alert("Circuito no encontrado");
            return;
        }
        
        const circuitoIndividual = document.getElementById('circuitoIndividual');
        circuitoIndividual.style.display = 'block';
        
        circuitoIndividual.innerHTML = `
            <div class="modal-content">
                <button class="close-btn" onclick="cerrarCircuitoIndividual()">×</button>
                <h2 class="editar">Editar Circuito</h2>
                
                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" id="editNombre" value="${circuito.nombre}">
                </div>
                
                <div class="form-group">
                    <label>País:</label>
                    <input type="text" id="editPais" value="${circuito.pais}">
                </div>
                
                <div class="form-group">
                    <label>Longitud (km):</label>
                    <input type="number" step="0.001" id="editLongitud" value="${circuito.longitud_km}">
                </div>
                
                <div class="form-group">
                    <label>Número de vueltas:</label>
                    <input type="number" id="editVueltas" value="${circuito.vueltas}">
                </div>
                
                <div class="form-group">
                    <label>Descripción:</label>
                    <textarea id="editDescripcion">${circuito.descripcion}</textarea>
                </div>
                
                <div class="form-group">
                    <label>URL de la imagen:</label>
                    <input type="url" id="editImagen" value="${circuito.imagen}">
                </div>
                
                <div class="form-group">
                    <label>Record de vuelta:</label>
                    <div class="record-inputs">
                        <input type="text" id="editRecordTiempo" value="${circuito.record_vuelta.tiempo}" placeholder="Tiempo (ej: 1:43.009)">
                        <input type="text" id="editRecordPiloto" value="${circuito.record_vuelta.piloto}" placeholder="ID Piloto">
                        <input type="number" id="editRecordAno" value="${circuito.record_vuelta.año}" placeholder="Año">
                    </div>
                </div>
                
                <div class="button-group">
                    <button class="btn-cancel" onclick="cerrarCircuitoIndividual()">Cancelar</button>
                    <button class="btn-save" onclick="guardarCircuito('${id}')">Guardar</button>
                </div>
            </div>
        `;
        
        window.cerrarCircuitoIndividual = function() {
            const circuitoIndividual = document.getElementById('circuitoIndividual');
            circuitoIndividual.style.display = 'none';
            circuitoIndividual.innerHTML = '';
        };
        
    } catch (error) {
        console.error("Error al cargar datos del circuito:", error);
        alert("Error al cargar los datos del circuito");
    }

async function guardarCircuito(id) {
    try {
        const nombre = document.getElementById('editNombre').value;
        const pais = document.getElementById('editPais').value;
        const longitud = parseFloat(document.getElementById('editLongitud').value);
        const vueltas = parseInt(document.getElementById('editVueltas').value);
        const descripcion = document.getElementById('editDescripcion').value;
        const imagen = document.getElementById('editImagen').value;
        const recordTiempo = document.getElementById('editRecordTiempo').value;
        const recordPiloto = document.getElementById('editRecordPiloto').value;
        const recordAno = parseInt(document.getElementById('editRecordAno').value);
        
        if (!nombre || !pais || !longitud || !vueltas || !descripcion) {
            alert("Por favor completa todos los campos obligatorios");
            return;
        }
        
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const data = response.data;
        
        const circuitoIndex = data.circuitos.findIndex(c => c.id === id);
        if (circuitoIndex === -1) {
            alert("Circuito no encontrado");
            return;
        }
        
        data.circuitos[circuitoIndex] = {
            ...data.circuitos[circuitoIndex],
            nombre: nombre,
            pais: pais,
            longitud_km: longitud,
            vueltas: vueltas,
            descripcion: descripcion,
            imagen: imagen,
            record_vuelta: {
                tiempo: recordTiempo,
                piloto: recordPiloto,
                año: recordAno
            }
        };
        
        await axios.put(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`, data);
        
        alert("Circuito actualizado correctamente");
        cerrarModal();
        
        mostrarCircuitos();
        
    } catch (error) {
        console.error("Error al guardar circuito:", error);
        alert("Error al guardar los cambios");
    }
}}

document.addEventListener('DOMContentLoaded', function() {
    let circuitoIndividual = document.getElementById("circuitoIndividual");
    if (circuitoIndividual) {
        circuitoIndividual.style.display = "none";
    }
    
    mostrarCircuitos();
});