using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Diplomarbeit_EVG.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]

    public class StartPointController : ControllerBase
    {
        [HttpPost]
        [Route("EmpfangeZahl")]
        public IActionResult EmpfangeZahl([FromBody] ZahlDto zahlDto)
        {
            const int receivedNumber = 10;

            // Schreibe die Zahl in die Konsole
            Console.WriteLine($"Empfangene Zahl: {receivedNumber}");

            // Sende eine Erfolgsantwort zurück
            return Ok(new { Success = true });
        }
    }

    public class ZahlDto
    {
        public string? Number { get; set; }
    }

}

