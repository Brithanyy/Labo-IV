import { Component, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  @Input() title? : string;
  @Input() input? : string;
}
