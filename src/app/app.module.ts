import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculaFormComponent } from './components/peliculas/pelicula-form/pelicula-form.component';
import { PeliculaPreviewComponent } from './components/peliculas/pelicula-preview/pelicula-preview.component';
import { PeliculasListComponent } from './components/peliculas/peliculas-list/peliculas-list.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainComponent } from './components/main/main.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { JuegoFormComponent } from './components/juegos/juego-form/juego-form.component';
import { JuegosListComponent } from './components/juegos/juegos-list/juegos-list.component';
import { JuegoPreviewComponent } from './components/juegos/juego-preview/juego-preview.component';
import { SignupComponent } from './login/signup/signup.component';
import { TasksComponent } from './login/tasks/tasks.component';
import { AuthGuard} from './auth.guard';
import { Signin2Component } from './login/signin2/signin2.component';
import { TokenInterceptorService} from './services/token-interceptor.service';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';


@NgModule({
  declarations: [
    AppComponent,
    PeliculaFormComponent,
    PeliculaPreviewComponent,
    PeliculasListComponent,
    NavigationComponent,
    MainComponent,
    ContenidoComponent,
    JuegoFormComponent,
    JuegosListComponent,
    JuegoPreviewComponent,
    SignupComponent,
    Signin2Component,
    TasksComponent,
    Signin2Component,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard, 
    {
     provide: HTTP_INTERCEPTORS,
     useClass:TokenInterceptorService,
     multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
