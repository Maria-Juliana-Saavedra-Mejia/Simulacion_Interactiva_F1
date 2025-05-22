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
                <img class="pencil" src="../../img/pencil.png"/>
                <img class="trash" src="../../img/trash.png"/>
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
async function editarPiloto(id) {
    try {
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const data = response.data;
        const piloto = data.pilotos.find(p => p.id === id);
        
        if (!piloto) {
            alert("Piloto no encontrado");
            return;
        }
        
        const pilotoIndividual = document.getElementById('pilotosindividual');
        pilotoIndividual.style.display = 'block';
        
        pilotoIndividual.innerHTML = `
            <div class="modal-content">
                <button class="close-btn" onclick="cerrarPilotoIndividual()">×</button>
                <h2 class="editar">Editar Piloto</h2>
                
                <div class="form-group">
                    <label>Nombre:</label>
                    <input type="text" id="editNombrePiloto" value="${piloto.nombre}">
                </div>
                
                <div class="form-group">
                    <label>Equipo:</label>
                    <input type="text" id="editEquipo" value="${piloto.equipo}">
                </div>
                
                <div class="form-group">
                    <label>Rol:</label>
                    <input type="text" id="editRol" value="${piloto.rol}">
                </div>
                
                <div class="form-group">
                    <label>Fecha de Nacimiento:</label>
                    <input type="date" id="editFechaNacimiento" value="${piloto.fechaNacimiento}">
                </div>
                
                <div class="form-group">
                    <label>Lugar de Nacimiento:</label>
                    <input type="text" id="editLugarNacimiento" value="${piloto.lugarNacimiento}">
                </div>
                
                <div class="form-group">
                    <label>URL de la foto:</label>
                    <input type="url" id="editFoto" value="${piloto.foto}">
                </div>
                
                <div class="button-group">
                    <button class="btn-cancel" onclick="cerrarPilotoIndividual()">Cancelar</button>
                    <button class="btn-save" onclick="guardarPiloto('${id}')">Guardar</button>
                </div>
            </div>
        `;
        
        window.cerrarPilotoIndividual = function() {
            const pilotoIndividual = document.getElementById('pilotosindividual');
            pilotoIndividual.style.display = 'none';
            pilotoIndividual.innerHTML = '';
        };
        
    } catch (error) {
        console.error("Error al cargar datos del piloto:", error);
        alert("Error al cargar los datos del piloto");
    }
}

async function guardarPiloto(id) {
    try {
        const nombre = document.getElementById('editNombrePiloto').value;
        const equipo = document.getElementById('editEquipo').value;
        const rol = document.getElementById('editRol').value;
        const fechaNacimiento = document.getElementById('editFechaNacimiento').value;
        const lugarNacimiento = document.getElementById('editLugarNacimiento').value;
        const foto = document.getElementById('editFoto').value;
        
        if (!nombre || !equipo || !rol || !fechaNacimiento || !lugarNacimiento) {
            alert("Por favor completa todos los campos obligatorios");
            return;
        }
        
        const response = await axios.get(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`);
        const data = response.data;
        
        const pilotoIndex = data.pilotos.findIndex(p => p.id === id);
        if (pilotoIndex === -1) {
            alert("Piloto no encontrado");
            return;
        }
        
        data.pilotos[pilotoIndex] = {
            ...data.pilotos[pilotoIndex],
            nombre: nombre,
            equipo: equipo,
            rol: rol,
            fechaNacimiento: fechaNacimiento,
            lugarNacimiento: lugarNacimiento,
            foto: foto
        };
        
        await axios.put(`https://681b4aa417018fe5057af2c9.mockapi.io/F1/1/`, data);
        
        alert("Piloto actualizado correctamente");
        cerrarPilotoIndividual();
        
        // Limpiar la lista actual y volver a mostrar
        document.getElementById("pilotosApi").innerHTML = '';
        mostrarpilotos();
        
    } catch (error) {
        console.error("Error al guardar piloto:", error);
        alert("Error al guardar los cambios");
    }
}

async function mostrarpilotos() {
    console.log("holaaaaaa")
    let piloto = document.getElementById("pilotosApi")
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
                <h1 class="Breaking">BREAKING</h1>
                <div class="top-corner"></div>
                <img class="image" src="../../img/logoF1white.png"/>
                <img class="images" src="${img}"/>
                <h1 class="pilotosNames">${nombre}</h1>
                <h1 class="pilotosequipos">${equipo}</h1>
                <div class="down-corner"></div>
                <img class="pencil" src="../../img/pencil.png" onclick="editarPiloto('${pilotos.id}')" style="cursor: pointer;"/>
                <img class="trash" src="../../img/trash.png" onclick="eliminarPiloto('${pilotos.id}')" style="cursor: pointer;"/>
            </div>
        `;
    }
    
    const pilotosCards = document.querySelectorAll(".pilotosSeccion");
    pilotosCards.forEach(card => {
        card.addEventListener('click', function(event) {
            // Evitar que el click en pencil o trash active el detalle del piloto
            if (event.target.classList.contains('pencil') || event.target.classList.contains('trash')) {
                return;
            }
            
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
                <p class="rol">Rol: ${pilotoSeleccionado.rol}</p>
                <p class="fn">Fecha de Nacimiento: ${pilotoSeleccionado.fechaNacimiento}</p>
                <p class="ln">Lugar de Nacimiento: ${pilotoSeleccionado.lugarNacimiento}</p>
                
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

document.addEventListener('DOMContentLoaded', function() {
    let pilotoIndividual = document.getElementById("pilotosindividual");
    if (pilotoIndividual) {
        pilotoIndividual.style.display = "none";
    }
        
    mostrarpilotos();
});


