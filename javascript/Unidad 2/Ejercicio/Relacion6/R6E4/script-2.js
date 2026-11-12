/* Crea un array de 10 posiciones indicando si hay mina o no, y otro array para marcar posiciones des‐
cubiertas.
El usuario introduce posiciones a descubrir hasta que:
Encuentra una mina, o
Descubre todas las posiciones sin mina.
Al descubrir una casilla segura, debe mostrarse cuántas minas hay en sus casillas vecinas */

// (min,max)
// Math.floor(Math.random() * (max - min) + min)
// (min,max + 1) con el numero maximo incluido
// Math.floor(Math.random() * (max - min + 1) + min)

let minas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const NUMMINAS = 3;
let posicionAIntroducir;

for (let i = 0; i < NUMMINAS; i++) {
    posicionAIntroducir = Math.floor(Math.random() * 10);
    while (minas[posicionAIntroducir] == 1) {
        posicionAIntroducir = Math.floor(Math.random() * 10);
    }
    minas[posicionAIntroducir] = 1;
}

let descubiertas = ["⬜", "⬜", "⬜", "⬜", "⬜", "⬜", "⬜", "⬜", "⬜", "⬜"];
const TURNOSVICTORIA = minas.length - NUMMINAS;
let contadorMinasVecinas = 0;
let contadorTurnosSeguros = 0;
let posicion = -1;
let minaExplota = false;

while (!minaExplota && contadorTurnosSeguros < TURNOSVICTORIA) {
    contadorMinasVecinas = 0;
    posicion = Number(prompt("Tablero: " + descubiertas.join(" ") + "\nIntroduce posicion (0-9): "));

    if (minas[posicion] == 1) {
        minaExplota = true;
        descubiertas[posicion] = "💣";
    } else {
        if (minas[posicion - 1] == 1) {
            contadorMinasVecinas++;
        }
        if (minas[posicion + 1] == 1) {
            contadorMinasVecinas++;
        }
        descubiertas[posicion] = contadorMinasVecinas;
        contadorTurnosSeguros++;
        alert(descubiertas.join(" "));
    }
}

if (!minaExplota) {
    alert("¡Has ganado! 🎉\n" + descubiertas.join(" "));
} else {
    alert("¡Has pillado una mina! 💥\n" + descubiertas.join(" "));
}


