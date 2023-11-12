import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-roomidmanual',
  templateUrl: './roomidmanual.component.html'
})
export class RoomIdManualComponent {
  constructor(private router: Router) { }

  handleFormSubmit(): void
  {
     this.router.navigate(["navigation"]);

 }
}
