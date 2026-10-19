<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plantilla Examen JavaScript</title>
</head>

<body>

    <script>

        // ==========================================
        // 1. PEDIR DATOS Y VALIDACIONES HABITUALES
        // ==========================================

        let numero = Number(prompt("Introduce un número entero positivo:"));
        while (numero < 0) {
            numero = Number(prompt("Error: Debe ser un número entero positivo:"));
        }

        let numeroRango = Number(prompt("Introduce un número del 1 al 10:"));
        while (numeroRango < 1 || numeroRango > 10) {
            numeroRango = Number(prompt("Error: Introduce un número del 1 al 10:"));
        }

        let num1 = Number(prompt("Introduce el primer número (menor):"));
        let num2 = Number(prompt("Introduce el segundo número (mayor):"));
        while (num1 >= num2) {
            alert("Error: El primer número debe ser strictly menor que el segundo.");
            num1 = Number(prompt("Introduce el primer número (menor):"));
            num2 = Number(prompt("Introduce el segundo número (mayor):"));
        }


        // ==========================================
        // 2. COMPROBACIONES MÁS USADAS (IF / ELSE / ELSE IF)
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

        // Clasificación por rangos de valores (Ej: Copa Pistón / Notas / Rangos)
        let puntos = Number(prompt("Introduce la puntuación (0-100):"));
        if (puntos >= 80 && puntos <= 100) {
            console.log("Categoría: Oro / Sobresaliente");
        } else if (puntos >= 50 && puntos < 80) {
            console.log("Categoría: Plata / Aprobado");
        } else if (puntos >= 0 && puntos < 50) {
            console.log("Categoría: Fuera de podio / Suspenso");
        } else {
            console.log("Puntuación fuera de rango válido");
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
        // 5. CENTINELA Y LÍMITES (BUCLES WHILE)
        // ==========================================

        // 5.1 Centinela por Cadena/Palabra clave (Ej: Parar con "FIN" o "SALIR")
        let nombre = prompt("Introduce un nombre ('FIN' para terminar):");
        let minTiempo = Infinity;
        let nombreMin = "";
        let totalCoches = 0;
        let sumaTiempos = 0;

        while (nombre !== "FIN") {
            let tiempo = parseFloat(prompt("Introduce tiempo del elemento " + (totalCoches + 1) + ":"));

            totalCoches++;
            sumaTiempos += tiempo;

            if (tiempo < minTiempo) {
                minTiempo = tiempo;
                nombreMin = nombre;
            }

            nombre = prompt("Introduce un nombre ('FIN' para terminar):");
        }
        if (totalCoches > 0) {
            console.log("Total registrados: " + totalCoches);
            console.log("Promedio: " + (sumaTiempos / totalCoches));
            console.log("Mejor registro: " + nombreMin + " con " + minTiempo);
        }

        // 5.2 Centinela por Valor Numérico de Parada (Ej: Parar al meter 0)
        let totalItems = 0;
        let totalClientes = 0;
        let contadorCondicionEspecial = 0;

        let valor = parseInt(prompt("Introduce valor (0 para terminar):"));
        while (valor !== 0) {
            totalItems += valor;
            totalClientes++;

            if (valor === 4) { // Condición específica
                contadorCondicionEspecial++;
            }

            valor = parseInt(prompt("Introduce valor (0 para terminar):"));
        }
        console.log("Total atendidos: " + totalClientes);
        console.log("Suma acumulada de ítems: " + totalItems);
        console.log("Coincidencias de condición especial: " + contadorCondicionEspecial);

        // 5.3 Acumulador hasta alcanzar un Límite/Capacidad (Ej: Gasolinera / Tanque Lleno)
        const CAPACIDAD_MAXIMA = 60;
        let acumuladoActual = 0;
        let iteraciones = 0;
        const PRECIO_UNIDAD = 1.25;

        while (acumuladoActual < CAPACIDAD_MAXIMA) {
            let aporte = parseFloat(prompt("Introduce cantidad a sumar (Máx rest: " + (CAPACIDAD_MAXIMA - acumuladoActual) + "):"));
            acumuladoActual += aporte;
            iteraciones++;
        }
        let costeTotal = acumuladoActual * PRECIO_UNIDAD;
        console.log("Capacidad alcanzada/superada.");
        console.log("Total de aportaciones: " + iteraciones);
        console.log("Total coste/acumulado: " + costeTotal);


        // ==========================================
        // 6. BÚSQUEDA DE MÍNIMOS / MÁXIMOS EN BUCLES FOR
        // ==========================================

        const TOTAL_ITERACIONES = 5;
        let acumuladoFor = 0;
        let valorMinimo = Infinity;
        let valorMaximo = -Infinity;
        let indiceMinimo = 0;

        for (let i = 1; i <= TOTAL_ITERACIONES; i++) {
            let valorEntrada = parseFloat(prompt("Introduce el valor para la iteración " + i + ":"));
            acumuladoFor += valorEntrada;

            if (valorEntrada < valorMinimo) {
                valorMinimo = valorEntrada;
                indiceMinimo = i;
            }

            if (valorEntrada > valorMaximo) {
                valorMaximo = valorEntrada;
            }
        }
        let promedioFor = acumuladoFor / TOTAL_ITERACIONES;
        console.log("Suma total: " + acumuladoFor);
        console.log("Promedio: " + promedioFor);
        console.log("Mínimo encontrado: " + valorMinimo + " en la iteración " + indiceMinimo);
        console.log("Máximo encontrado: " + valorMaximo);


        // ==========================================
        // 7. MATEMÁTICAS CON DÍGITOS (Sin convertir a texto)
        // ==========================================

        let numTemp = numero;
        let numeroInvertido = 0;
        let sumaDigitos = 0;
        let cantidadDigitos = 0;

        while (numTemp > 0) {
            let ultimoDigito = numTemp % 10;                     // Extraer el último dígito
            sumaDigitos += ultimoDigito;                         // Sumar el dígito
            numeroInvertido = (numeroInvertido * 10) + ultimoDigito; // Invertir el número
            cantidadDigitos++;                                   // Contar cuántos dígitos lleva

            numTemp = Math.floor(numTemp / 10);                  // Eliminar el último dígito
        }


        // ==========================================
        // 8. PATRONES GRÁFICOS Y PIRÁMIDES (FOR ANIDADOS)
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