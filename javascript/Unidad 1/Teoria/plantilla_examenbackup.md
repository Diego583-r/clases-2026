<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Examen Programación - Plantilla Base 2</title>
</head>

<body>

    <script>

        // ==========================================
        // 1. LECTURA Y VALIDACIÓN DE DATOS (PROMPT)
        // ==========================================

        // Lectura de un número entero en rango
        let valorRango = parseInt(prompt("Introduce un valor entero:"));
        while (/* COMPROBAR CONDICIÓN DE ERROR (Ej: fuera de rango o NaN) */ false) {
            alert("Error: Valor no válido.");
            valorRango = parseInt(prompt("Reintroduce el valor entero:"));
        }

        // Lectura y comparación de dos límites (numMin < numMax)
        let numMin = parseFloat(prompt("Introduce el límite inferior:"));
        let numMax = parseFloat(prompt("Introduce el límite superior:"));
        while (/* COMPROBAR SI numMin Y numMax SON INVÁLIDOS */ false) {
            alert("Error: El límite inferior debe ser estrictamente menor que el superior.");
            numMin = parseFloat(prompt("Introduce el límite inferior:"));
            numMax = parseFloat(prompt("Introduce el límite superior:"));
        }


        // ==========================================
        // 2. ESTRUCTURAS CONDICIONALES (IF / ELSE IF / ELSE)
        // ==========================================

        let valorEvaluacion = parseFloat(prompt("Introduce un valor a evaluar:"));

        // Modulo y divisibilidad
        if (/* COMPROBAR PAR/IMPAR O MÚLTIPLO */ false) {
            // Acción 1
        } else {
            // Acción 2
        }

        // Clasificación por intervalos / rangos
        if (/* CONDICIÓN RANGO 1 */ false) {
            // Resultado Rango 1
        } else if (/* CONDICIÓN RANGO 2 */ false) {
            // Resultado Rango 2
        } else if (/* CONDICIÓN RANGO 3 */ false) {
            // Resultado Rango 3
        } else {
            // Caso por defecto / Error de rango
        }


        // ==========================================
        // 3. ESTRUCTURAS DE BUCLES DETERMINADOS (FOR)
        // ==========================================

        let limiteIteraciones = parseInt(prompt("Número de iteraciones a realizar:"));

        // Bucle estándar incremental
        for (let i = 1; i <= limiteIteraciones; i++) {
            /* TU CÓDIGO AQUÍ */
        }

        // Bucle decremental
        for (let i = limiteIteraciones; i >= 0; i--) {
            /* TU CÓDIGO AQUÍ */
        }

        // Bucle entre un rango [numMin, numMax]
        for (let i = numMin; i <= numMax; i++) {
            /* TU CÓDIGO AQUÍ */
        }


        // ==========================================
        // 4. BUCLES INDETERMINADOS (WHILE) / CENTINELAS
        // ==========================================

        // 4.1 Bucle por bandera / Centinela de Texto (Ej. Parar al escribir "FIN")
        let entradaTexto = prompt("Introduce un texto ('FIN' para salir):");
        
        while (entradaTexto !== "FIN") {
            /* 
               1. Lectura de datos asociados
               2. Lógica de acumulación / comparación
            */

            entradaTexto = prompt("Introduce el siguiente texto ('FIN' para salir):");
        }

        // 4.2 Bucle centinela por valor límite/cero
        let entradaNumero = parseFloat(prompt("Introduce un número (0 para finalizar):"));

        while (entradaNumero !== 0) {
            /* 
               Lógica con el número introducido
            */

            entradaNumero = parseFloat(prompt("Introduce el siguiente número (0 para finalizar):"));
        }

        // 4.3 Acumulador controlado por tope máximo
        const CAPACIDAD_MAX = 100;
        let acumulador = 0;

        while (acumulador < CAPACIDAD_MAX) {
            let aporte = parseFloat(prompt("Introduce cantidad a sumar:"));
            
            /* LÓGICA DE CONTROL DE EXCESO Y ACUMULACIÓN */
            acumulador += aporte;
        }


        // ==========================================
        // 5. BÚSQUEDA DE EXTREMOS (MÁXIMOS Y MÍNIMOS) Y ESTADÍSTICAS
        // ==========================================

        let minEncontrado = Infinity;
        let maxEncontrado = -Infinity;
        let sumaAcumulada = 0;
        let contadorTotal = 0;

        // Estructura de actualización de extremos
        /*
           Dentro de tu bucle:
           - Actualizar contador y suma total.
           - Evaluar si el valor actual es menor que 'minEncontrado'.
           - Evaluar si el valor actual es mayor que 'maxEncontrado'.
        */

        // Cálculo de promedio (Validar división por cero)
        let promedio = contadorTotal > 0 ? (sumaAcumulada / contadorTotal) : 0;


        // ==========================================
        // 6. TRATAMIENTO ALGORÍTMICO DE NÚMEROS (DÍGITO A DÍGITO)
        // ==========================================

        let numeroProcesar = parseInt(prompt("Introduce número para descomponer:"));
        let auxiliar = numeroProcesar;

        while (auxiliar > 0) {
            let digito = auxiliar % 10;
            
            /* 
               IMPLEMENTAR LÓGICA CON EL DÍGITO EXTRAÍDO
               (Ej: sumar dígitos, invertir número, contar pares, etc.)
            */

            auxiliar = Math.floor(auxiliar / 10); // Reducción del número
        }


        // ==========================================
        // 7. ANIDAMIENTO DE BUCLES (PATRONES Y MATRICES)
        // ==========================================

        let dimension = parseInt(prompt("Introduce la dimensión de la figura:"));

        for (let i = 1; i <= dimension; i++) {
            let linea = "";

            for (let j = 1; j <= /* DEFINIR LÍMITE INTERNO */ i; j++) {
                /* CONSTRUCCIÓN DE LA LÍNEA */
            }

            console.log(linea);
        }

    </script>
</body>

</html>