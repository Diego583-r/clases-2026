/* Diseña un programa con arrays de títulos, autores y ejemplares disponibles. El menú permite regis‐
trar libros, buscar por una parte del título o autor, prestar un ejemplar si hay existencias, devolverlo y
mostrar los libros agotados. Las búsquedas ignoran mayúsculas/minúsculas y espacios en los extre‐
mos. Evita acceder a índices inexistentes y mantén sincronizados los tres arrays */

const titulos = ["Bright as day", "Dooms day", "El cuerpo", "Mira amor"];
const autores = [];
const ejemplares = [];
const librosPrestados = [];
let eliminados = ""
let opcion;
let prestar = true;
let devolver = true;
let prestarLibro;
let devolverLibro;
let separador = ", "

opcion = Number(prompt(`Ingresa 1 para registrar libros.\n2 para buscar una parte del titulo o autor.\n3 para pedir prestado un ejemplar.\n4 para ver los libros agotados y devolverlos.\n5 terminar el array. `))

do {
    if (opcion === 1) {

        let registrarLibro = prompt("Ingrese el título del libro:");
        let autorLibro = prompt("Ingrese el autor del libro:");
        let ejemplaresLibro = parseInt(prompt("Ingrese la cantidad de ejemplares disponibles:"));

        titulos.push(registrarLibro);
        autores.push(autorLibro);
        ejemplares.push(ejemplaresLibro);
        console.log(`Libros actuales: ${registrarLibro} ${autorLibro} y ${ejemplaresLibro}`);

    }
    if (opcion === 2) {

        if (ejemplaresLibro > 0) {
            let buscarLibro = prompt("Ingrese una parte del título o autor para buscar el libro:");
            buscarLibro = buscarLibro.trim().toUpperCase();
            let librosEncontrados = [];

            for (let i = 0; i < titulos.length; i++) {
                if (titulos[i].toUpperCase().includes(buscarLibro) || autores[i].toUpperCase().includes(buscarLibro)) {
                    librosEncontrados.push({
                        titulo: titulos[i],
                        autor: autores[i],
                        ejemplares: ejemplares[i]
                    });
                }
            }

            if (librosEncontrados.length > 0) {
                librosEncontrados.forEach((libro) => {
                    alert(libro.titulo);
                    console.log(`Tu libro: ${libro.titulo} del autor: ${libro.autor} tiene ${libro.ejemplares}`);
                });
            } else {
                alert("No se encontraron libros con esa búsqueda.");
            }
        }
    }

    if (opcion === 3) {

        prestar = confirm(`Deseas pedir prestado un libro?`)

        if (prestar === true) {
            prestarLibro = prompt(`Introduce el libro que desees recibir:\nLibros: ${titulos.join(separador)}
        `).toUpperCase()

            if (prestarLibro !== null) {
                prestarLibro = prestarLibro.trim().toUpperCase();
            }
            for (i = 0; i < titulos.length; i++) {
                if (titulos[i].toUpperCase() === prestarLibro) {
                    librosPrestados.push(titulos[i])
                }
            }
            console.log(`Libros prestados: ${librosPrestados}`)
        }

    }

    if (opcion === 4) {

        devolver = confirm(`Deseas devolver un libro?`)

        if (devolver === true) {
            devolverLibro = prompt(`Introduce el libro que desees devolver:\nLibros prestados: ${librosPrestados.join(separador)}`).toUpperCase()
            if (devolverLibro !== null) {
                devolverLibro = devolverLibro.trim().toUpperCase();
            }
            for (i = 0; i < librosPrestados.length; i++) {
                if (librosPrestados[i].toUpperCase() === devolverLibro) {
                    eliminados = librosPrestados.splice(i, 1)
                }
            }
        }
        console.log(`Libros devueltos: ${eliminados}`)
    }

    opcion = Number(prompt(`Ingresa 1 para registrar libros.\n2 para buscar una parte del titulo o autor.\n3 para pedir prestado un ejemplar y devolverlo.\n4 para ver los libros agotados.\n5 terminar el array. `))

} while (opcion !== 5)


