
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
        <div>
            <img class="images" src="${img}"/>
            <h1 class="circuitNames">${nombre}</h1>
            </div>
`
    }
}
mostrarCircuitos();