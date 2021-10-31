import { Injectable } from '@angular/core';
import { projects, contenidoEn, contenidoEs } from '../../database'

@Injectable({
  providedIn: 'root'
})
export class SectionTwoService {

  constructor() { }

  getProyectos()  {
    const lang = localStorage.getItem("lang").toLocaleLowerCase() ?? 'en'
    const contenido = lang === 'es' ? contenidoEs : contenidoEn 
    const proyectos = projects.map((project: any) => {
      const contenidoAux = contenido.find(content => project[`en_id`] === content.contenido_id || project[`es_id`] === content.contenido_id)
      project.titulo = contenidoAux.titulo
      project.descripcion = contenidoAux.descripcion
      project.contenido = contenidoAux.contenido
      project.contenidoId = contenidoAux.contenido_id
      return project
    })
    return proyectos
  }
}

