import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { TatetiComponent } from './page/tateti/tateti.component';
import { PreguntadosComponent } from './page/preguntados/preguntados.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { MenuComponent } from './page/menu/menu.component';
import { NavBarComponent } from './page/nav-bar/nav-bar.component';

//todas las clases q genere TIENEN Q ESTAR ACA, ACA ESTA LA MAGIA

@NgModule({
  declarations: [
    AppComponent,
    QuienSoyComponent,
    LoginComponent,
    HomeComponent,
    JuegosComponent,
    TatetiComponent,
    PreguntadosComponent,
    NotFoundComponent,
    MenuComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
