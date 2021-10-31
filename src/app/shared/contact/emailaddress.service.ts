import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailaddressService {

  constructor() { }

  getEmailAddress(): string {
    return 'victor' + '.' + 'gonzalez' + '.' + 'dev@' + 'outlook' + '.' + 'com'
  }
}
