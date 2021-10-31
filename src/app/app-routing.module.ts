import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent, data: {projects : false}},
  { path: 'inicio', redirectTo: '/', pathMatch: 'full',},
  { path: 'proyectos', component: HomeComponent, data: {projects : true}, pathMatch: 'full',},
  { path: '404', component: NotfoundComponent },
  { path: ':id', component: ProjectComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
