# Guía de estilo

Para estandarizar la escritura del código de los próximos Sprints, se propone la siguiente guía de estilo. Se toma como referencia la Guía de estilo de Google disponible en https://google.github.io/styleguide/jsguide.html 

## Nombres - idioma

Aplicar nombres en español a todas las variables.

## Nombres - de los archivos

Los archivos pueden contener guiones bajos (_) or guiones comunes (-), sin otros signos de puntuación.

## Formato via Prettier

Con el fin de estandarizar los formatos de escritura de código, utilizar la extensión Prettier. Setear VS Code para que aplique el formato Prettier automáticamente al guardar. Ver la guía de como instalar y aplicar Prettier al guardar un documento en esta página https://www.alphr.com/use-prettier-vs-code/

## Formato - uso de llaves, corchetes y paréntesis

Se requiere el uso de llaves, corchetes y paréntesis en las estructuras de control. Ejemplo

## Formato - modo de uso de llaves, corchetes y paréntesis

Utilizar el estilo "Egipcio" en el uso de llaves, corchetes y paréntesis:
- sin línea nueva antes del signo de puntuación inicial,
- con nueva línea después del signo de puntuación inicial,
- línea nueva después del signo de puntuación que cierra.

Ejemplo:
``` js
class InnerClass {
  constructor() {}

  /** @param {number} foo */
  method(foo) {
    if (condition(foo)) {
      try {
        // Note: this might fail.
        something();
      } catch (err) {
        recover();
      }
    }
  }
}
```
## Formato - uso del 'punto y coma' al finalizar;

Se requiere el uso del punto y coma al finalizar cada declaración;

## Formato - longitud de las líneas

Las líneas de código deberán tener un límite de 80 caracteres, cualquier línea que supere los 80 caracteres deberá seguir en la línea inferior.



