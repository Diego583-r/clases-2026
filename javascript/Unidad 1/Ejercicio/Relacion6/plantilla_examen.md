# 🚀 PLANTILLA DE EXAMEN - JAVASCRIPT
```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen JavaScript</title>
</head>

<body>

    <script>

        // ==========================================
        // 1. PEDIR DATOS Y VALIDACIONES HABITUALES
        // ==========================================

        let numero = Number(prompt("Introduce un número entero positivo:"));
        while (numero < 0 || numero) {
            numero = Number(prompt("Error: Debe ser un número entero positivo:"));
        }

        let numeroRango = Number(prompt("Introduce un número del 1 al 10:"));
        while (numeroRango < 1 || numeroRango > 10) {
            numeroRango = Number(prompt("Error: Introduce un número del 1 al 10:"));
        }

        let num1 = Number(prompt("Introduce el primer número (menor):"));
        let num2 = Number(prompt("Introduce el segundo número (mayor):"));
        while (num1 >= num2) {
            alert("Error: El primer número debe ser estrictamente menor que el segundo.");
            num1 = Number(prompt("Introduce el primer número (menor):"));
            num2 = Number(prompt("Introduce el segundo número (mayor):"));
        }


        // ==========================================
        // 2. COMPROBACIONES MÁS USADAS (IF / ELSE)
        // ==========================================

        // Comprobar PAR o IMPAR
        if (numero % 2 === 0) {
            console.log("Es PAR");
        } else {
            console.log("Es IMPAR");
        }

        // Comprobar MÚLTIPLO de un número (Ejemplo: Múltiplo de 5)
        if (numero % 5 === 0) {
            console.log("Es múltiplo de 5");
        }

        // ==========================================
        // 3. ESTRUCTURAS DE BUCLES COMUNES
        // ==========================================

        // Bucle ascendente (desde 1 hasta el NUMERO incluido)
        for (let i = 1; i <= numero; i++) {
            console.log(i);
        }

        // Bucle ascendente (desde 0 hasta el NUMERO - 1)
        for (let i = 0; i < numero; i++) {
            console.log(i);
        }

        // Bucle descendente (desde el NUMERO hasta 0)
        for (let i = numero; i >= 0; i--) {
            console.log(i);
        }

        // Bucle entre DOS NÚMEROS (num1 a num2)
        for (let i = num1; i <= num2; i++) {
            console.log(i);
        }


        // ==========================================
        // 4. ACUMULADORES, CONTADORES Y TEXTOS
        // ==========================================

        let sumaTotal = 0;
        let contador = 0;
        let textoConcatenado = "";

        for (let i = 1; i <= numero; i++) {
            sumaTotal += i;             // Suma acumulada
            contador++;
            textoConcatenado += i + " "; // Ir pegando valores en una sola cadena
        }


        // ==========================================
        // 5. CENTINELA (Pedir datos hasta introducción de PARADA)
        // ==========================================

        // Pedir hasta introduzca -1 (útil para notas, precios, etc.)

        // Pedir hasta introducir una palabra fija (ej: "SALIR")
        let palabra = prompt("Introduce una palabra ('SALIR' para terminar):");
        while (palabra !== "SALIR") {
            // Hacer operaciones con la palabra
            palabra = prompt("Introduce otra palabra ('SALIR' para terminar):");
        }


        // ==========================================
        // 6. MATEMÁTICAS CON DÍGITOS (Sin convertir a texto)
        // ==========================================

        let numTemp = numero;
        let numeroInvertido = 0;
        let sumaDigitos = 0;
        let cantidadDigitos = 0;

        while (numTemp > 0) {
            let ultimoDigito = numTemp % 10;// Extraer el último dígito
            sumaDigitos += ultimoDigito;// Sumar el dígito
            numeroInvertido = (numeroInvertido * 10) + ultimoDigito; // Invertir el número
            cantidadDigitos++;// Contar cuántos dígitos lleva

            numTemp = Math.floor(numTemp / 10);// Eliminar el último dígito
        }


        // ==========================================
        // 7. PATRONES GRÁFICOS Y PIRÁMIDES (FOR ANIDADOS)
        // ==========================================

        let filas = numero;

        // Pirámide Creciente Izquierda (*)
        // *
        // **
        // ***
        for (let i = 1; i <= filas; i++) {
            let linea = "";
            for (let j = 0; j < i; j++) {
                linea += "*";
            }
            console.log(linea);
        }

        // Pirámide Creciente Derecha
        //   *
        //  **
        // ***
        for (let i = 1; i <= filas; i++) {
            let linea = "";
            let espacios = filas - i;

            // Añadir espacios
            for (let j = 0; j < espacios; j++) {
                linea += " ";
            }
            // Añadir asteriscos
            for (let k = 0; k < i; k++) {
                linea += "*";
            }
            console.log(linea);
        }

        // Pirámide Numérica Creciente
        // 1
        // 12
        // 123
        for (let i = 1; i <= filas; i++) {
            let linea = "";
            for (let j = 1; j <= i; j++) {
                linea += j;
            }
            console.log(linea);
        }

    </script>
</body>

</html>