import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ProjectModule } from './project/project.module';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ProjectModule,
    SharedModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
