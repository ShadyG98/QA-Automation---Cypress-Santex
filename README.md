## XAcademy
## QA Automation
### Trello: https://trello.com/b/d95n96JT/saucedemo-qa-automation 
### Plan de pruebas: https://docs.google.com/spreadsheets/d/1z88R_VCYDiSMn8zNHTPlWinaPwejp6it/edit?gid=1761268626#gid=1761268626 

## Trabajo Final

1. Generar un plan de pruebas para posteriormente automatizarlo
2. Tener instalado cypress
3. Crear el test “myTestSaucedemo.cy.js”
4. En el siguiente sitio: https://www.saucedemo.com, generar los tests:
4.1. Compra con user 1 <br>
4.1.1. Login con el usuario “standard_user” <br>
4.1.2. Agregar los productos al carrito <br>
4.1.3. Hacer el checkout <br>
4.1.4. Validar que se haya realizado el checkout <br>
4.1.5. Realizar el logout <br>
4.2. Compra con user 2 <br>
4.2.1. Ingresar con el usuario “problem_user” <br>
4.2.2. Repetir los puntos 4.1.2, 4.1.3, 4.1.4, 4.1.5

5. Utilizar la herramienta de gestión de incidencias Trello y reportar los defectos o mejoras detectadas en la siguiente plantilla de incidentes <br>
6. Formato de entrega: Subir el trabajo a github y adjuntar el link del repositorio a la entrega <br>

Criterios de Evaluación: <br>
● Aplicar todo lo aprendido <br>
● Comprensión y aplicación: Se evaluará la comprensión y correcta aplicación de los conceptos aprendidos durante el curso, reflejados en el trabajo final. <br>
● Uso de buenas prácticas: El código debe demostrar buenas prácticas en automatización de pruebas. <br>

Uso de Herramientas <br>
●  Flexibilidad en la elección de herramientas: Los estudiantes pueden utilizar cualquier herramienta adicional que consideren útil para completar el trabajo, además de Cypress. <br>

Plan de Pruebas <br>
●  Presencia de un plan de pruebas: Es fundamental contar con un plan de pruebas bien definido. <br>
●  Claridad y detalle: El plan de pruebas debe ser claro y detallado, con una descripción precisa de los casos de prueba. <br>

Automatización de Pruebas <br>
●  Cumplimiento de los requisitos: Las pruebas automatizadas deben cumplir con los requisitos especificados en el trabajo final. <br>
●  Validaciones y Verificaciones: Las pruebas deben incluir validaciones y verificaciones adecuadas para asegurar que los resultados sean correctos. <br>

## Inicializacion del proyecto: 

Creación de la carpeta y gestión del proyecto
1. Comando inicial: `npm install cypress --save-dev.`
2. Utilizo el comando npx cypress open una vez que los módulos de Cypress están instalados correctamente.
3. Configuro el tipo de test y agrego los archivos. La versión que utilizaré es Chrome v131.
4. Creo el archivo conforme a la consigna: `myTestSaucedemo.cy.js` en la carpeta e2e. Para mantener el orden, crearé una carpeta llamada Saucedemo. Luego moveré el archivo dentro de esa carpeta para tener una estructura más organizada en el proyecto.
5. Uno de los mayores inconvenientes que encontré fue que el sitio Saucedemo tiene problemas con las imágenes, las cuales no cargan correctamente como deberían.
Hilo del problema: https://github.com/cypress-io/cypress/issues/27501
6. El último producto de la lista, la remera roja, tenía un problema con el ID. Busqué una solución diferente para este caso particular: usar el data-test.
```
cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click() 
//cy.get('#add-to-cart-test.allthethings()-t-shirt-(red)').click() -> ésta linea es la que terminé reemplazando.

``` 
7. Una vez que logré que la mayoría del proyecto funcionara correctamente, comencé a refactorizar el código. Me di cuenta de que había repetido muchas líneas, así que decidí iterar y reemplazar las repeticiones con un único método o almacenarlas en un array. Para encontrar mejores alternativas, me ayudé con ChatGPT.
8. Al finalizar las pruebas, tuve que incrementar el tiempo de carga (`cy.wait`) para evitar que fallaran y así mejorar el rendimiento. Además, en el enunciado menciona productos en plural, por ello decidi iterar todos los productos y hacer la prueba con todos los items. Si alguno quedo clickeado cuando no deberia o alguien lo uso antes, podria no funcionar correctamente; Sin embargo, me emplee respetando la consigna.
9. Me puse al día con Trello y añadí todas mis tareas para tener un mejor orden, estableciendo tiempos y ajustando mis plazos personales.
10. Empecé a instalar el generador de reportes Mocha y utilicé el comando `cypress-mochawesome-reporter`. Agregué los archivos correspondientes, incorporé la mayoría de los comandos posibles y dejé listo el reporte.
11. Finalmente, revisé y actualicé GitHub, la plantilla del reporte, y para cerrar el proyecto, edité el README dejando un paso a paso y anexando material de todo el proyecto.

## Material teorico y comandos que fueron de ayuda para la entrega del proyecto.

#### Correr specs & Uso de mocha para generar reportes
1. Correr todos los tests por consola
Para correr todos los tests de un proyecto, simplemente ejecutamos el siguiente comando en la terminal:
`npx cypress run`
​
Este comando buscará todos los archivos de especificación (spec files) en la carpeta cypress/e2ey los ejecutará.
Dentro de cypress.config.js, setear la siguiente configuración:
```const { defineConfig } = require("cypress");

module.exports = defineConfig({
   e2e: {
    setupNodeEvents(on, config) {
      // Other events..
    },
  },
  video: true, // Guardar los videos
  screenshotOnRunFailure: true, // Guardar las capturas de pantallas de los tests que fallaron
  videosFolder: "cypress/videos", // Le decimos en que carpeta guardar los videos
  screenshotsFolder: "cypress/screenshots", // Le decimos en que carpeta guardar las capturas
  
});
```
​
2. Correr tests específicos
Para correr un archivo específico, podemos pasar la ruta del archivo como argumento:
`npx cypress run --spec cypress/e2e/nombre_del_archivo.cy.js`

​
3. Correr tests en un directorio específico
Si tenemos los tests organizados en subdirectorios y deseamos correr todos los tests de ese directorio específico, podemos usar el siguiente comando:
`npx cypress run --spec cypress/e2e/nombre_del_directorio/*`

​
4. Correr tests en modo interactivo
Abrir la interfaz de usuario de Cypress para seleccionar y correr los tests manualmente, usamos el siguiente comando:
`npx cypress open`

​
Esto abrirá la interfaz de Cypress, donde podemos seleccionar y correr los tests de manera interactiva.
5. Correr tests en un navegador específico
Podemos especificar el navegador en el que deseas correr los tests usando la opción --browser:
`npx cypress run --browser chrome`

​
Otros navegadores soportados incluyen firefox, edge, y electron (el navegador predeterminado de Cypress).
6. Pasos para generar un reporte:
Instalar el paquete cypress-mochawesome-reporter para generar los reportes:
`npm i cypress-mochawesome-reporter --save-dev`
​
Modificar cypress.config.js:
`const { defineConfig } = require('cypress');`
```
module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // Definimos el reporte a utilizar 
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); // Configura los eventos de Node para que el plugin funcione
    },
  },
});

```

Actualizar support/e2e.js:
Importar el registro del reporter: permite que Cypress sepa que debe usar este reporter para las pruebas
`import 'cypress-mochawesome-reporter/register'`; // En el archico e2e.js

​
Ejecutar las pruebas:
`npx cypress run`

​
Los reportes se generarán en cypress/reports/html. Incluirán capturas de pantalla de pruebas fallidas y estadísticas detalladas.
Para personalizar el reporte, puedemos agregar opciones en cypress.config.js:
```
charts: muestra gráficos estadísticos
reportPageTitle: título personalizado
embeddedScreenshots: incluye capturas en el HTML
inlineAssets: agrega recursos directamente en el archivo
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  // ---------- Líneas nuevas ----------
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Mi Reporte',
    embeddedScreenshots: true,
    inlineAssets: true,   
  },
 ------------------------------
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  video: true,
  screenshotOnRunFailure: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  
});
```
