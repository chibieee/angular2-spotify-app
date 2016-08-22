import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { SpotifyService } from './services/spotify.service';

@NgModule({
  imports: [ 
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
     ],
  declarations: [
     AppComponent,
     NavbarComponent,
     AboutComponent,
     SearchComponent
      ],
      providers: [
        SpotifyService
      ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
