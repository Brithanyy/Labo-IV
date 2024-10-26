import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageFormularioComponent } from "./pages/page-formulario/page-formulario.component";
import { ReactiveFormsModule } from '@angular/forms'; // Importa el módulo correcto


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageFormularioComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularios-reactivos';
}
