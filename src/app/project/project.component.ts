import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ProjectService } from './project.service';
import { ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

  public proyecto;
  
  constructor(
    private projectService: ProjectService, 
    private router: Router, 
    private location: Location,
    private sanitizer: DomSanitizer,
    private titleService: Title
    ) { }

  ngOnInit(): void {
    try {
      let id = this.router.url;
      this.getProyecto(id);
    } catch (error) {
      this.router.navigate(['/404'])
    }
  }

  private checkLang () {

  }

  getProyecto(id): void {
    const data = this.projectService.getProyecto(id)
    this.proyecto = data;
    this.proyecto.contenido = this.sanitizer.bypassSecurityTrustHtml(data.contenido);
    this.location.replaceState(data.contenidoId);
    this.titleService.setTitle(data.titulo + " - Víctor González");
  }

  @ViewChild('projectItem') projectItem: ElementRef;
  goToTop() {
    this.projectItem.nativeElement.scrollIntoView({ behavior: "smooth" });
  }


}
