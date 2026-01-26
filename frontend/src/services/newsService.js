const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5166/api';

export const newsService = {
  /**
   * Obtiene los artículos principales de titulares desde el backend.
   * @returns {Promise<Array>}
   */
  getTopHeadlines: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/News/top-headlines`);

      if (!response.ok) {
        throw new Error(`Error en la red: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Fallo al obtener las noticias:", error);
      throw error;
    }
  }
};