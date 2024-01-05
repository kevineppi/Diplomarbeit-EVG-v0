import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent
{

  constructor(private router: Router, private http: HttpClient, private dataService: DataService) { }



  //Weiterleitung an Admin-Fenster
  //Passwort ist EVG1
  //Wird ein falsches PW eingegeben erscheint ein weiteres Popup, beim klicken aufs X wird das Popup geschlossen
  //Bei der eingabe vom richtigen Passwort wird auf die Adminseite weitergeleitet
  async redirectToAdminWindow() {
    var { value: password, dismiss } = await Swal.fire({
      title: "Bitte das Admin-Passwort eingeben",
      input: "password",
      showCloseButton: true,
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off"
      },
      allowOutsideClick: () => !Swal.isLoading()
    });

    if (dismiss === Swal.DismissReason.close) {
      // Der Close-Button wurde geklickt
      return;
    }

    if (password === "EVG1") {
      this.router.navigate(["adminwindow"]);
    } else {
      Swal.fire({
        icon: "error",
        showCloseButton: true,
        title: "Falsches Passwort",
        text: ""
      });
    }
  }


}
