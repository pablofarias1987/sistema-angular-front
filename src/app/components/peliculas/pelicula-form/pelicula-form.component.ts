import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from '../../../services/pelicula.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-pelicula-form',
  templateUrl: './pelicula-form.component.html',
  styleUrls: ['./pelicula-form.component.css']
})
export class PeliculaFormComponent implements OnInit {
  peliculaSelected: string | ArrayBuffer;
  file: File;

  constructor(private peliculaService: PeliculaService, private router: Router) { }

  ngOnInit() {
  }

  onPeliculaSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.peliculaSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadPelicula(title: HTMLInputElement, description: HTMLTextAreaElement) {
    this.peliculaService
      .createPelicula(title.value, description.value, this.file)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/peliculas'])
        },
        err => console.log(err)
      );
    return false;
  }

}
