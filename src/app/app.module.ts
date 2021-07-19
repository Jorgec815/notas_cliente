import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { ModificarEstudianteComponent } from './components/modificar-estudiante/modificar-estudiante.component';
import { VerNotasComponent } from './components/ver-notas/ver-notas.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    AgregarEstudianteComponent,
    ModificarEstudianteComponent,
    VerNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
