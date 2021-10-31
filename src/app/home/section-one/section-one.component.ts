import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/contact/contact.service';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  constructor(
    public contactService: ContactService, 
    public scrollService: ScrollService, 
  ) { }

  ngOnInit(): void {
  }

}
