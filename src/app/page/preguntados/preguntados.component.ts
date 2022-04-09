import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {
  nombre:string="Preguntados";
  pic:string="http://www.apperlas.com/wp-content/uploads/2013/11/510680_larger.png";
  constructor() { }

  ngOnInit(): void {
  }

}
