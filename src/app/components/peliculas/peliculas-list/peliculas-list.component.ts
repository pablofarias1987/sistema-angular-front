import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from '../../../services/pelicula.service';
import { Pelicula } from '../../../interfaces/Pelicula';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.css']
})
export class PeliculasListComponent implements OnInit {

  peliculas: Pelicula[] = [];

  constructor(
    private peliculaService: PeliculaService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.peliculaService.getPeliculas()
      .subscribe(
        res => {
          this.peliculas = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/peliculas', id]);
  }

}

