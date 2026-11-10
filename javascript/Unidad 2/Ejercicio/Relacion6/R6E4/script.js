/* Crea un array de 10 posiciones indicando si hay mina o no, y otro array para marcar posiciones des‐
cubiertas.
El usuario introduce posiciones a descubrir hasta que:
Encuentra una mina, o
Descubre todas las posiciones sin mina.
Al descubrir una casilla segura, debe mostrarse cuántas minas hay en sus casillas vecinas */

let minas = [0, 1, 0, 0, 1, 0, 1, 0, 0, 0]

let descubiertas = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]

const NUMMINAS = 3
const TURNOSVICTORIA = minas.length - NUMMINAS
let contadorMinasVecinas = 0;
let contadorTurnosSeguros = 0;
let posicion = -1

let minaExplota = false
while (!minaExplota && contadorTurnosSeguros < 7) {
    contadorMinasVecinas = 0;

    posicion = Number(prompt("Introduce posicion: "))

    if (minas[posicion] == 1) {
        minaExplota = true
    } else {

        if (minas[posicion - 1] == 1) {
            contadorMinasVecinas++
        }
        if (minas[posicion + 1] == 1) {
            contadorMinasVecinas++
        }
        descubiertas[posicion] = contadorMinasVecinas
        alert(descubiertas)
    }
}

if (!minaExplota) {
    alert("Has ganado!")
} else {
    alert("Has pillado una mina!")

}

