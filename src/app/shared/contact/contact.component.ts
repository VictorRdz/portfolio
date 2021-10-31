import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from './contact.service';
import { EmailaddressService } from './emailaddress.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public contactService: ContactService, private emailAddressService: EmailaddressService) { }

  ngOnInit(): void {
    this.modalSubscription = this.contactService.isModelOpen.subscribe(
      status => this.isModelOpen = status
    )
  }

  ngOnDestroy(): void {
    this.modalSubscription?.unsubscribe()
  }

  public modalSubscription?: Subscription
  public display = "none";
  public email: string;
  public isModelOpen: boolean

  showEmail() {
    this.email = this.emailAddressService.getEmailAddress();
    this.display = "flex";
  }

  public copy() {
    navigator.clipboard.writeText(this.email);
  }

}
