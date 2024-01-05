import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roomidmanual',
  templateUrl: './roomidmanual.component.html'
})
export class RoomIdManualComponent {
  constructor(private router: Router) { }

  handleFormSubmit(): void {
    // Hier sollte der tatsächliche Wert aus dem Formular oder einer anderen Quelle kommen
    const numberToSend = 1;
    this.sendNumberToBackend(numberToSend);
    this.router.navigate(["navigation"]);
  }

  // Definiere eine Funktion, um die Anfrage zu senden
  sendNumberToBackend(numberToSend: number) {
    const xhr = new XMLHttpRequest();
    const method = "POST";

    // Pfade sollten relativ zum Hauptpfad der Anwendung sein
    xhr.open(method, '/api/StartPoint/EmpfangeZahl', true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Definiere eine Funktion, die aufgerufen wird, wenn die Anfrage erfolgreich ist
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // Erfolgreiche Anfrage
        console.log("Erfolgreich gesendet!");
      } else {
        // Fehlerhafte Anfrage
        console.error("Fehler bei der Anfrage. Statuscode:", xhr.status);
      }
    };

    // Definiere eine Funktion, die aufgerufen wird, wenn ein Fehler auftritt
    xhr.onerror = () => {
      console.error("Netzwerkfehler bei der Anfrage.");
    };

    const data = JSON.stringify({ number: numberToSend });
    xhr.send(data);
  }
}
