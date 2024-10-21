import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { NavFooterComponent } from '../nav-footer/nav-footer.component';

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [NavBarComponent, NavFooterComponent],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {  
  whatsapp = 'https://wa.me/2235942827?text=Inmo-Web a su Servicio';
  instagram = 'https://www.instagram.com/brithany__o';
}
