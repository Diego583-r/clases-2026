<!-- 🚗 Relación Práctica: Cars - ¡Nuevos Retos de Entrenamiento!

1. Control de velocidad en Radiador SpringsEl Sheriff necesita controlar la velocidad de los coches que transitan por la calle principal. El programa debe pedir la velocidad de varios coches una por una hasta que se introduzca un -1 para finalizar. La velocidad máxima permitida es 45 km/h.Al final, muestra:Total de coches registrados.Cuántos coches superaron el límite de velocidad.La velocidad máxima registrada.🧪 Ejemplo:Velocidad coche 1: 40
Velocidad coche 2: 52
Velocidad coche 3: 45
Velocidad coche 4: 68
Velocidad coche 5: -1

Total de coches: 4
Coches con exceso de velocidad: 2
Velocidad máxima registrada: 68 km/h
💡 Usa un bucle while para pedir datos hasta recibir -1 y condicionales if para acumular los excesos de velocidad.



2. Taller de Pintura de RamónRamón cobra 150€ por pintar un coche completo. Si el cliente pide un acabado especial (Custom), se suman 50€ extra. Crea un programa que pregunte cuántos coches van a pintar hoy. Para cada coche, solicita el nombre del dueño y si desea acabado especial (SI o NO).Al final, muestra:El total recaudado en el taller.Cuántos trabajos incluyeron acabado especial.🧪 Ejemplo:Número de coches a pintar: 3

Coche 1 - Nombre: Flo
¿Acabado especial? (SI/NO): NO
Coche 2 - Nombre: McQueen
¿Acabado especial? (SI/NO): SI
Coche 3 - Nombre: Ramone
¿Acabado especial? (SI/NO): SI

Total recaudado: 550€
Coches con acabado especial: 2
💡 Usa un bucle for según la cantidad de coches indicada.



3. Consumo de aceite de MateMate tiene un bidón con 50 litros de aceite de motor para dar mantenimiento a sus grúas amigas. En cada servicio, solicita la cantidad de litros consumidos. El programa debe detenerse cuando se agote el aceite del bidón (llegue a 0 o menos).Al final, muestra:El número de servicios de mantenimiento realizados.Si sobró aceite o cuántos litros faltaron en el último servicio.🧪 Ejemplo:Servicio 1: 15 litros consumidos (Quedan 35)
Servicio 2: 20 litros consumidos (Quedan 15)
Servicio 3: 20 litros consumidos (Quedan -5)

¡Se ha agotado el aceite del bidón!
Servicios realizados: 3
Faltaron 5 litros para completar el último servicio.
💡 Usa while restando la cantidad ingresada al total disponible.



4. Prueba de Aceleración con Doc HudsonDoc Hudson examina la aceleración de $N$ coches en la pista de tierra de 0 a 100 km/h. Por cada coche, pide su nombre y el tiempo en segundos que tardó en alcanzar la velocidad. Clasifícalos según la tabla:Menos de 4 segundos: ⚡ SuperdeportivoEntre 4 y 7 segundos: 🚗 DeportivoMás de 7 segundos: 🐢 Estándar🧪 Ejemplo:¿Cuántos coches evaluar?: 3

Coche 1: Jackson Storm - 3.2 segundos → Superdeportivo
Coche 2: Cruz Ramirez - 4.5 segundos → Deportivo
Coche 3: Mate - 9.1 segundos → Estándar
💡 Usa un bucle for y if / else if / else para clasificar según el tiempo.



5. Entradas para el Museo de Doc HudsonEn el museo de Radiador Springs, la entrada general cuesta 10€. Los niños (menores de 12 años) y jubilados (65 años o más) tienen un descuento y pagan 5€. El programa debe pedir la edad del visitante una a una y finalizar cuando se introduzca un -1.Al final, muestra:Total de visitantes.Total recaudado en taquilla.Cuántas personas entraron con descuento.🧪 Ejemplo:Edad visitante 1: 25
Edad visitante 2: 10
Edad visitante 3: 70
Edad visitante 4: -1

Total de visitantes: 3
Total recaudado: 20€
Visitantes con descuento: 2
💡 Usa while para la entrada continua de datos e if para determinar las tarifas. -->