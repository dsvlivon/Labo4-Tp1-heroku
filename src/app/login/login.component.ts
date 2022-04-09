import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  miUsuario:Usuario;
  
  
  constructor(public ruteo:Router) { 
    this.miUsuario=new Usuario();
    //cuando tengo data del usuario, aca puedo redirigir a un lugar especifico
    //ruteo.nav
  }
  
  ngOnInit(): void {
  }

  Log(){
    this.miUsuario.Login();
    if(this.miUsuario.validate==true){
      this.ruteo.navigateByUrl('home');
    } else {
      this.ruteo.navigateByUrl('login');
    }
  }
  Cancel(){
    this.ruteo.navigateByUrl('login');
  }

}
