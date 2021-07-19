import { Component, OnInit } from '@angular/core';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/modelos/estudiante';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {

  estudiante:Estudiante = {
    Id:0,
    UqCodigoEstudiante:0,
    CodigoMateria:0,
    Nota1:0,
    Nota2:0,
    Nota3:0,
    NotaDef:0
  }

  constructor(private estudianteService:EstudianteService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    this.estudianteService.agregarEstudiante(this.estudiante).subscribe();
    this.router.navigate(["/verNotas"])
  }

}
