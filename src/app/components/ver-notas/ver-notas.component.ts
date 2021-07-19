import { Component, NgModuleRef, OnInit } from '@angular/core';
import { EstudianteService } from '../../services/estudiante.service'
import { Estudiante } from '../../modelos/estudiante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-notas',
  templateUrl: './ver-notas.component.html',
  styleUrls: ['./ver-notas.component.css']
})
export class VerNotasComponent implements OnInit {

  listaEstudiantes: Estudiante[] = [];

  constructor(private EstudianteService:EstudianteService, private router:Router) { }

  ngOnInit(): void {
    this.listarEstudiantes();
  }


  listarEstudiantes(){
    this.EstudianteService.getEstudiantes().subscribe(
      res=>{
        console.log(res)
        this.listaEstudiantes=<any>res;
      },
      err => console.log(err)
    )
  }

  eliminar(id:number){
    this.EstudianteService.eliminarEstudiante(id).subscribe(
      res =>{
        console.log("Estudiante Eliminado");
        this.listarEstudiantes();
      },
      err =>{
        console.log("Ocurrió un error")
      }
    )
  }

  modificarEstudiante(id:number){
    this.router.navigate(['/modificar/'+id])
  }
}
