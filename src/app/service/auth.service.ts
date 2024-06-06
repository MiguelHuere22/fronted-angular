import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly BASE_URL: string = 'http://localhost:5000/estudiantes/v1';

  constructor(private http: HttpClient) {}

  login(correo: string, contraseña: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login`, { correo, contraseña }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}

