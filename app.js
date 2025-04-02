// RETO 21
// Capturar el boton
// Crear una function que muestre:
//      prompt("Introduce tu estatura")
//      prompt("Introduce tu peso")

let btnIMC = document.querySelector("#calcIMC")
let divDOM = document.querySelector("#resultado")

function calcIMC() {
    let estatura = Number(prompt("Introduce tu estatura"))
    let peso = Number(prompt("Introduce tu peso"))

    let IMCresult = peso / (estatura * estatura)

    if(IMCresult <= 18.5) {
        divDOM.innerHTML = `
                            <img src="https://image.freepik.com/vector-gratis/nino-triste-flaco-usa-bascula_97632-1305.jpg"></img>
                            <h1>Bajo</h1>
        `
    } else if(IMCresult <= 24.9){
        divDOM.innerHTML = `
                            <img src="https://static.vecteezy.com/system/resources/previews/002/250/482/non_2x/cute-boy-use-weight-scale-free-vector.jpg"></img>
                            <h1>Normal</h1>
        `
    } else if(IMCresult <= 29.9) {
        divDOM.innerHTML = `
                            <img src="https://img.freepik.com/vector-premium/nino-gordo-sobrepeso-parado-bascula-parece-sorprendido-al-medir-su-peso_535862-344.jpg?w=2000"></img>
                            <h1>Sobrepeso</h1>
        `
    } else {
        divDOM.innerHTML = `
                            <img src="https://i.pinimg.com/736x/81/b6/ce/81b6ceced20bcde920b00f374316eec1.jpg"></img>
                            <h1>Obesidad</h1>
        `
    }
}

btnIMC.addEventListener("click", calcIMC)