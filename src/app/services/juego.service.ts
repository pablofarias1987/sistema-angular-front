import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Juego } from '../interfaces/Juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  URI = 'http://localhost:4000/api/Juegos';

  constructor(private http: HttpClient) { }

  createJuego(title: string, description: string, juego: File) {
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', juego);
    return this.http.post(this.URI, fd);
  }

  getJuegos() {
    return this.http.get<Juego[]>(this.URI);
  }

  getJuego(id: string) {
    return this.http.get<Juego>(`${this.URI}/${id}`);
  }

  deleteJuego(id: string) {
    return this.http.delete(`${this.URI}/${id}`);
  }

  updateJuego(id: string, title: string, description: string) {
    return this.http.put(`${this.URI}/${id}`, { title, description});
  }
}
