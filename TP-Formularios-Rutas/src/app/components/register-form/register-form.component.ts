import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  isPasswordVisible : boolean = false;
  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible
  }
}
