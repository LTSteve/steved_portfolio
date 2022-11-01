import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectslistComponent } from './components/projectslist/projectslist.component';
import { ProjectarticleComponent } from './components/projectarticle/projectarticle.component';

export const routes: Routes = [
  { path: '', component: ProjectslistComponent },
  { path: '**', component: ProjectarticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
