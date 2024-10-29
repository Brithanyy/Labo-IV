import { Component } from '@angular/core';
import { FormularioPersonajeComponent } from "../../components/formulario-personaje/formulario-personaje.component";

@Component({
  selector: 'app-add-personaje',
  standalone: true,
  imports: [FormularioPersonajeComponent],
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

}
