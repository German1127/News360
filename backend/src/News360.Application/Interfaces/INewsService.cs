using News360.Application.DTOs;

namespace News360.Application.Interfaces;

public interface INewsService
{
    Task<List<ArticleDto>> GetTopHeadlinesAsync(string? category = null);
}
