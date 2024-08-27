# Ejemplo de Consumo de API Rest con Next.js

Este es un ejemplo básico de consumo **API Rest** con Next.js en la versión 14. Como API se utilizo el clasico de **Rick & Morty**.

<img src="https://github.com/vptellez/my-page-next/blob/main/example.png" alt="ejemplo-portafolio" style="width: 85%;">

## Características:

![Next.js - v14](https://img.shields.io/badge/Next.js-v14-2ea44f)
![React - v18](https://img.shields.io/badge/React-v18-9c640c)

- Para la construcción del proyecto se utilizó una instalación automática `npx create-next-app@latest`,
aceptando los complementos de Tailwind CSS, Código dentro del directorio `src/`, y App Router.
- En la página inicial se consume un listado de personajes que se muestran dentro de un `grid` y dando estilo con ayuda de `Tailwind css`.
    > Se están utilizando hooks como `useState` y `useEffect` provocando que es componente se comporte como un `Client Component` de Next.js
- Se puede obtener la vista de detalle del personaje mediante la obtención de su `id`, pasandolo como `argumento` y dando estilo al componente mediante `module.css`
    > También el componente se comporta como un `Client Component` de Next.js
