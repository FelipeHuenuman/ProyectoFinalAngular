import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FiltroNombreComponent } from './components/filtro-nombre/filtro-nombre.component';
import { FiltroNivelComponent } from './components/filtro-nivel/filtro-nivel.component';
import { DigimonsComponent } from './components/digimons/digimons.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FiltroNombreComponent,
    FiltroNivelComponent,
    DigimonsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
