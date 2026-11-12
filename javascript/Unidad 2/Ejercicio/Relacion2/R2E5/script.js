/* esarrolla un programa que permita registrar y gestionar las calificaciones de los estudiantes en una
clase. Usa dos arrays: uno para los nombres de los estudiantes y otro para sus calificaciones. El
programa debe ofrecer al usuario un menú con las siguientes opciones:
Añadir un estudiante y su calificación.
Mostrar la calificación promedio de la clase.
Mostrar la calificación más alta y el nombre del estudiante correspondiente.
Mostrar la calificación más baja y el nombre del estudiante correspondiente.
Salir del programa. */

let nombresEstudiante = [];
let calificacionesEstudiante = [];
let sumaCalificaciones = 0;

let preguntaUsuario = prompt(
    `¿Qué te interesaría hacer?\n` +
    `1 para añadir estudiantes\n` +
    `2 para ver la calificación promedio\n` +
    `3 para la calificación más alta y el nombre correspondiente\n` +
    `4 para la calificación más baja y el nombre correspondiente\n` +
    `FIN para terminar`
);

while (preguntaUsuario !== "FIN") {

    if (preguntaUsuario === "1") {
        let addEstudiante = prompt(`Introduce el nombre del estudiante: `);
        let addCalificacion = Number(prompt(`Introduce la calificación del estudiante: `));

        nombresEstudiante.push(addEstudiante);
        calificacionesEstudiante.push(addCalificacion);
        sumaCalificaciones += addCalificacion;

        console.log(`Estudiante añadido: ${addEstudiante} (${addCalificacion})`);

    } else if (preguntaUsuario === "2") {
        if (calificacionesEstudiante.length === 0) {
            console.log("Aún no hay estudiantes registrados.");
        } else {
            let calificacionMedia = sumaCalificaciones / calificacionesEstudiante.length;
            console.log("La calificación media es: " + calificacionMedia.toFixed(2));
        }

    } else if (preguntaUsuario === "3") {
        if (calificacionesEstudiante.length === 0) {
            console.log("Aún no hay estudiantes registrados.");
        } else {
            let notaMax = Math.max(...calificacionesEstudiante);
            let indiceMax = calificacionesEstudiante.indexOf(notaMax);
            let nombreMax = nombresEstudiante[indiceMax];

            console.log(`La calificación más alta es ${notaMax} y pertenece a ${nombreMax}.`);
        }

    } else if (preguntaUsuario === "4") {
        if (calificacionesEstudiante.length === 0) {
            console.log("Aún no hay estudiantes registrados.");
        } else {
            let notaMin = Math.min(...calificacionesEstudiante);
            let indiceMin = calificacionesEstudiante.indexOf(notaMin);
            let nombreMin = nombresEstudiante[indiceMin];

            console.log(`La calificación más baja es ${notaMin} y pertenece a ${nombreMin}.`);
        }

    } else {
        console.log("Opción no válida. Por favor, elige 1, 2, 3, 4 o FIN.");
    }

    preguntaUsuario = prompt(
        `¿Qué te interesaría hacer?\n` +
        `1 para añadir estudiantes\n` +
        `2 para ver la calificación promedio\n` +
        `3 para la calificación más alta y el nombre correspondiente\n` +
        `4 para la calificación más baja y el nombre correspondiente\n` +
        `FIN para terminar`
    );
}

console.log("Programa finalizado.");

