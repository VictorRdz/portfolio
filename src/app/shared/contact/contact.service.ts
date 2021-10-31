import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  public isModelOpen: BehaviorSubject<boolean> = new BehaviorSubject(false)

  public openModal() {
    this.isModelOpen.next(true)
  }

  public closeModal() {
    this.isModelOpen.next(false)
  } 
}
