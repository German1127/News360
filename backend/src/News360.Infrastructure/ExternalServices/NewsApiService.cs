using System.Net.Http.Json;
using Microsoft.Extensions.Configuration;
using News360.Application.DTOs;
using News360.Application.Interfaces;

namespace News360.Infrastructure.ExternalServices;

public class NewsApiService : INewsService
{
    private readonly HttpClient _httpClient;
    private readonly string _apiKey;

    public NewsApiService(HttpClient httpClient, IConfiguration configuration)
    {
        _httpClient = httpClient;
        _apiKey = configuration["NewsApi:ApiKey"] ?? throw new ArgumentNullException("ApiKey no configurada");
        
        _httpClient.BaseAddress = new Uri("https://newsapi.org/v2/");
        _httpClient.DefaultRequestHeaders.Add("User-Agent", "News360-App");
    }

    public async Task<List<ArticleDto>> GetTopHeadlinesAsync(string? category)
    {
        try 
        {
            var requestUrl = $"top-headlines?country=us&apiKey={_apiKey}";
            if (!string.IsNullOrWhiteSpace(category))
            {
                requestUrl += $"&category={category}";
            }

            var response = await _httpClient.GetFromJsonAsync<NewsApiResponse>(requestUrl);

            if (response == null || response.Articles == null)
            {
                return new List<ArticleDto>();
            }

            return response.Articles.Select(a => new ArticleDto
            {
                Title = a.Title,
                Description = a.Description,
                Url = a.Url,
                ImageUrl = a.UrlToImage,
                Source = a.Source?.Name ?? "Unknown",
                PublishedDate = a.PublishedAt.ToString("g")
            }).ToList();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching news: {ex.Message}");
            return new List<ArticleDto>();
        }
    }
}
