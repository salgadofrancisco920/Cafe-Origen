# Registro Bitacora
## Dia 1
#### MiniReto 1
## Dicionario de datos

* **length:** Propiedad que indica cuántos elementos tiene un arreglo ([]) o cuántos caracteres tiene un texto (""). Por ejemplo, ventas.length vale 12 en la muestra inicial.
* **module.exports:** Es la "puerta de salida" de un archivo en Node.js. Sirve para exportar funciones o datos desde un archivo hacia otro del proyecto.
* **require:** Es la función que importa o trae lo que otro archivo exportó con module.exports (o módulos integrados de Node.js) para reutilizar código.
* **console.table:** Método de consola en Node.js que imprime arreglos u objetos en forma de tabla ordenada con filas y columnas, facilitando la revisión visual en terminal.

* **{} (Llaves):** Agrupan pares de clave y valor para crear **objetos** (ej. { ciudad: "Medellín", cantidad: 3 }) o delimitan bloques de código dentro de funciones, condicionales (if) o bucles.
* **[] (Corchetes):** Definen un **arreglo (*array*)**, es decir, una lista ordenada de elementos (ej. venta1, venta2), o permiten acceder a una posición específica como ventas[0].
* **, (Coma):** Separa elementos dentro de un arreglo ([]), propiedades dentro de un objeto ({}) o argumentos al llamar una función.
* **" (Comillas dobles):** Delimitan cadenas de texto (string), como "Medellín" o "CLI-001". Todo lo que va entre comillas se interpreta como texto literal.
* **() (Paréntesis):** Sirven para ejecutar funciones (ej. limpiarDatos(ventas)), pasarles datos de entrada o agrupar condiciones lógicas.
* **: (Dos puntos):** Dentro de un objeto ({}), separa el nombre de una propiedad de su valor (ej. cantidad: 5).
* **; (Punto y coma):** Marca el final de una instrucción o sentencia en JavaScript para indicar dónde termina una línea de código.

---
## 4. Casos Borde y Reglas de Limpieza
Errores encontrados en los datos que hay que limpiar antes de sacar cuentas:

1. **Arreglar los textos (ciudad):** Quitar espacios al inicio o al final y pasar todo a un mismo formato (ej. minúsculas) para que no se cuenten ciudades repetidas por error de escritura.
2. **Filtrar números malos (cantidad):** Ignorar o separar las filas donde la cantidad esté vacía, sea 0 o sea un número negativo, porque dañan la suma total.
3. **Revisar códigos (Cliente):** Asegurar que cada venta tenga un código válido y sin errores de formato antes de agrupar compras por cliente.


#### MiniReto 2

**valorVenta** empieza sin sumar nada solo multiplica cantidad por precio de una venta y lo devuelve

**totalVendido:** empieza en cero revisa cada venta si la cantidad es mayor que cero suma el valor de la venta y al final da el total

**unidadesVendidas:** empieza en cero mira cada venta si la cantidad es mayor que cero suma la cantidad y al final da el total de cosas vendidas

**ventaMayor:** empieza vacio revisa cada venta si la cantidad es mayor que cero y vale mas que lo que tenia guardado antes guarda esa venta completa y al final la devuelve

**ticketPromedio:** empieza la plata en cero y las ventas buenas en cero revisa cada venta si la cantidad es mayor que cero suma la plata y suma uno al contador al final si no hubo ventas buenas da cero y si si hubo divide la plata entre las ventas buenas

**ventasPorCiudad:** empieza en cero limpia los textos y los pone en minuscula revisa cada venta si la cantidad es mayor que cero y la ciudad es igual suma el valor de la venta y al final da el total

traza manual 

**en ventaMayor:** si hay una venta de 10 y otra de 25 primero guarda 10 luego ve 25 como es mayor cambia a 25 y queda 25 igual que en el programa
en **ticketPromedio:** si hay dos ventas buenas de 10 y 20 suman 30 dividido entre 2 da 15 igual que en el programa

**si la lista esta vacia:**
los totales y el promedio dan cero para no sacar error ni raro y ventaMayor da vacio porque no hay ninguna venta para mostrar

