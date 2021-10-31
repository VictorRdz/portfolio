import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ScrollService } from './scroll.service';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public scrollService: ScrollService, 
    private route: ActivatedRoute, 
    private location: Location,
    private titleService: Title
  ) { }  

  proyectos; //scroll variable

  ngOnInit(): void {
    if(localStorage.getItem("lang") == "es") {
      this.titleService.setTitle("Inicio - Víctor González")
    }
    else {
      this.titleService.setTitle("Home - Víctor González")
    }
    
    this.proyectos = false;
    this.route.data.subscribe(data => this.proyectos = data.projects); //scroll
  }

  @ViewChild('projects') projectsSection: ElementRef;
  ngAfterViewInit(): void {
    this.scrollService.projectsSection = this.projectsSection;

    if(this.proyectos) {
      this.location.replaceState("");
      setTimeout(() => this.scrollService.scrollToProjects(), 300);
    }
  }

}
