import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { ModificarEstudianteComponent } from './components/modificar-estudiante/modificar-estudiante.component';
import { VerNotasComponent } from './components/ver-notas/ver-notas.component';

const routes: Routes = [
  { path:'', redirectTo:'/verNotas', pathMatch:'full'},
  { path:'agregar', component: AgregarEstudianteComponent},
  { path:'modificar/:id', component: ModificarEstudianteComponent},
  { path:'verNotas', component: VerNotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
