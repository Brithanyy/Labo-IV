import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-footer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nav-footer.component.html',
  styleUrl: './nav-footer.component.css'
})
export class NavFooterComponent {
  anioEmpresa: number = new Date().getFullYear();   
}
