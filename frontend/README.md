# News360 - Frontend

Este es el frontend de la aplicación **News360**, desarrollado con **React** y **Vite**.

> ✅ **Estado Actual**: La aplicación es funcional. Se conecta al backend, obtiene las noticias y las muestra en la página principal, manejando los estados de carga y error.

## 🛠️ Tecnologías

- **React**: Librería para construir la interfaz de usuario.
- **Vite**: Herramienta de construcción y servidor de desarrollo rápido.
- **React Router Dom**: Para la gestión de rutas en la aplicación.
- **CSS Modules**: Para estilos encapsulados a nivel de componente.

## 📂 Estructura del Proyecto

El código fuente se encuentra en `src/` y sigue una arquitectura por capas técnicas, organizada de la siguiente manera:

```bash
frontend/
├── src/
│   ├── components/     # Componentes de UI reutilizables
│   │   ├── layout/     # Componentes de estructura (Navbar, Footer)
│   │   └── news/       # Componentes específicos de noticias (NewsCard)
│   ├── hooks/          # Custom Hooks para lógica de estado (useNews)
│   ├── pages/          # Componentes que representan una página completa
│   ├── services/       # Lógica para consumir el backend
│   ├── App.jsx         # Componente raíz que define el layout y las rutas
│   ├── index.css       # Estilos CSS globales
│   └── main.jsx        # Punto de entrada de la aplicación
├── .env.local          # (Opcional) Variables de entorno locales
├── .gitignore          # Archivos ignorados por el control de versiones
├── index.html          # Plantilla HTML donde se monta la app de React
├── package.json        # Dependencias y scripts del proyecto
└── vite.config.js      # Archivo de configuración de Vite
```

## � Cómo ejecutar el proyecto

Tener el backend corriendo en otra terminal para futuras integraciones.

1. Entra a la carpeta del frontend:
   ```bash
   cd frontend
   ```

2. Instala las dependencias (solo la primera vez):
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en: `http://localhost:5173`

## ✨ Características Implementadas

- [x] Conexión funcional con la API del Backend (.NET).
- [x] Renderizado de noticias en una grilla responsive.
- [x] Uso de un Custom Hook (`useNews`) para encapsular la lógica de fetching y el manejo de estados.
- [x] Manejo de estados de carga (`Cargando...`) y error.
- [x] Arquitectura modular separando componentes, páginas, hooks y servicios.
- [x] Estilos encapsulados con CSS Modules para evitar colisiones.
