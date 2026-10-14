## Ejercicios extra de práctica con if-else anidados (Opcionales)

### 1. **Clasificación académica avanzada**
  - Pide al usuario tres datos:  
    1. Su **nota numérica** (0–100).  
    2. Su **asistencia** en porcentaje (0–100).  
    3. Si entregó el **trabajo final** (sí/no).  

  - Reglas de evaluación:
    - Para **aprobar** se necesita:
      - Nota mayor o igual a 50 **y**
      - Asistencia mayor o igual a 75%.  
      - Si no cumple alguno de los dos, queda **Suspenso**.
        - Si además la nota es menor de 30, indicar **Suspenso grave**.
    - Si aprueba:
      - Nota entre 50 y 69 → **Aprobado**.
        - Si no entregó el trabajo final → se baja a **No presentado**.
      - Nota entre 70 y 89 → **Notable**.
        - Si la asistencia es del 100% → mensaje extra "Con mención especial".
      - Nota entre 90 y 100 → **Sobresaliente**.
        - Si entregó el trabajo final y asistencia = 100% → **Matrícula de Honor**.



### 2. **Clasificación de edad y precio de entrada**
  - Pide al usuario su edad.
  - Reglas:
    - Menores de 12 años → Entrada gratuita.
      - Si son menores de 5 años → Además, dar mensaje "Debe ir acompañado de un adulto".
    - Entre 12 y 17 años → Entrada reducida (5 €).
    - Entre 18 y 64 años → Entrada general (10 €).
    - 65 años o más → Entrada reducida (4 €).
      - Si es mayor de 90 años → mensaje extra "Entrada gratuita por cortesía".

---

### 3. **Verificación de contraseña con niveles de seguridad**
  - Pide al usuario una contraseña.
  - Comprobaciones:
    - Si la longitud es menor de 6 caracteres → "Contraseña demasiado corta".
    - Si tiene 6 o más:
      - Si no contiene el carácter `@`, `#` o `!` → "Contraseña débil".
      - Si contiene uno de esos caracteres:
        - Si la longitud es de al menos 10 → "Contraseña fuerte".
        - Si es menor de 10 → "Contraseña media".

---

### 4. **Sistema de recomendación de actividades según clima y hora**
  - Pide al usuario la **temperatura actual** y la **hora del día** (0–23).
  - Reglas:
    - Si la temperatura es menor de 15°C:
      - Si la hora está entre 6 y 20 → Recomendar "Ir a caminar con abrigo".
      - Si la hora está entre 21 y 5 → Recomendar "Quedarse en casa con una bebida caliente".
    - Si la temperatura está entre 15 y 30°C:
      - Si la hora es entre 6 y 20 → Recomendar "Hacer deporte al aire libre".
      - Si la hora es entre 21 y 5 → Recomendar "Salir a pasear por la ciudad".
    - Si la temperatura es mayor de 30°C:
      - Si la hora está entre 12 y 18 → Recomendar "Ir a la piscina o la playa".
      - En cualquier otra hora → Recomendar "Evitar esfuerzos, descansar".
