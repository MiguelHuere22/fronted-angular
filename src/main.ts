import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Importa provideHttpClient

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // Proveer HttpClient aquí
  ]
})
  .catch(err => console.error(err));

