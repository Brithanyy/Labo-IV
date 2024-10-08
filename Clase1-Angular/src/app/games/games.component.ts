import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games = [
    {
      id: 1,
      name: "FarCry 5"
    }, 
    {
      id: 2,
      name: "GTA V"
    },
    {
      id: 3,
      name: "The Sims 3"
    }
  ];

}
