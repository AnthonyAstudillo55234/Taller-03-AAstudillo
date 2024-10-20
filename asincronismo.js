// Fundamentos

"use strict";
function solicitar(tipo) {

    for (let index = 0; index < 10000000000; index++) 
    {
    }
    return `¡Hola, ya regresé con el ${tipo}!`
}

console.log("Comenzar a escribir en la pizarra")
console.log("No hay marcador azul")
console.log("Solicitar ayuda")
const name = 'Ralph'
const respuestaEstudiante = solicitar("Marcador-azul")
console.log(respuestaEstudiante)
console.log("Continuar escribiendo en la pizarra");

// Promesas

"use strict";

const conexionBDDExterna = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
}

const obtenerProductos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');




conexionBDDExterna(true)
    .then(respuesta => console.log(respuesta))
    .catch(error=>console.log(error))



obtenerProductos
    .then(peticion=>peticion.json())
    .then(respuesta=>console.log(respuesta[0].name))
    .catch(error=>console.log(error))

// async y await

"use strict";

const conexionBDDExterna2 = (datosConexion)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexión satisfactoria") : reject("Conexión rechazada")
        },3000)
    })
}

const obtenerProductos2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');




async function conexion(){
    try {
        console.log(await conexionBDDExterna2(true))
    } catch (error) {
        console.log(error)
    }
}


async function conectarAPI(){
    try {
        const peticion = await obtenerProductos2
        const respuesta = await peticion.json()
        console.log(respuesta[0].name)
    } catch (error) {
        console.log(error)
    }
}

conexion()
conectarAPI()