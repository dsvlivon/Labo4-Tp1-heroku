import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  linkedin:string = "https://www.linkedin.com/in/dsvlivon/";
  linkPic:string = "https://media-exp1.licdn.com/dms/image/C560BAQHaVYd13rRz3A/company-logo_100_100/0/1638831589865?e=2147483647&v=beta&t=fi3iyTgSAogCMgSmAy_DeyogJxzo38RVBK0mcEuSpc8";
  github:string = "https://github.com/dsvlivon";
  gitPic:string = "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU";
  constructor() { }

  ngOnInit(): void {
  }

}
