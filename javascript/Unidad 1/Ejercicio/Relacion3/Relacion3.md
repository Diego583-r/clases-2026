## Relación de ejercicios 2: if-else

### 1. **Calcular el área de un círculo**:
  - Pide al usuario el radio de un círculo y calcula el área.

### 2. **Comprobar si un número es par o impar**:
  - Pide un número al usuario y determina si es par o impar.

### 3. **Calcular el promedio de tres números**:
  - Solicita tres números y calcula el promedio.

### 4. **Determinar si un número es múltiplo de 5**:
  - Solicita un número y determina si es múltiplo de 5.

### 5. **Determinar si un número está en un rango**:
  - Solicita un número e indica si está entre 10 y 20 (inclusive).

### 6. **Determinar si un año es bisiesto**:
  - Solicita un año y determina si es bisiesto.

### 7. **Simular una calculadora simple**:
  - Pide dos números y una operación (`+`, `-`, `*`, `/`) e imprime el resultado correspondiente.

### 8. **Determinar si un número es positivo, negativo o cero**:
  - Solicita un número y determina si es positivo, negativo o cero.

### 9. **Sumar los dígitos de un número de dos cifras**:
  - Pide un número de dos cifras e imprime la suma de sus dígitos.
  - Si el número introducido no es de dos cifras, se debe avisar al usuario.

### 10. **Calificación de un examen**:
  - Pide al usuario su calificación (entre 0 y 100) y devuelve su letra correspondiente:
    - A (90-100).
    - B (80-89).
    - C (70-79).
    - D (60-69).
    - F (0-59).

### 11. **Día de la semana**:
  - Solicita un número del 1 al 7 e imprime el día de la semana correspondiente (1 para lunes, 2 para martes, etc.).

### 12. **Identificar el tipo de triángulo**:
  - Pide al usuario las longitudes de los tres lados de un triángulo e indica si es equilátero, isósceles o escaleno.

### 13. **Determinar si un carácter es vocal o consonante**:
  - Pide una letra al usuario e indica si es una vocal (`a`, `e`, `i`, `o`, `u`) o una consonante.

### 14. **Estado del clima**:
  - Solicita la temperatura actual e imprime:
    - "Muy frío" si es menor a 0°C.
    - "Frío" si es entre 0°C y 15°C.
    - "Templado" si es entre 16°C y 25°C.
    - "Caliente" si es mayor a 25°C.

### 15. **Determinar el tipo de ángulo**:
  - Solicita el valor de un ángulo y determina si es:
    - Ángulo agudo (< 90°).
    - Ángulo recto (= 90°).
    - Ángulo obtuso (> 90° pero < 180°).
    - Ángulo llano (= 180°).

### 16. **Calculadora de impuestos progresivos**:
  - Pide al usuario su salario anual e imprime el impuesto a pagar según estos tramos:
    - Menos de 10.000€: 0% de impuestos.
    - De 10.000€ a 20.000€: 10%.
    - De 20.000€ a 40.000€: 20%.
    - Más de 40.000€: 30%.

### 17. **Calcular el precio de una llamada telefónica**:
  - Pide al usuario la duración de una llamada (en minutos) y calcula el coste total según estas reglas:
    - Los primeros 3 minutos son gratis.
    - De 3 a 10 minutos cuesta 0.50€ por minuto.
    - Más de 10 minutos cuesta 0.30€ por minuto adicional.

### 18. **Sistema de becas basado en promedio y situación económica**:
  - Solicita el promedio académico del estudiante y su ingreso familiar anual:
    - Si tiene un promedio mayor o igual a 8 y su ingreso es menor a 20.000€, recibe una beca completa.
    - Si tiene un promedio mayor o igual a 8, pero su ingreso es mayor a 20.000€, recibe una beca parcial.
    - Si tiene un promedio menor a 8, no recibe beca.

### 19. **Cálculo de coste de estacionamiento**:
  - Pide al usuario el tiempo que estuvo estacionado (en horas) y calcula el coste:
    - Primeras 2 horas: 5€ cada hora.
    - De 2 a 5 horas: 4€ cada hora.
    - Más de 5 horas: 3€ cada hora adicional.

### 20. **Evaluación de crédito según historial**:
  - Solicita la puntuación de crédito del usuario y el tiempo que ha estado en el banco:
    - Si la puntuación es mayor a 650 y lleva más de 5 años como cliente, se le aprueba un crédito premium.
    - Si la puntuación es mayor a 650 y lleva entre 2 y 5 años, se le aprueba un crédito estándar.
    - Si la puntuación es menor a 650 o lleva menos de 2 años, se le rechaza el crédito.

### 21. **Sistema de clasificación de IMC**:
  - Pide el peso y la altura del usuario para calcular el IMC, luego clasifica en:
    - Bajo peso (IMC < 18.5).
    - Normal (IMC entre 18.5 y 24.9).
    - Sobrepeso (IMC entre 25 y 29.9).
    - Obesidad (IMC >= 30).

### 22. **Determinar el ganador de un juego de piedra, papel o tijera**:
  - Pide a dos jugadores que ingresen "piedra", "papel" o "tijera" y determina el ganador según las reglas del juego.

### BONUS. **Calculadora de impuestos progresivos**

Crea un programa que pida al usuario su salario anual y calcule los **impuestos a pagar** aplicando un sistema progresivo por tramos:

- Los **primeros 10.000 €** no pagan impuestos.  
- Los **siguientes 10.000 €** (de 10.001 € a 20.000 €) pagan el **10%**.  
- Los **siguientes 20.000 €** (de 20.001 € a 40.000 €) pagan el **20%**.  
- Todo lo que supere los **40.000 €** paga el **30%**.  

El programa debe mostrar:  
1. Los **impuestos totales a pagar**.  
2. El **tipo efectivo de impuestos** (es decir, el porcentaje real sobre el salario que representa la cantidad de impuestos).  

---

#### Ejemplo de funcionamiento:

Si el salario es **33.500 €**:  
- Primeros 10.000 € → 0 €  
- Siguientes 10.000 € → 1.000 € (10%)  
- Restantes 13.500 € → 2.700 € (20%)  
- **Total de impuestos = 3.700 €**  
- **Tipo efectivo ≈ 11,04 %**
