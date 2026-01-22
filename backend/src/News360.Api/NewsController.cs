using Microsoft.AspNetCore.Mvc;
using News360.Application.Interfaces;

namespace News360.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController : ControllerBase
{
    private readonly INewsService _newsService;

    public NewsController(INewsService newsService)
    {
        _newsService = newsService;
    }

    [HttpGet("top-headlines")]
    public async Task<IActionResult> GetTopHeadlines([FromQuery] string category = "technology")
    {
        var news = await _newsService.GetTopHeadlinesAsync(category);
        return Ok(news);
    }
}