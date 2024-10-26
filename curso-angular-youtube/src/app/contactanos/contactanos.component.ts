import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavFooterComponent } from '../nav-footer/nav-footer.component';
import { EmailService } from '../../Service/email.service.spec';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [NavBarComponent, NavFooterComponent, FormsModule],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {  
  whatsapp = 'https://wa.me/2235942827?text=Inmo-Web a su Servicio';
  instagram = 'https://www.instagram.com/brithany__o';
  empresa = 'Inmo-Web';

  nombre = '';
  correo = '';
  mensaje = '';

  constructor(private emailService: EmailService) {}

  enviarFormulario() {
    const formData = {
      name : this.nombre,
      email : this.correo,
      message: this.mensaje
    }
  
  this.emailService.sendEmail(formData)
  .then(() => {
    // Limpiar el formulario o mostrar un mensaje de éxito
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  })
  .catch(err => {
    // Manejar el error
    console.error('Error al enviar el correo', err);
  });
}

}
