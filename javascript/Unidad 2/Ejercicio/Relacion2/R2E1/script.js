/* Escribe un programa que permita al usuario ingresar las temperaturas registradas durante una sema‐
na (7 días). Una vez ingresadas las temperaturas, el programa debe mostrar al usuario un menú con
las siguientes opciones:
Mostrar la temperatura más alta registrada.
Mostrar la temperatura más baja registrada.
Calcular la temperatura promedio de la semana.
Salir del programa.
El programa debe ejecutarse hasta que el usuario elija la opción de salir. */

const NUM_SEMANA = 7
let diaSemana = ""
let temperaturasSemana = []
//diaEspecifico > NUM_SEMANA of diaSemana
//let i = 0; i < NUM_SEMANA; i++
let opcion = Number(prompt(
    `1 para mostrar la temperatura más alta registrada.\n
2 para mostrar la temperatura más baja registrada.\n
3 para calcular la temperatura promedio de la semana.\n
4 para salir del programa.`
))

for (let i = 0; i < NUM_SEMANA; i++) {
    diaSemana = Number(prompt(`Introduce la temperatura del dia ${i + 1} de la semana:`))
    temperaturasSemana.push(diaSemana)
}
console.log(`Las temperaturas son: ${temperaturasSemana}`);

do {

    opcion = Number(prompt(
        `1 para mostrar la temperatura más alta registrada.\n
2 para mostrar la temperatura más baja registrada.\n
3 para calcular la temperatura promedio de la semana.\n
4 para salir del programa.`
    ))
    if (opcion == 1) {
        let temperaturaMaxima = temperaturasSemana[0]

        for (const temperatura of temperaturasSemana) {
            if (temperatura > temperaturaMaxima) {
                temperaturaMaxima = temperatura
            }
        }
        console.log(`Temperatura maxima: ${temperaturaMaxima}`);
    } else if (opcion == 2) {
        let temperaturaMinima = temperaturasSemana[0]

        for (const temperatura of temperaturasSemana) {
            if (temperatura < temperaturaMinima) {
                temperaturaMinima = temperatura
            }
        }
        console.log(`Temperatura minima: ${temperaturaMinima}`);
    } else if (opcion == 3) {
        let temperaturaTotal = 0;

        for (const temperatura of temperaturasSemana) {
            temperaturaTotal += temperatura
        }
        let promedioTemperatura = temperaturaTotal / NUM_SEMANA
        console.log(`La temperatura total es: ${temperaturaTotal}`);
        console.log(`La temperatura media es: ${promedioTemperatura}`);

    } else if (opcion == 4) {
        console.log("Saliendo del programa.")
    }
    else {
        console.log(`Opcion invalida.`);


    }
} while (opcion !== 4)













