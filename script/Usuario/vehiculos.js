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
            <div class="vehiculosSeccion">
                <h1 class="modelo">Modelo: ${modelo}</h1>
                <img class="images" src="${img}"/>
            </div>
        `;
    }
}
mostrarVehiculos();