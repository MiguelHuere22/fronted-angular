import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Asegúrate de importar HttpClientModule
    CommonModule, // Asegúrate de importar CommonModule
    FormsModule // Asegúrate de importar FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
