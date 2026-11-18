# PLANTILLA DE EXAMEN — JAVASCRIPT · UNIDAD 2

---

## 1. ARRAYS: CREAR, CONSULTAR Y MODIFICAR

### Crear un array vacío o con datos

```javascript
let colores = []
let numeros = [5, 10, 15, 20]
let animales = ["perro", "gato"]
```

### Primer elemento, último elemento y longitud

```javascript
let numeros = [5, 10, 15, 20]

console.log(numeros.at(0));
console.log(numeros.at(-1));
console.log(numeros.length);
```

### Añadir al final con `push()`

```javascript
let colores = []

colores.push("rojo", "verde", "azul")
console.log(colores);
```

### Eliminar el último con `pop()`

```javascript
let nombres = ["Carlos", "Ana", "Pedro", "Laura"]

let eliminado = nombres.pop()
console.log(nombres)
console.log(eliminado)
```

### Añadir al inicio con `unshift()`

```javascript
let animales = ["perro", "gato"]

animales.unshift("loro", "tortuga")
console.log(animales);
```

### Eliminar el primero con `shift()`

```javascript
let frutas = ["manzana", "banana", "naranja"]

let eliminado = frutas.shift()
frutas.push("fresa")
console.log(frutas);
console.log(eliminado);
```

### Cambiar un elemento directamente por su posición

```javascript
let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

dias[6] = "Domingo (fin de semana)"
console.log(dias);
```

### Intercambiar el primero y el último

```javascript
let array = [100, 200, 300]
let variableTemporal = array.at(0);

array[0] = array[array.length - 1];
array[array.length - 1] = variableTemporal;

console.log(array);
```

### Copiar un array con `slice()`

```javascript
let nombres = ["Ana", "Pedro"]
let nombresResultado = nombres.slice();

nombres.unshift("Carlos");
nombres.push("Laura")

console.log(`Nombres iniciales: ${nombresResultado}`);
console.log(`Nombres actuales: ${nombres}`);
```

### Quitar el primer elemento creando otro array con `slice(1)`

```javascript
let nombreDeJugadores = ["Jugador1", "Jugador2", "Jugador3", "Jugador4", "Jugador5", "Jugador6"]

if (nombreDeJugadores.length > 5) {
    nombreDeJugadores = nombreDeJugadores.slice(1)
}
console.log(nombreDeJugadores)
```

### Eliminar un elemento según su índice con `splice()`

```javascript
let librosPrestados = ["Libro A", "Libro B", "Libro C"]
let i = 1

let eliminados = librosPrestados.splice(i, 1)
console.log(`Libros devueltos: ${eliminados}`)
console.log(librosPrestados)
```

### Invertir un array con `pop()` y `push()`

```javascript
let letras = ["a", "b", "c", "d"];
let variableTemporal = letras.slice()
let letrasInvertidas = [];

while (letras.length > 0) {
    letrasInvertidas.push(letras.pop());
}
letras = letrasInvertidas;

console.log(`Letras iniciales: ${variableTemporal}`);
console.log(`Resultado de la inversion = ${letras}`);
```

---

## 2. RECORRER, MOSTRAR Y UNIR ELEMENTOS

### Recorrer un array con `for` (profesor)

```javascript
let comentarios = ["Bueno", "Excelente", "Regular"]

for (let i = 0; i < comentarios.length; i++) {
    alert(comentarios[i])
}
```

### Recorrer un array con `for...of`

```javascript
let temperaturasSemana = [15, 16, 18, 19, 14, 17, 20]

for (const temperatura of temperaturasSemana) {
    console.log(temperatura)
}
```

### Mostrar todo el array con UN SOLO `alert` (profesor)

```javascript
let comentarios = ["Bueno", "Excelente", "Regular"]
let mensaje = ""

for (let i = 0; i < comentarios.length; i++) {
    mensaje += comentarios[i] + "\n"
}
alert(mensaje)
```

### Convertir un array en texto con `join()`

```javascript
let nombres = ["Ana", "Pedro", "Laura"]
let separador = " - "

console.log(nombres.join(separador))
alert(`Nombres: ${nombres.join(", ")}`)
```

### Mostrar dos arrays sincronizados (profesor)

```javascript
let nombres = ["Ana", "Pedro", "Laura"]
let puntuaciones = [5, 3, 4]

for (let i = 0; i < nombres.length; i++) {
    console.log("[" + nombres[i] + "] " + puntuaciones[i]);
}
```

### Mostrar un array de objetos con `forEach()` (utilizado en R8E8)

```javascript
let librosEncontrados = [
    {titulo: "Libro A", autor: "Autor A", ejemplares: 3},
    {titulo: "Libro B", autor: "Autor B", ejemplares: 2}
]

librosEncontrados.forEach((libro) => {
    alert(libro.titulo);
    console.log(`Tu libro: ${libro.titulo} del autor: ${libro.autor} tiene ${libro.ejemplares}`);
});
```

---

## 3. ARRAYS PARALELOS (DOS O TRES ARRAYS)

### Añadir nombre y dato en la misma posición

```javascript
let titulosLibros = [];
let cantidadesLibros = [];

let addLibro = prompt("Ingresa el titulo del libro que quieras añadir:");
let cantidadLibro = Number(prompt("Ingresa la cantidad de libros:"));

titulosLibros.push(addLibro);
cantidadesLibros.push(cantidadLibro);

console.log(`Tienes ${cantidadesLibros} de tu libro: ${titulosLibros}`);
```

### Buscar por nombre con `indexOf()` y consultar su dato

```javascript
let titulosLibros = ["Libro A", "Libro B", "Libro C"]
let cantidadesLibros = [3, 5, 2]

let libroABuscar = prompt("Ingresa el título del libro que quieres actualizar:");
let indiceProducto = titulosLibros.indexOf(libroABuscar);

if (indiceProducto !== -1) {
    console.log(`Tienes ${cantidadesLibros[indiceProducto]} de tu libro: ${titulosLibros[indiceProducto]}`);
} else {
    console.log("No se encontró ese libro.");
}
```

### Actualizar un valor en arrays paralelos

```javascript
let titulosLibros = ["Libro A", "Libro B"]
let cantidadesLibros = [3, 5]

let libroABuscar = prompt("Ingresa el título del libro que quieres actualizar:");
let indiceProducto = titulosLibros.indexOf(libroABuscar);

if (indiceProducto !== -1) {
    let cambiarCantidad = Number(prompt("Ingresa la cantidad nueva de tu libro:"));
    cantidadesLibros[indiceProducto] = cambiarCantidad;
    console.log(`Tienes ${cantidadesLibros[indiceProducto]} de tu libro: ${titulosLibros[indiceProducto]}`);
} else {
    console.log("No se encontró ese libro.");
}
```

### Añadir un jugador y eliminar al más antiguo si hay más de 5

```javascript
let nombreDeJugadores = []
let puntuacionJugadores = []

let nombreJugador = prompt(`Introduce el nombre del jugador nuevo:`)
let puntuacionJugador = parseInt(prompt(`Introduce la puntuación para ${nombreJugador}:`))

nombreDeJugadores.push(nombreJugador)
puntuacionJugadores.push(puntuacionJugador)

if (nombreDeJugadores.length > 5) {
    nombreDeJugadores = nombreDeJugadores.slice(1)
    puntuacionJugadores = puntuacionJugadores.slice(1)
}

console.log(`Los jugadores actuales son: ${nombreDeJugadores.join(", ")}`)
console.log(`Las puntuaciones actuales son: ${puntuacionJugadores.join(", ")}`)
```

### Recorrer TRES arrays relacionados (título, autor, cantidad)

```javascript
let titulos = ["Libro A", "Libro B"]
let autores = ["Autor A", "Autor B"]
let ejemplares = [3, 1]

for (let i = 0; i < titulos.length; i++) {
    console.log(`${titulos[i]} - ${autores[i]} - ${ejemplares[i]}`)
}
```

---

## 4. MENÚS DE GESTIÓN (COMO EN RELACIÓN 2)

### Menú con `do...while` y opciones numéricas

```javascript
let opcion = Number(prompt(
    `1 para añadir un elemento.\n2 para mostrar elementos.\n3 para salir del programa.`
));

do {
    if (opcion === 1) {
        // Añadir elemento
    }

    if (opcion === 2) {
        // Mostrar elementos
    }

    if (opcion === 3) {
        console.log("Saliendo del programa.")
    }

    opcion = Number(prompt(
        `1 para añadir un elemento.\n2 para mostrar elementos.\n3 para salir del programa.`
    ));
} while (opcion !== 3)
```

### Menú hasta introducir `FIN` (R2E5)

```javascript
let preguntaUsuario = prompt(
    `¿Qué te interesaría hacer?\n` +
    `1 para añadir\n` +
    `2 para consultar\n` +
    `FIN para terminar`
);

while (preguntaUsuario !== "FIN") {
    if (preguntaUsuario === "1") {
        // Añadir
    } else if (preguntaUsuario === "2") {
        // Consultar
    } else {
        console.log("Opción no válida.");
    }

    preguntaUsuario = prompt(
        `¿Qué te interesaría hacer?\n` +
        `1 para añadir\n` +
        `2 para consultar\n` +
        `FIN para terminar`
    );
}

console.log("Programa finalizado.");
```

### Pedir datos varias veces con `confirm()` (R7E7 con objetos)

```javascript
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
```

---

## 5. CÁLCULOS CON ARRAYS

### Sumar todos los valores (profesor)

```javascript
let notas = [5, 7, 6, 9]
let notasTotal = 0

for (let i = 0; i < notas.length; i++) {
    notasTotal += notas[i]
}
console.log(notasTotal)
```

### Calcular la media (profesor / R7E7)

```javascript
let puntuaciones = [4, 1, 5, 4]
let puntuacionTotal = 0

for (let i = 0; i < puntuaciones.length; i++) {
    puntuacionTotal += puntuaciones[i]
}

let media = puntuacionTotal / puntuaciones.length
alert(`Tu media es ${media.toFixed(2)}`)
```

### Máximo y mínimo de un array con `Math.max()` / `Math.min()`

```javascript
let calificacionesEstudiante = [7, 9, 4, 8]

let notaMax = Math.max(...calificacionesEstudiante);
let notaMin = Math.min(...calificacionesEstudiante);

console.log(`Nota máxima: ${notaMax}`)
console.log(`Nota mínima: ${notaMin}`)
```

### Máximo y mínimo con el nombre correspondiente (R2E5)

```javascript
let nombresEstudiante = ["Ana", "Pedro", "Laura"]
let calificacionesEstudiante = [7, 9, 4]

let notaMax = Math.max(...calificacionesEstudiante);
let indiceMax = calificacionesEstudiante.indexOf(notaMax);
let nombreMax = nombresEstudiante[indiceMax];

let notaMin = Math.min(...calificacionesEstudiante);
let indiceMin = calificacionesEstudiante.indexOf(notaMin);
let nombreMin = nombresEstudiante[indiceMin];

console.log(`La calificación más alta es ${notaMax} y pertenece a ${nombreMax}.`);
console.log(`La calificación más baja es ${notaMin} y pertenece a ${nombreMin}.`);
```

### Mínimo recorriendo con `for...of` (profesor)

```javascript
let array = [15, 8, 23, 4, 11]
let minimo = array[0]

for (const elemento of array) {
    if (elemento < minimo) {
        minimo = elemento
    }
}
console.log("Minimo: " + minimo);
```

### Evitar calcular la media de un array vacío (R2E5)

```javascript
let calificacionesEstudiante = []
let sumaCalificaciones = 0

if (calificacionesEstudiante.length === 0) {
    console.log("Aún no hay estudiantes registrados.");
} else {
    let calificacionMedia = sumaCalificaciones / calificacionesEstudiante.length;
    console.log("La calificación media es: " + calificacionMedia.toFixed(2));
}
```

### Contar cuántas valoraciones hay de cada nota, de 1 a 5 (R7E7)

```javascript
let puntuaciones = [4, 1, 5, 4]
let contadorValoraciones = [0, 0, 0, 0, 0]

for (let i = 0; i < puntuaciones.length; i++) {
    contadorValoraciones[puntuaciones[i] - 1]++
}

console.log(contadorValoraciones)
```

### Contar valoraciones con DOS bucles (alternativa utilizada en R7E7)

```javascript
let puntuaciones = [4, 1, 5, 4]

for (let i = 1; i <= 5; i++) {
    let totalPuntuacionIndividual = 0
    for (let j = 0; j < puntuaciones.length; j++) {
        if (i == puntuaciones[j]) {
            totalPuntuacionIndividual++
        }
    }
    console.log(`Valoracion: ${i} tiene ${totalPuntuacionIndividual}`)
}
```

### Promedio diario usando 30 días (R2E7)

```javascript
let cantidadesGastadas = [20, 15, 30, 10]

if (cantidadesGastadas.length === 0) {
    console.log("No hay gastos para calcular el promedio.");
} else {
    let sumaTotal = 0;
    for (let i = 0; i < cantidadesGastadas.length; i++) {
        sumaTotal += cantidadesGastadas[i];
    }
    let promedioGastoDiario = sumaTotal / 30;
    console.log(`El promedio de gasto diario (30 días) es: $${promedioGastoDiario.toFixed(2)}`);
}
```

---

## 6. BUSCAR, FILTRAR Y CONSULTAR

### Buscar la posición exacta con `indexOf()`

```javascript
let nombres = ["Ana", "Pedro", "Laura"]
let nombreABuscar = prompt("Introduce el nombre:")

let indice = nombres.indexOf(nombreABuscar)

if (indice !== -1) {
    console.log(`Encontrado en la posición ${indice}`)
} else {
    console.log("No se encontró")
}
```

### Comprobar si una palabra aparece con `includes()`

```javascript
let frase = "Hoy es buen viernes"
let palabra = "buen"

if (frase.includes(palabra)) {
    alert("La palabra empieza en la posicion " + frase.indexOf(palabra))
}
```

### Buscar SIN diferenciar mayúsculas/minúsculas (R7E7)

```javascript
let comentarios = ["Bueno", "No me ha gustado", "Excelente", "Repetiria"]
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
```

### Buscar por PARTE del título o del autor (R8E8)

```javascript
let titulos = ["Bright as day", "Dooms day", "El cuerpo"]
let autores = ["Autor A", "Autor B", "Autor C"]
let ejemplares = [2, 4, 1]

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
```

### Comparar un título escrito con uno del array, sin diferenciar mayúsculas (R8E8)

```javascript
let titulos = ["Bright as day", "Dooms day", "El cuerpo"]
let librosPrestados = []
let prestarLibro = prompt(`Introduce el libro que desees recibir:\nLibros: ${titulos.join(", ")}`).toUpperCase()

for (let i = 0; i < titulos.length; i++) {
    if (titulos[i].toUpperCase() === prestarLibro) {
        librosPrestados.push(titulos[i])
    }
}
console.log(`Libros prestados: ${librosPrestados}`)
```

---

## 7. CADENAS DE TEXTO (RELACIÓN 5)

### Quitar espacios de los extremos: `trim()`

```javascript
let fraseUsuario = prompt("Introduce frase: ").trim()
console.log(fraseUsuario)
```

### Pasar texto a mayúsculas o minúsculas

```javascript
let palabra = prompt("Introduce palabra a buscar:").toUpperCase()
let otraPalabra = prompt("Introduce otra palabra:").toLowerCase()
```

### Comprobar el comienzo y final de un texto (R5E5)

```javascript
const PREFIJO = "https://".slice()
const SUFIJO = ".es".slice()

let direccionWeb = prompt("Introduce la direccion web: ").trim();

if (direccionWeb.startsWith(PREFIJO)) {
    alert(`Prefijo = ${direccionWeb.slice(0, PREFIJO.length)}`)
}

if (direccionWeb.endsWith(SUFIJO)) {
    alert(`Sufijo = ${direccionWeb.slice(direccionWeb.length - SUFIJO.length,direccionWeb.length)}`)
}
```

### Quitar los espacios interiores con `split()` y `join()` (R5E10)

```javascript
let palabraUsuario = prompt("Introduce la palabra: ").trim().toLowerCase().split(" ").join("");
console.log(palabraUsuario)
```

### Comprobar si una palabra/frase es palíndroma (R5E10)

```javascript
let palabraUsuario = prompt("Introduce la palabra: ").trim().toLowerCase().split(" ").join("");
let esPalindromo = true

for (let i = 0; i < palabraUsuario.length / 2 && esPalindromo; i++) {
    if (palabraUsuario[i] != palabraUsuario[palabraUsuario.length - 1 - i]) {
        esPalindromo = false
    }
}

let resultado = "La palabra " + palabraUsuario
if (!esPalindromo) {
    resultado += " no"
}
resultado += " es palindromo."

alert(resultado);
```

### Buscar texto letra por letra con dos bucles (R5E4)

```javascript
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
        alert("Son iguales")
    }
}
```

---

## 8. OBJETOS DENTRO DE ARRAYS (R7E7 Y R8E8)

### Añadir un objeto con comentario y puntuación (R7E7)

```javascript
let review = []

let addComentario = prompt(`Introduce el comentario:`)
let addPuntuacion = Number(prompt(`Ahora escribe la puntuacion:`))

review.push({
    comentario: addComentario,
    puntuacion: addPuntuacion
});
console.log(review)
```

### Acceder a una propiedad de cada objeto

```javascript
let review = [
    {comentario: "Bueno", puntuacion: 4},
    {comentario: "Excelente", puntuacion: 5}
]

let puntuacionTotal = 0
for (let i = 0; i < review.length; i++) {
    puntuacionTotal += review[i].puntuacion;
}

let media = puntuacionTotal / review.length
alert(`Tu media es ${media.toFixed(2)}`)
```

### Buscar comentarios dentro de objetos

```javascript
let review = [
    {comentario: "Bueno", puntuacion: 4},
    {comentario: "No me ha gustado", puntuacion: 1},
    {comentario: "Excelente", puntuacion: 5}
]

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
```

---

## 9. PATRONES DE LOS EJERCICIOS FINALES

### Cola: añadir al final y atender al primero (R1E9.1)

```javascript
const NUM_CLIENTES = 3
let cola = []
let clienteAtendido = ""

for (let i = 0; i < NUM_CLIENTES; i++) {
    cola.push("cliente" + (i + 1))
}

console.log("Estado inicial de la cola: " + cola);

for (let i = 0; i < NUM_CLIENTES; i++) {
    clienteAtendido = cola.shift()
    console.log("Cliente atendido: " + clienteAtendido);

    if (cola.length) {
        console.log(`El estado de la cola es: ${cola}`);
    } else {
        console.log("La cola ha sido atendida correctamente.");
    }
}
```

### Pila: añadir y retirar siempre el último (R1E10)

```javascript
let pilaEliminado
let suma = 0;
let pila = []
const NUMPILA = 3;

for (let i = 0; i < NUMPILA; i++) {
    suma += 10
    pila.push(suma)
}

console.log(`Numeros actuales: ${pila}`);
while (pila.length) {
    pilaEliminado = pila.pop(-1)
    console.log(`Estado de la pila: ${pila} - ${pilaEliminado}`);
    console.log(`Numero eliminado: ${pilaEliminado}`);
}
```

### Crear un array con posiciones aleatorias sin repetir (R6E4, variante 2)

```javascript
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

console.log(minas)
```

### Consultar las posiciones vecinas de un array (R6E4)

```javascript
let minas = [0, 1, 0, 0, 1, 0, 1, 0, 0, 0]
let posicion = Number(prompt("Introduce posicion: "))
let contadorMinasVecinas = 0

if (minas[posicion - 1] == 1) {
    contadorMinasVecinas++
}
if (minas[posicion + 1] == 1) {
    contadorMinasVecinas++
}

console.log(contadorMinasVecinas)
```

### Salir cuando se cumple una de dos condiciones (R6E4)

```javascript
let minaExplota = false
let contadorTurnosSeguros = 0
const TURNOSVICTORIA = 7

while (!minaExplota && contadorTurnosSeguros < TURNOSVICTORIA) {
    // Pedir posición y descubrirla
    // Si hay una mina, cambiar minaExplota a true
    // Si es segura, aumentar contadorTurnosSeguros
}

if (!minaExplota) {
    alert("Has ganado!")
} else {
    alert("Has pillado una mina!")
}
```

---
```javascript
let turno = 1
if (turno == 1) {
    turno = 2
} else {
    turno = 1
}
```

## 10. REFERENCIA RÁPIDA DE MÉTODOS UTILIZADOS

| Método / expresión | Para qué lo usaste |
|---|---|
| `array.push(valor)` | Añadir al final |
| `array.pop()` | Quitar el último |
| `array.unshift(valor)` | Añadir al inicio |
| `array.shift()` | Quitar el primero |
| `array.at(0)` / `array.at(-1)` | Consultar primero / último |
| `array.length` | Saber cuántos elementos hay |
| `array[i]` | Acceder o cambiar la posición `i` |
| `array.slice()` | Copiar un array |
| `array.slice(1)` | Crear otro array desde el segundo elemento |
| `array.splice(i, 1)` | Quitar un elemento en posición `i` |
| `array.join(", ")` | Mostrar el array unido por comas |
| `array.indexOf(valor)` | Buscar la posición de un valor (`-1` si no aparece) |
| `texto.includes(palabra)` | Comprobar si un texto contiene otro |
| `texto.indexOf(palabra)` | Obtener dónde empieza una coincidencia |
| `texto.trim()` | Quitar espacios de los extremos |
| `texto.toUpperCase()` / `texto.toLowerCase()` | Unificar mayúsculas/minúsculas |
| `texto.startsWith(...)` / `texto.endsWith(...)` | Comprobar prefijo/sufijo |
| `texto.split(" ").join("")` | Quitar espacios entre palabras |
| `Math.max(...array)` / `Math.min(...array)` | Obtener máximo / mínimo |
| `numero.toFixed(2)` | Mostrar dos decimales |
| `array.forEach((elemento) => {...})` | Recorrer elementos (como en R8E8) |
| `Math.floor(Math.random() * 10)` | Obtener un índice aleatorio del 0 al 9 |
| `Math.floor(Math.random() * (max - min + 1) + min)` | Obtener un numero aleatorio ente min y max |

**Recordatorio para el examen:** conserva la misma posición entre arrays paralelos, busca el índice antes de consultar un valor asociado y adapta únicamente los fragmentos que necesites idiota.
