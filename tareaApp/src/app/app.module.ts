import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Asegúrate de importar esto

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TareasComponent } from './tareas/tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule // Añade RouterModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
