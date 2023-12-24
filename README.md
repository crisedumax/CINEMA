# Programación orientada a componentes con React
# ACTIVIDAD 1 - Desarrollo Web FullStack
![imagen](https://github.com/crisedumax/CINEMA/assets/32473863/e150b479-fd4f-41a6-9b79-d9c04fcaa811)
![imagen](https://github.com/crisedumax/CINEMA/assets/32473863/06029028-be82-4cea-8efb-bc36e087c887)

URL de Sitio publicado en VERCEL.COM
https://cinemacreyes.vercel.app

## 1. Objetivo
El objetivo de este ejercicio es comenzar a familiarizarnos con React. Crearemos un nuevo proyecto que contendrá toda la implementación del FrontEnd de un cine.
En algún momento, por supuesto, tendremos que incluir toda la lógica y diseño de gestión de butacas que ya hemos implementado hasta ahora.

En este ejercicio nos centraremos en realizar una vista orientada a componentes.

## 2. Instrucciones
Crearemos una vista para nuestro FrontEnd dentro de un archivo que puede llamarse ``movies.js``.

- Crearemos un componente funcional ``Header`` que contendrá el banner que querremos mostrar en todas las páginas.
- Crearemos un componente funcional ``Footer`` que contendrá el pie que querremos mostrar en todas las páginas.
- Crearemos un componente funcional ``MovieList`` que contendrá la lista de películas que queremos mostrar en la página principal.
- Crearemos un componente funcional ``Movie`` que contendrá la información de una película en concreto. A saber:
    - Título.
    - Imagen (de Internet o en local, lo que prefieras).
    - Sinopsis.
    - Duración.
    - Género.
    - Puntuación.
    - Botón para ir a la página de selección de asientos (botón sin efecto por el momento).
- Las diferentes ocurrencias de ``Movie`` se generarán a partir de un array de objetos que contendrá la información de las películas en el componente ``MovieList``.

## 3. Instrucciones Actividad 1
Criterios de EVALUACION de la actividad1:
    - Deberá tener al menos 10 componentes funcionales propios
    - Debe usar useState y useEffect
    - Implementar custom hooks a eleccion propia
    - Usar React Router V6 para enrutamiento de peticiones y se deben usar como minimo 4 rutas
    - usar un archivo CSS por componente, y opcionalmente 1 global
