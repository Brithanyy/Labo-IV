import { Component } from '@angular/core';
import { FormularioModificarComponent } from "../../components/formulario-modificar/formulario-modificar.component";

@Component({
  selector: 'app-page-modificar',
  standalone: true,
  imports: [FormularioModificarComponent],
  templateUrl: './page-modificar.component.html',
  styleUrl: './page-modificar.component.css'
})
export class PageModificarComponent {

}
