import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeliculaFormComponent } from './components/peliculas/pelicula-form/pelicula-form.component';
import { PeliculaPreviewComponent } from './components/peliculas/pelicula-preview/pelicula-preview.component';
import { PeliculasListComponent } from './components/peliculas/peliculas-list/peliculas-list.component';
import { JuegoFormComponent } from './components/juegos/juego-form/juego-form.component';
import { JuegosListComponent } from './components/juegos/juegos-list/juegos-list.component';
import { JuegoPreviewComponent } from './components/juegos/juego-preview/juego-preview.component';
import { MainComponent } from './components/main/main.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { TasksComponent } from './login/tasks/tasks.component';
import { Signin2Component } from './login/signin2/signin2.component';
import { SignupComponent } from './login/signup/signup.component';
import { AuthGuard } from './auth.guard'
import { RegistrarseComponent } from './components/registrarse/registrarse.component';


const routes: Routes = [

  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent
  },

  {
    path: 'signin2',
    component: Signin2Component
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'peliculas',
    component: PeliculasListComponent,
    canActivate:[AuthGuard]

  },
  {
    path: 'peliculas/new',
    component: PeliculaFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'peliculas/:id',
    component: PeliculaPreviewComponent,
    canActivate:[AuthGuard] 
  },
  {
    path: 'juegos',
    component: JuegosListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'juegos/new',
    component: JuegoFormComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'juegos/:id',
    component: JuegoPreviewComponent,
    canActivate:[AuthGuard]   
  },
  {
    path: 'main',
    component: MainComponent   
  },
  {
    path: 'contenido',
    component: ContenidoComponent   
  },
  
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
