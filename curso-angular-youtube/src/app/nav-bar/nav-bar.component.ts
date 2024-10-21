import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  img : string = 'https://ideogram.ai/assets/progressive-image/balanced/response/4lldEKfXSwiyDSSV5jg0rA';
  whatsapp = 'https://wa.me/2235942827?text=Inmo-Web a su Servicio';
  instagram = 'https://www.instagram.com/brithany__o';

}
