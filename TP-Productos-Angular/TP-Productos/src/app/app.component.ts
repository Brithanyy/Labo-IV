import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from "./productos/productos.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, ProductosComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP-Productos';
  mostrarEjercicio1 = false;
  ejercicio1() {
    this.mostrarEjercicio1 = true;
  }
  salirEjercicio1() {
    this.mostrarEjercicio1 = false;
  }
}
