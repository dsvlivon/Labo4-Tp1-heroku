import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP1_daniel_vizgarra';
  nombre:string="Daniel Vizgarra";
  pic:string="https://umiberica.com/es/wp-content/uploads/2020/02/founder.png";
  miJuego:string = "AHORCADO: mi juego podria ser el ahorcado con una cantidad limitada de palabras. 1 o 2 combinaciones de letras a adivinar y un numero X d intentos. con cada error modifica la imagen del jugador y asi...";
}
