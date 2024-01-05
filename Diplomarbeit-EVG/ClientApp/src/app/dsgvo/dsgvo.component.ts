import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
/*import { HomeComponent } from '../home/home.component';*/
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';


@Component({
  selector: 'app-dsgvo',
  templateUrl: './dsgvo.component.html'
})
export class DsgvoComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private dataService: DataService) { }

  //Do schick ma die Cookie-Infos an des Backend
  //acceptPrivacyPolicy() {
  //  this.router.navigate(["home"]);


  //}
  ngOnInit() {
    //Zeile um LocalStorage zurückzusetzen
    //localStorage.setItem("checkboxValue", "false");

    //Wenn true direkt zur Home Seite - sonst regulärer Start = DSGVO
    if (localStorage.getItem('checkboxValue') === 'true') {
      this.router.navigate(["home"]);
    }
  }


  sendData()
  {
    
    // Wenn die Daten gesendet wurden, kannst du hier auf die "home"-Route navigieren.
    this.router.navigate(["home"]);
  }

  saveCheckboxValue(event: EventTarget | null) {
    const isChecked = (event as HTMLInputElement).checked;
    localStorage.setItem('checkboxValue', String(isChecked));
  }



}

