import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommonModule, GamesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Clase1-Angular';
}
