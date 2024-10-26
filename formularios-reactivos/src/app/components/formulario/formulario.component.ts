import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms'; // Importa ReactiveFormsModule

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Usa ReactiveFormsModule
  templateUrl: './formulario.component.html', 
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formRegister: FormGroup;

  constructor(private fb: FormBuilder) {

    this.formRegister = this.fb.group({
      'username' : ['', [Validators.required]],
      'password' : ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,}$')]]
    });

  }
  
  // O con getters:
  get username() {
    return this.formRegister.get('username') as FormControl;
  }

  get pass() {
    return this.formRegister.get('password') as FormControl;
  }
    
  datosFormulario() {
    console.log(this.formRegister.value);
  }

}
