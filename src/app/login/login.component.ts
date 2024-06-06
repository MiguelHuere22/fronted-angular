import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  correo: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.authService.login(this.correo, this.password).subscribe(response => {
      if (response.status_code === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Usuario encontrado',
          text: '¡Inicio de sesión exitoso!'
        });
        localStorage.setItem('authToken', 'true');
        this.router.navigate(['/home']);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Correo o contraseña incorrectos'
        });
      }
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Correo o contraseña incorrectos'
      });
    });
  }
}
