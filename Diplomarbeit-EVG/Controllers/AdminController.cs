using Microsoft.AspNetCore.Mvc;

namespace Diplomarbeit_EVG.Controllers
{
    [ApiController]
    public class AdminController : Controller
    {
        [HttpGet]
        [Route("AdminController/GetByteFromPicture")]
        public IActionResult GetByteFromPicture()
        {
            // Hier implementierst du die Logik für das Zurückgeben der Byte-Werte
            return Ok("Byte-Werte erfolgreich erhalten"); // Beispielantwort
        }
    }
}
