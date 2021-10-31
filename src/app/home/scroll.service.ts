import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  projectsSection: ElementRef;

  scrollToProjects() {
    // setTimeout(() => this.projectsSection.nativeElement.scrollIntoView({ behavior: "smooth" }), 300);
    this.projectsSection.nativeElement.scrollIntoView({ behavior: "smooth" });
  }
}
