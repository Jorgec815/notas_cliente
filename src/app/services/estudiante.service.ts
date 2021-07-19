import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Estudiante } from '../modelos/estudiante'



@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  urlCrud = 'http://localhost:8080/v1'
  urlMid = 'http://localhost:8081/v1'

  constructor(private http: HttpClient) { }


  //obtener Estudiantes con notas
  getEstudiantes(){
    return this.http.get(this.urlCrud+"/estudiante")
  }

  //obtener un Estudiante específico
  getUnEstudiante(id:string){
    return this.http.get(this.urlCrud+"/estudiante/"+id)
  }

  //agregar un estudiante

  agregarEstudiante(estudiante:Estudiante){
    return this.http.post(this.urlMid+"/estudiante", estudiante);
  }

  //eliminar Estudiante

  eliminarEstudiante(id:number){
    return this.http.delete(this.urlCrud+"/estudiante/"+id)
  }


  //modificar estudiante

  modificarEstudiante(id:number, estudiante:Estudiante){
    return this.http.put(this.urlMid+"/estudiante/"+id, estudiante)
  }

}






