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
            <div class="pilotosSeccion">
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
}
mostrarpilotos();