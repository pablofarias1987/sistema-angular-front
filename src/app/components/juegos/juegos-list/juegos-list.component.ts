import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegoService } from '../../../services/juego.service';
import { Juego } from '../../../interfaces/Juego';

@Component({
  selector: 'app-juegos-list',
  templateUrl: './juegos-list.component.html',
  styleUrls: ['./juegos-list.component.css']
})
export class JuegosListComponent implements OnInit {

  juegos: Juego[] = [];

  constructor(
    private juegoService: JuegoService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.juegoService.getJuegos()
      .subscribe(
        res => {
          this.juegos = res;
        },
        err => console.log(err)
      )
  }

  selectedCard(id: string) {
    this.router.navigate(['/juegos', id]);
  }

}

