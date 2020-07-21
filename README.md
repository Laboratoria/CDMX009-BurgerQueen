# Burger Queen

Aplicación creada para un pequeño restaurante de hamburguesas, el cual requiere tomar pedidos usando una tablet y enviarlos a cocina para que se preparen de manera ordenada y eficiente.


## Características

- La aplicación fue diseñada para tablet con fines prácticos del restaurant, sin embargo, si usted desea probarla, es posible visualizarla en desktop.
- Como backend usamos Cloud Firestore.
- Es una [Progressive Web App](https://codigofacilito.com/articulos/progressive-apps) auditada con [Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es) por lo que es posible usarla offline.
- El testing se realizó usando Testing Library y Jest.

## Funcionalidades

- La interfaz esta divida en dos perfiles : Mesero y Cocina.
- En la interfaz mesero, podemos encontrar dos menus: Desayuno y Comida, una vez seleccionado el platillo, se pueden agregar algunos aditamentos y la cantidad deseada.
- Una vez completado el pedido, el mesero la envía a cocina.
- El cocinero puede visualizar en tiempo real las ordenes pendientes y cambiar su estatus a listo una vez finalizada su preparación o en su defecto, cancelar el pedido.
- Cocinero y mesero pueden visualizar una lista de las ordenes con estatus pendiente y lista con el fin de llevar un control de las ordenes faltantes de entregar por parte de cocina, las ordenes que ya han sido preparadas para entregar al cliente, así como la opción de eliminar de la lista las ordenes entregadas.
- En caso de ser el mesero y estar en modo offline, las ordenes se guardan en caché y se envian a cocina, una vez regresando al modo online las ordenes son enviadas a Firestore.
- En caso de ser el cocinero y estar en modo offline, puede cambiar el estatus de las ordenes y visualizar el cambio en la lista de ordenes, una vez regresando al modo online el estatus es modificado en Firestore.


## Tecnologías usadas
- HTML
- CSS (Grid, Flexbox)
- SASS
- JavaScript
- React JS
- Firebase
- Jest
- Test Library
- Lighthouse

## Nota

Para visualizar el proyecto puedes ingresar al siguiente enlace https://burguerqueen-f6391.web.app/ y probarlo en una tablet, usando el simulador de Chrome o en modo desktop.

![Principal](img/BQ1.JPG)
![Waiter1](img/BQ3.JPG)
![Waiter2](img/BQ4.JPG)
![Kitchen1](img/BQ5.JPG)
![Kitchen2](img/BQ6.JPG)

