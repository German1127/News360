# News360

Aplicación de agregación de noticias desarrollada con una arquitectura moderna separada en Backend y Frontend.

## 📂 Estructura del Proyecto

Este repositorio es un **Monorepo** que contiene:

- **`/backend`**: API RESTful construida con **.NET 8** y **Clean Architecture**. Se encarga de la lógica de negocio y la integración con NewsAPI.org.
- **`/frontend`**: Aplicación de interfaz de usuario construida con **React** y **Vite**.

## 🚀 Requisitos Previos

- .NET 8 SDK
- Node.js (versión LTS recomendada)
- Una API Key de NewsAPI.org

## 🛠️ Configuración y Ejecución

### Backend

1. Navega a la carpeta `backend`.
2. Configura tu API Key en `src/News360.Api/appsettings.json`.
3. Ejecuta el proyecto:
   ```bash
   cd backend
   dotnet run --project src/News360.Api
   ```