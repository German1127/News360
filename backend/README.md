# News360 - Backend (.NET)

Este es el backend de la aplicación **News360**, construido con **.NET 8** siguiendo los principios de **Clean Architecture**. Su función principal es actuar como una pasarela (proxy) y adaptador para consumir noticias de [NewsAPI.org](https://newsapi.org).

## 🏗 Arquitectura y Estructura

La solución está dividida en 4 capas para separar responsabilidades:

```bash
news360/
├── frontend/
└── backend/
    ├── News360.sln
    └── src/
        ├── News360.Api/             (Controladores)
        ├── News360.Application/     (Interfaces y Lógica)
        ├── News360.Domain/          (Entidades)
        └── News360.Infrastructure/  (Cliente NewsAPI)
```

### 1. Domain (`src/News360.Domain`)
Es el núcleo de la aplicación. No depende de nadie.
- **Entities/**: Contiene los modelos de negocio puros (ej. `Article.cs`).

### 2. Application (`src/News360.Application`)
Contiene la lógica de negocio y los contratos. Depende de *Domain*.
- **Interfaces/**: Define *qué* hace el sistema sin decir *cómo* (ej. `INewsService.cs`).
- **DTOs/**: Objetos de Transferencia de Datos para desacoplar la API externa de la vista (ej. `ArticleDto.cs`).

### 3. Infrastructure (`src/News360.Infrastructure`)
Implementa las interfaces de *Application*. Aquí ocurren las conexiones externas. Depende de *Application* y *Domain*.
- **ExternalServices/**:
  - `NewsApiService.cs`: Implementación de `INewsService` usando `HttpClient`.
  - `NewsApiModels.cs`: Clases auxiliares para mapear la respuesta JSON cruda de NewsAPI.

### 4. Api (`src/News360.Api`)
El punto de entrada de la aplicación. Depende de *Application* e *Infrastructure*.
- **Controllers/**: Exponen los endpoints REST (ej. `NewsController.cs`).
- **Program.cs**: Configura la Inyección de Dependencias (DI) y CORS.

## ⚙️ Configuración

El proyecto requiere una API Key de NewsAPI.org.

1. Abre el archivo `src/News360.Api/appsettings.json`.
2. Agrega tu clave en la sección `NewsApi`:

```json
"NewsApi": {
  "ApiKey": "TU_API_KEY_AQUI"
}
```

## 🚀 Ejecución

Para levantar el servidor de desarrollo:

```bash
dotnet run --project src/News360.Api
```

El servidor escuchará en el puerto configurado (usualmente `http://localhost:5166`).

## 📚 Documentación API

Una vez ejecutado, puedes ver la documentación interactiva (Swagger) en:
- `http://localhost:5166/swagger`