/* Escribe un programa que gestione las puntuaciones de los jugadores en un videojuego utilizando dos
arrays: uno para los nombres de los jugadores y otro para sus respectivas puntuaciones.El programa
debe funcionar de la siguiente manera:
Crea dos arrays:
Uno para almacenar los nombres de los últimos 5 jugadores.
Otro para almacenar las puntuaciones correspondientes de esos jugadores.

El programa debe mostrar un menú con las siguientes opciones:

Añadir un nuevo jugador y su puntuación: El usuario debe poder ingresar el nombre del
jugador y su puntuación. La información del jugador más antiguo (el primer elemento de
ambos arrays) debe ser eliminada y los nuevos datos deben añadirse al final de ambos arrays.

Mostrar los jugadores y sus puntuaciones actuales: Se deben mostrar los nombres de los
jugadores junto con sus respectivas puntuaciones.

Salir del programa: Terminar la ejecución del programa

Ejecución continua: El programa debe seguir ejecutándose hasta que el usuario seleccione la
opción de salir.

Ejemplo de arrays iniciales:
JAVASCRIPT
const jugadores = ["Jugador1", "Jugador2", "Jugador3", "Jugador4", "Jugador5"]
const puntuaciones = [120, 200, 150, 180, 220] */

let nombreDeJugadores = []
let puntuacionJugadores = []
let nombreJugador = ""
let espacio = ", "

// PRIMER BUCLE: pregunta de jugadores hasta que escriba "salir"
while (nombreJugador != "salir") {
  nombreJugador = prompt(`Introduce el nombre del jugador ${nombreDeJugadores.length + 1}: (Escribe "salir" para terminar)`)
  
  if (nombreJugador != "salir") {
    nombreDeJugadores.push(nombreJugador)
    let puntuacionJugador = parseInt(prompt(`Introduce la puntuación para ${nombreJugador}:`))
    puntuacionJugadores.push(puntuacionJugador)
  }
}

let opcionesElegir = 0

do {
  opcionesElegir = Number(prompt(
    `1 para añadir un nuevo jugador y su puntuación.\n 2 para mostrar los jugadores y sus puntuaciones actuales.\n 3 para salir del programa.`
  ))

  if (opcionesElegir == 1) {
    nombreJugador = prompt(`Introduce el nombre del jugador nuevo:`)
    let puntuacionJugador = parseInt(prompt(`Introduce la puntuación para ${nombreJugador}:`))
    
    nombreDeJugadores.push(nombreJugador)
    puntuacionJugadores.push(puntuacionJugador)
    
    // Si al añadirlo superamos los 5 jugadores, eliminamos posición 0 usando .slice
    if (nombreDeJugadores.length > 5) {
      nombreDeJugadores = nombreDeJugadores.slice(1)
      puntuacionJugadores = puntuacionJugadores.slice(1)
    }

    console.log(`Los jugadores actuales son: ${nombreDeJugadores.join(espacio)}`)
    console.log(`Las puntuaciones actuales son: ${puntuacionJugadores.join(espacio)} para los jugadores ${nombreDeJugadores.join(espacio)}`)
  }

  if (opcionesElegir == 2) {
    console.log(`Los jugadores actuales son: ${nombreDeJugadores.join(espacio)}`)
    console.log(`Las puntuaciones actuales son: ${puntuacionJugadores.join(espacio)} para los jugadores ${nombreDeJugadores.join(espacio)}`)
  }

  if (opcionesElegir == 3) {
    console.log(`Saliendo del programa...`)
  } 
  
  if (opcionesElegir != 1 && opcionesElegir != 2 && opcionesElegir != 3) {
    console.log(`Opción no válida. Por favor, elige una opción del menú.`)
  }

} while (opcionesElegir !== 3)
