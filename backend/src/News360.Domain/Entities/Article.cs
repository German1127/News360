namespace News360.Domain.Entities;

public class Article
{
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Author { get; set; }
    public string Url { get; set; } = string.Empty;
    public string? UrlToImage { get; set; }
    public DateTime PublishedAt { get; set; }
    public string? SourceName { get; set; }
}
