import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { NavFooterComponent } from "../../components/nav-footer/nav-footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, NavFooterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
