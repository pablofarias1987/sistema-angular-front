import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JuegoService } from '../../../services/juego.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-juego-form',
  templateUrl: './juego-form.component.html',
  styleUrls: ['./juego-form.component.css']
})
export class JuegoFormComponent implements OnInit {
  juegoSelected: string | ArrayBuffer;
  file: File;

  constructor(private juegoService: JuegoService, private router: Router) { }

  ngOnInit() {
  }

  onJuegoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.juegoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  uploadJuego(title: HTMLInputElement, description: HTMLTextAreaElement) {
    this.juegoService
      .createJuego(title.value, description.value, this.file)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/juegos'])
        },
        err => console.log(err)
      );
    return false;
  }

}