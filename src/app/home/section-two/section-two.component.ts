import { Component, OnInit } from '@angular/core';
import { SectionTwoService } from "./section-two.service";

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss']
})
export class SectionTwoComponent implements OnInit {

  constructor(private sectionTwoService: SectionTwoService) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  proyectos;

  getProyectos(): void {
    this.proyectos = this.sectionTwoService.getProyectos()
  }

}

