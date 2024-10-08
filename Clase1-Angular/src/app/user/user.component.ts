import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  username = 'Brithany';
  password = 'Brisa2002';
  estaLogeado = false;
  userNameInput = "";
  userPassInput = "";
  evento() {
    console.log("Imagen clickeada");
    alert("Imagen Clickeada");
  };
  logUser() {
    if(this.username === this.userNameInput && this.password === this.userPassInput) this.estaLogeado = true;
    else if(this.userNameInput || this.userPassInput === "") alert("Ningun campo puede quedar vacío.");
    else alert("Los datos son incorrectos. Intente nuevamente.");
  }
  logOut() {
    this.userNameInput = "";
    this.userPassInput = "";
    this.estaLogeado = false;
  }
}
