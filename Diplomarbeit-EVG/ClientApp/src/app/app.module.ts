import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DsgvoComponent } from './dsgvo/dsgvo.component';
import { RoomIdManualComponent } from './roomidmanual/roomidmanual.component';
import { QRCodeScannerComponent } from './qrcodescanner/qrcodescanner.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DsgvoComponent,
    RoomIdManualComponent,
    NavMenuComponent,
    QRCodeScannerComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: DsgvoComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'home', component: HomeComponent },
      { path: 'roomidmanual', component: RoomIdManualComponent },
      { path: 'qrcodescanner', component: QRCodeScannerComponent },
      { path: 'nav', component: NavMenuComponent },
      { path: 'navigation', component: NavigationComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
