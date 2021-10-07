import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MiComponente} from "./components/mi_componente/mi-componente.component";
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PeliculasComponent,
    PruebaComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
