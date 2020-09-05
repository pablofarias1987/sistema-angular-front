import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { JuegoService } from '../../../services/juego.service'
import { Juego } from '../../../interfaces/Juego'

@Component({
  selector: 'app-juego-preview',
  templateUrl: './juego-preview.component.html',
  styleUrls: ['./juego-preview.component.css']
})
export class JuegoPreviewComponent implements OnInit {

  id: string;
  juego: Juego;

  constructor(
    private activatedRoute: ActivatedRoute,
    private juegoService: JuegoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.juegoService.getJuego(this.id)
        .subscribe(
          res => {
            this.juego = res;
          },
          err => console.log(err)
        )
    });
  }

  deleteJuego(id: string) {
    this.juegoService.deleteJuego(id)
      .subscribe(res => {
        console.log(res)
        this.router.navigate(['/juegos']);
      })
  }

  updateJuego(title: HTMLInputElement, description: HTMLInputElement): boolean {
    this.juegoService.updateJuego(this.juego._id, title.value, description.value)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/juegos']);
      });
    return false;
  }

}