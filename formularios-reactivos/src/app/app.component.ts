import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageFormularioComponent } from "./pages/page-formulario/page-formulario.component";
import { ReactiveFormsModule } from '@angular/forms';
import { AddMensajeComponent } from "./add-mensaje/add-mensaje.component";
import { ListMensajeComponent } from "./list-mensaje/list-mensaje.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageFormularioComponent, ReactiveFormsModule, AddMensajeComponent, ListMensajeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularios-reactivos';
}
