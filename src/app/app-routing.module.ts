import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {path:'', component:HomeComponent},
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'quiensoy', component:QuienSoyComponent},  
  {path:'juegos', component:JuegosComponent, children:[
    {path:'ahorcado', component:AhorcadoComponent}
  ]},
  {path:'preguntados', component:PreguntadosComponent},  
  {path:'tateti', component:TatetiComponent},  
  // {path:'preguntados', component:PreguntadosComponent},
  
  {path:'**', component:NotFoundComponent}

];//aca hay q agregar dsd q path va a q component

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
