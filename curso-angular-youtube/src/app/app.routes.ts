import { Routes } from '@angular/router';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AppComponent } from './app.component';
import { Formulario1Component } from './formulario1/formulario1.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'login', component: Formulario1Component },
    {path: 'contacto', component: ContactanosComponent}
];
