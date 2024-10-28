import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CharacterFormComponentComponent } from "./components/character-form-component/character-form-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, CharacterFormComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestion-Comics';
}
