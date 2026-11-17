/* Recibe puntuaciones enteras de 1 a 5 y comentarios en dos arrays paralelos. El programa permite
añadir una encuesta, consultar la media, contar las valoraciones de cada puntuación y buscar co‐
mentarios por palabra clave sin distinguir mayúsculas. Rechaza puntuaciones fuera de rango. El
menú finaliza cuando se elija salir. */

let review = []
let continuar = true;

while (continuar) {
    let addComentario = prompt(`Introduce el comentario:`)
    let addPuntuacion = Number(prompt(`Ahora escribe la puntuacion:`))


    review.push({
        comentario: addComentario,
        puntuacion: addPuntuacion
    });

    continuar = confirm(`Quieres seguir poniendo comentarios?`)

}
console.log(review)

let puntuacionTotal = 0
for (let i = 0; i < review.length; i++) {
    puntuacionTotal += review[i].puntuacion;
}

let media = puntuacionTotal / review.length

alert(`Tu media es ${media.toFixed(2)}`)

let palabra = prompt(`Introduce palabra a buscar:`).toUpperCase()
let comentariosEncontrados = []
for (let i = 0; i < review.length; i++) {
    if (review[i].comentario.toUpperCase().includes(palabra)) {
        comentariosEncontrados.push(review[i].comentario)
    }
}

let mensaje = ""
for (let i = 0; i < comentariosEncontrados.length; i++) {
    mensaje += comentariosEncontrados[i] + "\n"
}
alert(`Mensajes con ${palabra}\n ${mensaje}`)