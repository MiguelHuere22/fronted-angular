import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule, LoginComponent] // Elimina HttpClientModule aquí
})
export class AppComponent {
  title = 'angular-demo01-241D';
  isLoggedIn = false;

  constructor() {}

  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      this.isLoggedIn = !!localStorage.getItem('authToken');
    }
  }
}
