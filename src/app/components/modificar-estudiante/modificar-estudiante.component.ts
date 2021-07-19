import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/modelos/estudiante';
import { Router, ActivatedRoute } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';

@Component({
  selector: 'app-modificar-estudiante',
  templateUrl: './modificar-estudiante.component.html',
  styleUrls: ['./modificar-estudiante.component.css']
})
export class ModificarEstudianteComponent implements OnInit {

  constructor(private EstudianteService:EstudianteService,
              private router:Router,
              private activeRoute:ActivatedRoute) { }

  estudiante:Estudiante = {
    Id:0,
    UqCodigoEstudiante:0,
    CodigoMateria:0,
    Nota1:0,
    Nota2:0,
    Nota3:0,
    NotaDef:0
  }

  ngOnInit(): void {
    const id_estudiante = this.activeRoute.snapshot.params.id
    
    if(id_estudiante){
      this.EstudianteService.getUnEstudiante(id_estudiante).subscribe(
        res =>{
          this.estudiante = <any>res;
          console.log(this.estudiante)
        },
        err => {
          console.log(err)
        }
      )
    }
  
  }

  modificarEstudiante(){
    this.EstudianteService.modificarEstudiante(this.estudiante.Id, this.estudiante).subscribe();

    this.router.navigate(["/verNotas"])
  }
}
