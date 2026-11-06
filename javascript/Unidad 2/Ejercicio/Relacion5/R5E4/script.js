/* Dada una frase introducida por el usuario, solicita otra palabra e indica si aparece y en qué posición
comienza la primera coincidencia. Realiza una búsqueda que no distinga mayúsculas de minúsculas */

let fraseUsuario = prompt("Introduce frase: ").trim()
let palabraABuscar = prompt("Introduce la palabra a buscar: ").trim().toLowerCase()

if (fraseUsuario.includes(palabraABuscar)) {
    alert("La palabra empieza en la posicion " + fraseUsuario.indexOf(palabraABuscar))
}

let frase = "Hoy es buen viernes"
let palabra = "buen"

for (let i = 0; i < frase.length; i++) {
    let iguales = true
    for (let j = 0; j < palabra.length && iguales; j++) {
        if (frase[i + j] != palabra[j]) {
            iguales = false
        }
    }
    if (iguales) {
        alert ("Son iguales")
    }
}