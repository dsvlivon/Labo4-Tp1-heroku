import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  nombre:string="Ahorcado";
  pic:string="https://c8.alamy.com/zoomses/9/9731f975d7734cc49997c51395e4a551/hth1b7.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
