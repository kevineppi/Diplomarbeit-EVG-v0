import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent
{

  constructor(private router: Router, private http: HttpClient, private dataService: DataService) { }



  redirectToAdminWindow()
  {
    this.router.navigate(["adminwindow"]);
  }

}
