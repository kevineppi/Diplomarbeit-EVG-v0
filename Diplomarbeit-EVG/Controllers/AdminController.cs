using Diplomarbeit_EVG.ClientApp.src.app;
using Microsoft.AspNetCore.Mvc;
using System.Text;

namespace Diplomarbeit_EVG.Controllers
{
    [ApiController]
    public class AdminController : Controller
    {
        [HttpPost("setglobalvar")]
        public async Task<IActionResult> SetGlobalVar()
        {
            using (var reader = new StreamReader(HttpContext.Request.Body, Encoding.UTF8))
            {
                //liest aus dem body die werte des byte arrays
                var requestBody = await reader.ReadToEndAsync();

                //speichert die werte in ein globales byte array
                GlobalVariables.GlobalVar = Encoding.UTF8.GetBytes(requestBody);
                Console.WriteLine(GlobalVariables.GlobalVar.ToString());
            }
            return Ok();
        }


        [HttpGet("getglobalvar")]
        [Route("AdminController/GetByteFromPicture")]
        public IActionResult GetGlobalVar()
        {
            // Gibt den Wert der globalen Variable zurück
            return Ok(GlobalVariables.GlobalVar);
        }

        //[HttpGet]
        //[Route("AdminController/GetByteFromPicture")]
        //public IActionResult GetByteFromPicture()
        //{
        //    // Hier implementierst du die Logik für das Zurückgeben der Byte-Werte
        //    return Ok("Byte-Werte erfolgreich erhalten"); // Beispielantwort
        //}
    }
}
