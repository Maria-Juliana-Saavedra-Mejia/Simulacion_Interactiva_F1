async function mostrarescuderia() {
    console.log("holaaaaaa")
    let escuderiasc = document.getElementById("escuderiasApi")
    escuderiasc.innerHTML = '';
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
                <img class="pencil" src="../../img/pencil.png" onclick="editarEscuderias('${escuderia.id}')" style="cursor: pointer;"/>
                <img class="trash" src="../../img/trash.png" onclick="eliminarEscuderias('${escuderia.id}')" style="cursor: pointer;"/>
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

async function eliminarEscuderias(id) {
    if (confirm("¿Estás seguro de que deseas eliminar esta escuderia?")) {
        try {
            const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
            const data = response.data;
            
            const escuderiasActualizadas = data.escuderias.filter(escuderia => String(escuderia.id) !== String(id));
            
            if (escuderiasActualizadas.length === data.escuderias.length) {
                console.log("No se encontró la escudería con ID:", id);
                return;
            }
            
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

async function editarEscuderias(id) {
    try {
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const data = response.data;
        const escuderia = data.escuderias.find(e => String(e.id) === String(id));
        
        if (!escuderia) {
            alert("Escudería no encontrada");
            return;
        }
        
        const escuderiaIndividual = document.getElementById('escuderiasIndividual');
        escuderiaIndividual.style.display = 'block';
        
        escuderiaIndividual.innerHTML = `
            <div class="modal-content">
                <button class="close-btn" onclick="cerrarEscuderiaIndividual()">×</button>
                <h2 class="editar">Editar Escudería</h2>
                
                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" id="editNombreEscuderia" value="${escuderia.nombre}">
                </div>
                
                <div class="form-group">
                    <label>País:</label>
                    <input type="text" id="editPais" value="${escuderia.pais}">
                </div>
                
                <div class="form-group">
                    <label>Motor:</label>
                    <input type="text" id="editMotor" value="${escuderia.motor}">
                </div>
                
                <div class="form-group">
                    <label>Pilotos (separados por coma):</label>
                    <input type="text" id="editPilotos" value="${escuderia.pilotos.join(', ')}">
                </div>
                
                <div class="form-group">
                    <label>URL del escudo:</label>
                    <input type="url" id="editEscudo" value="${escuderia.escudo}">
                </div>
                
                <div class="button-group">
                    <button class="btn-save" onclick="guardarEscuderia('${id}')">Guardar</button>
                </div>
            </div>
        `;
        
        window.cerrarEscuderiaIndividual = function() {
            const escuderiaIndividual = document.getElementById('escuderiasIndividual');
            escuderiaIndividual.style.display = 'none';
            escuderiaIndividual.innerHTML = '';
        };
        
    } catch (error) {
        console.error("Error al cargar datos de la escudería:", error);
        alert("Error al cargar los datos de la escudería");
    }
}

async function guardarEscuderia(id) {
    try {
        const nombre = document.getElementById('editNombreEscuderia').value;
        const pais = document.getElementById('editPais').value;
        const motor = document.getElementById('editMotor').value;
        const pilotosInput = document.getElementById('editPilotos').value;
        const escudo = document.getElementById('editEscudo').value;
        
        if (!nombre || !pais || !motor || !pilotosInput) {
            alert("Por favor completa todos los campos obligatorios");
            return;
        }
        const pilotos = pilotosInput.split(',').map(piloto => piloto.trim()).filter(piloto => piloto !== '');
        
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const data = response.data;
        
        const escuderiaIndex = data.escuderias.findIndex(e => String(e.id) === String(id));
        if (escuderiaIndex === -1) {
            alert("Escudería no encontrada");
            return;
        }
        
        data.escuderias[escuderiaIndex] = {
            ...data.escuderias[escuderiaIndex],
            nombre: nombre,
            pais: pais,
            motor: motor,
            pilotos: pilotos,
            escudo: escudo
        };
        
        await axios.put(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`, data);
        
        alert("Escudería actualizada correctamente");
        cerrarEscuderiaIndividual();
        document.getElementById("escuderiasApi").innerHTML = '';
        mostrarescuderia();
        
    } catch (error) {
        console.error("Error al guardar escudería:", error);
        alert("Error al guardar los cambios");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let escuderiaIndividual = document.getElementById("escuderiasIndividual");
    if (escuderiaIndividual) {
        escuderiaIndividual.style.display = "none";
    }
    mostrarescuderia();
});
