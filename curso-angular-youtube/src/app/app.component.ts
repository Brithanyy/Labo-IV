import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario1Component } from "./formulario1/formulario1.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavFooterComponent } from "./nav-footer/nav-footer.component";
import { ContactanosComponent } from "./contactanos/contactanos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Formulario1Component, NavBarComponent, CommonModule, FormsModule, NavFooterComponent, ContactanosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inmo-Web';
 

}