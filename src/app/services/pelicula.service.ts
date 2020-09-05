import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../interfaces/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  URI = 'http://localhost:4000/api/peliculas';

  constructor(private http: HttpClient) { }

  createPelicula(title: string, description: string, pelicula: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', pelicula);
    return this.http.post(this.URI, fd);
  }

  getPeliculas() {
    return this.http.get<Pelicula[]>(this.URI);
  }

  getPelicula(id: string) {
    return this.http.get<Pelicula>(`${this.URI}/${id}`);
  }

  deletePelicula(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updatePelicula(id: string, title: string, description: string) {
    return this.http.put(`${this.URI}/${id}`, { title, description});
  }
}
