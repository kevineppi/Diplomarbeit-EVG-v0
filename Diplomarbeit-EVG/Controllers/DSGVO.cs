using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace Diplomarbeit_EVG.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DSGVOController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            Debug.WriteLine("Du bist jetzt im Backend");
            return Ok("Success");
        }
    }
}