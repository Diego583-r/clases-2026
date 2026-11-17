/* Recibe puntuaciones enteras de 1 a 5 y comentarios en dos arrays paralelos. El programa permite
añadir una encuesta, consultar la media, contar las valoraciones de cada puntuación y buscar co‐
mentarios por palabra clave sin distinguir mayúsculas. Rechaza puntuaciones fuera de rango. El
menú finaliza cuando se elija salir. */

comentarios = ["Bueno", "No me ha gustado", "Excelente", "Repetiria"]
puntuaciones = [4, 1, 5, 4]

let addComentario = prompt(`Introduce el comentario:`)
let addPuntuacion = Number(prompt(`Ahora escribe la puntuacion:`))


comentarios.push(addComentario)
puntuaciones.push(addPuntuacion)

alert(`Comentarios: ${comentarios}\n Puntuaciones: ${puntuaciones}`)

let puntuacionTotal = 0
for (let i = 0; i < puntuaciones.length; i++) {
    puntuacionTotal += puntuaciones[i]
}

let media = puntuacionTotal / puntuaciones.length

alert(`Tu media es ${media}`)

/* for (let i = 1; i <= 5; i++) {
    let totalPuntuacionIndividual = 0
    for (let j = 0; j < puntuaciones.length; j++) {
        if (i == puntuaciones[j]) {
            totalPuntuacionIndividual++
        }
    }
    console.log(`Valoracion: ${i} tiene ${totalPuntuacionIndividual}`)
} */

let contadorValoraciones = [0, 0, 0, 0, 0]
for (let i = 0; i < puntuaciones.length; i++) {
    contadorValoraciones[puntuaciones[i] - 1]++
}

for (let i = 0; i < comentarios.length; i++) {
    console.log(`La valoracion ${comentarios[i]} tiene ${puntuaciones[i]}`)
}

let palabra = prompt(`Introduce palabra a buscar:`).toUpperCase()
let comentariosEncontrados = []
for (let i = 0; i < comentarios.length; i++) {
    if (comentarios[i].toUpperCase().includes(palabra)) {
        comentariosEncontrados.push(comentarios[i])
    }
}

let mensaje = ""
for (let i = 0; i < comentariosEncontrados.length; i++) {
    mensaje += comentariosEncontrados[i] + "\n"
}
alert(mensaje)