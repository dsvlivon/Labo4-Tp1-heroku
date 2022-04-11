import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {
  nombre:string="Daniel Vizgarra";
  edad:number = 34;
  curso:string="Laboratorio IV, UTN, Avellaneda 1° cuatrimestre";
  pic:string="https://media-exp1.licdn.com/dms/image/C4D03AQEqyMf1EezY7Q/profile-displayphoto-shrink_800_800/0/1518521997051?e=1654732800&v=beta&t=iNMXYaEL5a5XYXKGPUW-lezRsuuLQexE92nesm9ug58";
  
  miJuego:string = "AHORCADO: mi juego podria ser el ahorcado con una cantidad limitada de palabras. 1 o 2 combinaciones de letras a adivinar y un numero X d intentos. con cada error modifica la imagen del jugador y asi...";
  constructor() { }

  ngOnInit(): void {
  }

}
