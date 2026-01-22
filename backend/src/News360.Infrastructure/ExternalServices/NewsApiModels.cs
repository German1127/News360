using System.Text.Json.Serialization;

namespace News360.Infrastructure.ExternalServices;

public class NewsApiResponse
{
    [JsonPropertyName("status")]
    public string Status { get; set; } = string.Empty;

    [JsonPropertyName("articles")]
    public List<NewsApiArticle> Articles { get; set; } = new();
}

public class NewsApiArticle
{
    [JsonPropertyName("title")]
    public string Title { get; set; } = string.Empty;

    [JsonPropertyName("description")]
    public string? Description { get; set; }

    [JsonPropertyName("url")]
    public string Url { get; set; } = string.Empty;

    [JsonPropertyName("urlToImage")]
    public string? UrlToImage { get; set; }

    [JsonPropertyName("publishedAt")]
    public DateTime PublishedAt { get; set; }

    [JsonPropertyName("source")]
    public NewsApiSource? Source { get; set; }
}

public class NewsApiSource
{
    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;
}
