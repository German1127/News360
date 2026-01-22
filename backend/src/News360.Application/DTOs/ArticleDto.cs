namespace News360.Application.DTOs;

public class ArticleDto
{
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string Url { get; set; } = string.Empty;
    public string? ImageUrl { get; set; }
    public string PublishedDate { get; set; } = string.Empty;
    public string Source { get; set; } = string.Empty;
}
