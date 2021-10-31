import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { ItemComponent } from './section-two/item/item.component';




@NgModule({
  declarations: [HomeComponent, SectionOneComponent, SectionTwoComponent, ItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
  ],
  exports: [
    HomeComponent
  ],
})
export class HomeModule { }
