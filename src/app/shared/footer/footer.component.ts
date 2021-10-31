import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private cookieService: CookieService, private translateService: TranslateService) { }

  ngOnInit(): void {
    // Check if local language is already set
    if(localStorage.getItem("lang") == undefined) {
      // Get default language
      let userLang = navigator.language;
      userLang = userLang[0] + userLang[1]
      if(userLang !== 'es') {
        userLang = 'en'
      }
      localStorage.setItem("lang", userLang ?? "en");
    }

    this.lang = localStorage.getItem("lang");
    this.translateService.use(this.lang ?? "en");
    this.year = new Date(Date.now()).getFullYear();
  }

  year;
  lang;

  changeLang(lang) {
    localStorage.setItem("lang", lang);
    window.location.reload();
  }

}
