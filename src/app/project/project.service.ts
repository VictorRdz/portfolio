import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Project } from '../models/project';
import { environment } from '../../environments/environment';
import { projects, contenidoEs, contenidoEn } from '../database'

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  projectUrl = "api/proyectos"

  getProyecto(contenidoId) {
    const lang = localStorage.getItem("lang").toLocaleLowerCase() ?? 'en'
    const project: any = projects.find(project => '/' + project.en_id === contenidoId || '/' + project.es_id === contenidoId)
    
    const contenidoList = lang === 'es' ? contenidoEs : contenidoEn 
    const contenido = contenidoList.find(item => item.contenido_id === project[`${lang}_id`])

    project['titulo'] = contenido.titulo
    project['descripcion'] = contenido.descripcion
    project['contenido'] = contenido.contenido
    project['contenidoId'] = contenido.contenido_id

    return project    
  }
}
