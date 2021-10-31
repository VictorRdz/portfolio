import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { TagComponent } from './tag/tag.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { RecaptchaModule, RECAPTCHA_LANGUAGE } from 'ng-recaptcha';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    'assets/i18n/',
    '.json'
  );
}


@NgModule({
  declarations: [TopbarComponent, FooterComponent, TagComponent, NotfoundComponent, ContactComponent],
  imports: [
    CommonModule,
    RouterModule,
    RecaptchaModule,
    ClipboardModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [{
      provide: RECAPTCHA_LANGUAGE,
      useValue: localStorage.getItem("lang") || "es",
    },
    HttpClient,
    CookieService 
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
    TagComponent,
    ContactComponent,
    TranslateModule
  ],
})
export class SharedModule { }
