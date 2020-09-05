import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { PeliculaService } from '../../../services/pelicula.service'
import { Pelicula } from '../../../interfaces/Pelicula'

@Component({
  selector: 'app-pelicula-preview',
  templateUrl: './pelicula-preview.component.html',
  styleUrls: ['./pelicula-preview.component.css']
})
export class PeliculaPreviewComponent implements OnInit {

  id: string;
  pelicula: Pelicula;

  constructor(
    private activatedRoute: ActivatedRoute,
    private peliculaService: PeliculaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.peliculaService.getPelicula(this.id)
        .subscribe(
          res => {
            this.pelicula = res;
          },
          err => console.log(err)
        )
    });
  }

  deletePelicula(id: string) {
    this.peliculaService.deletePelicula(id)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/peliculas']);
      })
  }

  updatePelicula(title: HTMLInputElement, description: HTMLInputElement): boolean {
    this.peliculaService.updatePelicula(this.pelicula._id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/peliculas']);
      });
    return false;
  }

}