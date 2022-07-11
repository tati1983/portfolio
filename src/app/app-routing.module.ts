import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path: '', 
    component: HomeComponent
  },
  {
    path: 'educacion',
    component: EducacionComponent
  },
  {
    path: 'experiencia-laboral',
    component: ExperienciaLaboralComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
