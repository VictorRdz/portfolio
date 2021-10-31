import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact/contact.service';
import { Location } from '@angular/common';
import { Router } from "@angular/router"
import { ScrollService } from 'src/app/home/scroll.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(
    public contactService: ContactService, 
    public scrollService: ScrollService, 
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem("lang") ?? 'EN';
  }

  goToProjects() {
    if(this.location.path() == "") {
      this.scrollService.scrollToProjects();
    }
    else {
      this.router.navigate(['/proyectos']);
    }
  }

  changeLang(selectedLang: any) {
    localStorage.setItem("lang", selectedLang);
    window.location.reload();
  }

  public lang: string

}
