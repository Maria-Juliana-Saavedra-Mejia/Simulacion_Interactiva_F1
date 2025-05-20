async function mostrarCircuitos() {
    console.log("holaaaaaa")
    let escuderiasc= document.getElementById("escuderiasApi")
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
            <div>
                <img class="images" src="${img}"/>
                <h1 class="escuderiaNames">${nombre}</h1>
            </div>
        `;
    }
}
mostrarCircuitos();