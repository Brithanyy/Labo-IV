import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from "./hijo/hijo.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ouput-input';
  input = '';
}
