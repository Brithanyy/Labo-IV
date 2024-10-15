import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { style } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tp-adicional-databinding';
  focus = false;
  contentEditable = false;
  inputText = " ";
  toggleContentEditable() {
    this.contentEditable = !this.contentEditable;
  }
  onMouseOver() {
    this.focus = true;
  }
}
